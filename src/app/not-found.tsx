"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="relative flex min-h-screen flex-col bg-surface">
            <Navbar />

            <main id="main-content" tabIndex={-1} className="relative flex flex-1 items-center justify-center px-4 pt-24 pb-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
                    <span className="text-[20vw] md:text-[28vw] lg:text-[30vw] font-bold font-monaExpanded text-primary opacity-5 select-none">
                        404
                    </span>
                </div>

                <div className="text-center relative z-10">
                    <h1 className="text-6xl md:text-8xl font-bold text-primary font-monaExpanded">
                        Page Not Found
                    </h1>
                    <p className="text-lg md:text-2xl text-white/70 font-monaExpanded mt-3 max-w-lg">
                        The page you are looking for does not exist or may have been moved.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Go Back Home
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                            <Link href="/course-details">
                                <Compass className="mr-2 h-4 w-4" />
                                Browse Courses
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
