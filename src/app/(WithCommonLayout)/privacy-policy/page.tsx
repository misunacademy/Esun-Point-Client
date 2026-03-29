// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#060f0a] relative overflow-hidden pt-20">
            {/* Dot-grid */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />
            <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-primary/7 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 mb-20">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                        </span>
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/90">ESUN POINT</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Privacy </span>
                        <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">Policy</span>
                    </h1>
                    <p className="text-sm text-white/35">Last updated: 19 July, 2025</p>
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl bg-[#0a1610] border border-primary/20 shadow-[0_0_80px_hsl(156_70%_42%/0.12)] p-8 md:p-10 leading-8 space-y-6 text-white/70 font-bangla">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  <div className="absolute -top-6 left-0 w-5 h-5 border-t border-l border-primary/40 rounded-tl-2xl" />
                    <div className="absolute -top-6 right-0 w-5 h-5 border-t border-r border-primary/40 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary/25 rounded-bl-2xl" />
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary/25 rounded-br-2xl" />

                    <p className="text-white/75 border-l-2 border-primary/40 pl-4">
                        Welcome to <strong className="text-white/90">ESUN POINT</strong>. Your trust is our greatest strength. Heartfelt thanks for joining the MISUN Academy family.
                    </p>

                    <p className="text-white/75 border-l-2 border-primary/40 pl-4">
                        At ESUN POINT, we are committed to protecting the safety and privacy of your personal information. When you use our website or services, you share your information with us trusting our integrity. To honor that trust, we want to clearly state—what kind of information we collect, how we use it, and what your rights are.
                    </p>

                    <p className="text-white/75 border-l-2 border-primary/40 pl-4">
                        Please read this privacy policy carefully. If you have any questions or concerns, please contact —{" "}
                        <a href="mailto:team@misun-academy.com" className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors">
                            {/* team@misun-academy.com */}
                            misunacademybd@gmail.com
                        </a>
                        .
                    </p>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-4 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> Which information do we collect?</h2>

                        <h3 className="text-base font-semibold text-primary/80 mt-5 mb-2">1. Information you provide to us</h3>
                        <ul className="list-disc pl-6 space-y-1.5 text-white/60 marker:text-primary/60">
                            <li>Personal identity information: Name, email, mobile number, address, password, etc.</li>
                            <li>Transaction-related information: Card number, payment gateway data, etc.</li>
                            <li>Social media information: Information received through Facebook or Google login.</li>
                        </ul>
                        <p className="mt-3">
                            Please ensure that the information you provide to us is true, complete, and up-to-date. It is your responsibility to inform us immediately of any changes.
                        </p>

                        <h3 className="text-base font-semibold text-primary/80 mt-5 mb-2">2. Automatically collected information</h3>
                        <ul className="list-disc pl-6 space-y-1.5 text-white/60 marker:text-primary/60">
                            <li>Your device and operating system</li>
                            <li>Browser type</li>
                            <li>IP address</li>
                            <li>Your visit time, location, and website usage patterns</li>
                        </ul>
                        <p className="mt-3">This information is used for website security, performance analysis, and development.</p>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-4 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> How do we use your information?</h2>
                        <ul className="list-disc pl-6 space-y-1.5 text-white/60 marker:text-primary/60">
                            <li>Providing courses and services</li>
                            <li>Improving user experience</li>
                            <li>Providing security and technical support</li>
                            <li>Staying in touch with you</li>
                            <li>Internal analysis and research</li>
                        </ul>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-3 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> Use of Cookies</h2>
                        <p>Yes, we use cookies and other tracking tools to improve your browsing experience and make the website more useful for you. You can control cookies through browser settings if you wish.</p>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-3 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> Policy Changes</h2>
                        <p>We may update this privacy policy from time to time as needed. If there are significant changes, we will clearly state them on the website.</p>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-3 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> Contact Us</h2>
                        <p>
                            If you have any questions, feedback, or complaints, please email us —{" "}
                            <a href="mailto:team@misun-academy.com" className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors">
                                {/* team@misun-academy.com */}
                                misunacademybd@gmail.com
                            </a>
                            .
                        </p>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <p className="text-white/80 font-semibold">Your trust is our inspiration. Welcome and congratulations to MISUN Academy!</p>
                        <p className="text-primary/70 font-semibold mt-1">— Team MISUN Academy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
