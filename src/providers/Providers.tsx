"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from '@/components/ui/sonner';
import { usePathname } from 'next/navigation';
import { initPixel, trackPageView } from '@/lib/metaPixel';

export default function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        initPixel(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID);
    }, []);

    useEffect(() => {
        trackPageView();
    }, [pathname]);

    return (
        <Provider store={store}>
            {children}
            <Toaster />
        </Provider>
    );
}
