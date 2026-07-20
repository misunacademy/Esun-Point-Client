
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { authServerApi } from '@/lib/auth-server-api';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {

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
        console.warn('[baseApi] 401 Unauthorized - session expired or invalid');

        // Better Auth handles sessions via HTTP-only cookies
        // Sign out and redirect to login
        await authServerApi.signOut();

        if (typeof window !== 'undefined') {
            toast.error('Your session has expired. Please login again.');
            const loginUrl = new URL('/auth', window.location.origin);
            const redirectPath = `${window.location.pathname}${window.location.search}`;
            loginUrl.searchParams.set('redirect_url', redirectPath);
            window.location.href = loginUrl.toString();
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