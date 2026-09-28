
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { authServerApi } from '@/lib/auth-server-api';
import { getLoginHref } from '@/lib/auth-urls';

function getCSRFToken(): string | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : null;
}

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
        const csrfToken = getCSRFToken();
        if (csrfToken) {
            headers.set("X-CSRF-Token", csrfToken);
        }
        return headers;
    },
});

const baseQueryWithSessionHandling: BaseQueryFn<
    FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 404) {
        const errorData = result.error.data as { message?: string } | undefined;
        toast.error(errorData?.message || "Something went wrong");
    }
    if (result?.error?.status === 403) {
        const errorData = result.error.data as { message?: string } | undefined;
        toast.error(errorData?.message || "Access denied");
    }
    if (result?.error?.status === 401) {
        // This app has no /auth pages — auth lives on the MA frontend.
        // Never build a same-origin /auth URL (would 404); redirect to the MA
        // login with the full current EP URL so login can send the user back.
        try {
            await authServerApi.signOut();
        } catch {
            // Sign-out failing must not block the redirect.
        }
        // Purge cached data so the next user never sees the previous user's.
        api.dispatch(baseApi.util.resetApiState());

        if (typeof window !== 'undefined') {
            toast.error('Your session has expired. Please login again.');
            window.location.href = getLoginHref(window.location.href);
        }

        return result;
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithSessionHandling,
    tagTypes: [
        'Users', 
        'Students', 
        'Batches', 
        'Pricing-Plan', 
        'Courses', 
        'CourseEnrollments', 
        'Profile', 
        'Payments', 
        'Recordings',
        'Certificates',
        'Instructors',
        'Progress',
        'Dashboard',
        'Uploads',
        'Modules',
        'Lessons',
        'Settings',
        'Employees'
    ],
    endpoints: () => ({}),
});