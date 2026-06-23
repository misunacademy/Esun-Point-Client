// app/refund-policy/page.tsx
import { generateMetadata } from '@/lib/generateMetadata';

export const metadata = generateMetadata({
    title: 'Refund Policy | ESUN POINT',
    description:
        'Understand the ESUN POINT refund policy. Learn about eligibility criteria, how to request a refund, and our processing timeline for course fee returns.',
    keywords: [
        'esun point refund policy',
        'misun academy refund',
        'online course refund bangladesh',
        'course fee refund',
    ],
    slug: 'refund-policy',
});

export default function RefundPolicyPage() {
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

            <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 mb-16">
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
                        <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Refund </span>
                        <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">Policy</span>
                    </h1>
                    <p className="text-sm text-white/35">Last Update: 19 July, 2025</p>
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl bg-[#0a1610] border border-primary/20 shadow-[0_0_80px_hsl(156_70%_42%/0.12)] p-8 md:p-10 leading-8 space-y-6 text-white/70 font-bangla">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                   <div className="absolute -top-6 left-0 w-5 h-5 border-t border-l border-primary/40 rounded-tl-2xl" />
                    <div className="absolute -top-6 right-0 w-5 h-5 border-t border-r border-primary/40 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary/25 rounded-bl-2xl" />
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary/25 rounded-br-2xl" />

                    <p className="text-white/75 border-l-2 border-primary/40 pl-4">Our refund policy is simple and transparent. We want you to join our courses with full confidence and clarity.</p>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-3 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> Refund Time Window</h2>
                        <p>
                            If you have purchased a course, you may submit a refund request within <strong className="text-white/85">24 hours of purchase</strong>. Refund requests submitted after this window will not be accepted.
                        </p>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-3 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> How to Request a Refund</h2>
                        <p className="mb-4">To initiate a refund, please send us an email with the following details:</p>
                        <ul className="list-disc pl-6 space-y-1.5 text-white/60 marker:text-primary/60">
                            <li>Your full name and registered email address</li>
                            <li>Course name</li>
                            <li>Payment date and payment method</li>
                            <li>Reason for refund</li>
                        </ul>
                        <p className="mt-4">
                            Send your request to:{" "}
                            <a href="mailto:misunacademybd@gmail.com" className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors">
                                misunacademybd@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-3 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> Review & Follow-up</h2>
                        <p>After receiving your refund request, our team will typically reach out to you within <strong className="text-white/85">2 to 3 business days</strong>. Additional information may be requested if needed.</p>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-3 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> Processing & Timeline</h2>
                        <p>If your refund is approved, the amount will be processed within <strong className="text-white/85">5 to 10 business days</strong>. The refund will be returned to the same payment method used during the original transaction.</p>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <p className="text-white/80 font-semibold">Your satisfaction matters to us. Please review the course details carefully before enrolling and keep the refund window in mind.</p>
                        <p className="mt-3">
                            📩 For further assistance, email us at:{" "}
                            <a href="mailto:misunacademybd@gmail.com" className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors">
                                misunacademybd@gmail.com
                            </a>
                        </p>
                        <p className="mt-4 text-primary/70 font-semibold">— Team MISUN Academy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
//      