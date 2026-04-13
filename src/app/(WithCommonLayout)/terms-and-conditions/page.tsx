// app/terms-and-conditions/page.tsx
import { generateMetadata } from '@/lib/generateMetadata';

export const metadata = generateMetadata({
    title: 'Terms & Conditions | ESUN POINT',
    description:
        'Read the ESUN POINT terms and conditions. Understand your rights and responsibilities as a student, including course content usage, account policies, and community guidelines.',
    keywords: [
        'esun point terms and conditions',
        'misun academy terms of service',
        'online course terms',
        'student agreement bangladesh',
    ],
    slug: 'terms-and-conditions',
});

export default function TermsAndConditionsPage() {
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
                        <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Terms &amp; </span>
                        <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">Conditions</span>
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

                    <p className="text-white/75 border-l-2 border-primary/40 pl-4">
                        Welcome to <strong className="text-white/90">ESUN POINT</strong>. By using our website, courses, and other services, it is assumed that you have read, understood, and agreed to all our terms and conditions. Here, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot; refer to the MISUN Academy authority.
                    </p>
                    <p className="text-white/75 border-l-2 border-primary/40 pl-4">
                        If you have any questions or ambiguity about any part of our terms, please contact us directly via email or our official page. The authority reserves the right to update the Terms and Conditions of MISUN Academy at any time.
                    </p>

                    <div className="border-t border-primary/15 pt-6">
                        <h2 className="text-xl font-semibold text-white/90 mb-6 flex items-center gap-2"><span className="w-1 h-5 rounded-full bg-primary/70 inline-block"></span> Terms & Conditions</h2>
                        <ol className="space-y-5">
                            {[
                                { title: "Abuse of course content is strictly prohibited:", body: "Sharing videos, text, or any other learning material of any of our courses with anyone for free or in exchange for money is completely illegal. Your email or password must not be shared with others. It is an offense under copyright law and digital security law." },
                                { title: "Account only for you:", body: "Your MISUN Academy account information (username, password) is strictly personal. Allowing others to use it may result in permanent deactivation of your account." },
                                { title: "Content copying or redistribution:", body: "No course content can be shared hand-to-hand, Google Drive, Facebook, YouTube, Pen Drive, or any other medium without our written permission. Legal action may be taken." },
                                { title: "Group/Community code of conduct:", body: "Attacking, insulting, violent language, political discussion, or spamming anyone in our Facebook group, chat, comments, or forums is absolutely unacceptable. Rule breaking may result in account cancellation." },
                                { title: "Know the course curriculum before enrolling:", body: "Check the syllabus and details before getting admitted to a course. Refund or exchange is not possible once the course has started." },
                                { title: "Course transfer policy:", body: "Once a course is active on an email, it cannot be transferred to another email. Only registration info can be updated before starting." },
                                { title: "Learning materials for personal use only:", body: "Course resources (videos, links, blogs) are for personal practice only. Cannot be used for any other purpose." },
                                { title: "Spam or promotional content:", body: "No form of advertisement or promotion can be run in our group, page, or forum." },
                                { title: "Payment related decisions are final:", body: "Read course fees and payment methods in detail. We only accept specified mediums (Bkash Merchant/SSLCommerz). The authority is not responsible for payments made through other mediums." },
                                { title: "Expected compliance with law:", body: "Lawful and respectful use is expected from all users of MISUN Academy. Necessary legal action may be taken if any illegal activity is detected." },
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-xs font-bold text-primary/80 mt-0.5">{i + 1}</span>
                                    <div>
                                        <strong className="text-white/85">{item.title}</strong>
                                        <br />
                                        <span className="text-white/60">{item.body}</span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="border-t border-primary/15 pt-6">
                        <div className="rounded-xl bg-primary/5 border border-primary/15 px-6 py-5 mb-5">
                            <p className="text-white/75 text-sm leading-7">May your education journey be transparent, safe, and fruitful. Follow the rules, build yourself.</p>
                        </div>
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-white/45 text-sm">📩 Contact:</span>
                            <a href="mailto:team@misun-academy.com" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary/90 text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all">
                                {/* team@misun-academy.com */}
                                misunacademybd@gmail.com
                            </a>
                        </div>
                        <p className="mt-5 text-primary/70 font-semibold text-sm">— Team MISUN Academy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}            