import { generateMetadata } from '@/lib/generateMetadata';
import { Target, Eye, Users, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { ajeful, debrotto, mehedi, mithun, neyemur, nur, nur_2, puspita } from "@/assets/teamMembers/index";
import Link from "next/link";

export const metadata = generateMetadata({
    title: 'About Us | ESUN POINT',
    description:
        'Learn about ESUN POINT and the MISUN Academy team. Our mission is to provide professional English communication training that builds confident, career-ready learners in Bangladesh and beyond.',
    keywords: [
        'about esun point',
        'misun academy team',
        'english course instructor',
        'khulna english academy',
        'online english education bangladesh',
        'puspita singha instructor',
        'mithun sarkar misun',
    ],
    slug: 'about',
});

const teamMembers = [
    {
        name: "Mithun Sarkar",
        role: "Founder & CEO",
        company: "MISUN Academy",
        image: mithun,
    },
    {
        name: "Puspita Singha",
        role: "Lead Instructor, English For Professional Communication",
        company: "MISUN Academy",
        image: puspita,

    },
    {
        name: "Debbroto Biswas",
        role: "Senior Visualizer",
        company: "MISUN Academy",
        image: debrotto,

    },
    {
        name: "Nurnobi Hossen Shagor",
        role: "Senior Visualizer",
        company: "MISUN Academy",
        image: nur,

    },
    {
        name: "MD.Nur Nobe Islam",
        role: "Video Editor",
        company: "MISUN Academy",
        image: nur_2,

    },
    {
        name: "Ajeful Mallick",
        role: "Design And Social Media Coordinator",
        company: "MISUN Academy",
        image: ajeful,

    },
    {
        name: "Mehedi Hasan",
        role: "Web Developer",
        company: "MISUN Academy",
        image: mehedi,
    },

    {
        name: "S. M. Nayemur Rahman",
        role: "Marketing Executive",
        company: "MISUN Academy",
        image: neyemur,

    },
];


const missionItems = [
    "Teaching international standard digital skills to the youth of Bangladesh.",
    "Providing hands-on learning experiences.",
    "Building confidence to build freelancing and remote careers.",
    "Building a technology-driven, self-reliant generation.",
];

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-[#060a0f] font-bangla overflow-hidden">

            {/* ── HERO ── */}
            <section className="relative bg-[#060a0f] overflow-hidden">
                {/* Dot-grid */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

                {/* Ambient glows */}
                <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-primary/7 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                {/* Bottom separator */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="relative z-10 max-w-5xl mx-auto px-4 py-28 text-center">
                    {/* Icon ring */}
                    <div className="flex justify-center mb-8">
                        <div className="relative p-[1.5px] rounded-full overflow-hidden">
                            <span className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_70%_42%)_100%)]" />
                            <div className="relative w-20 h-20 rounded-full bg-[#060a0f] flex items-center justify-center">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                        </span>
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/90">ESUN POINT</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-[140%] mb-6">
                        <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">About </span>
                        <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_hsl(217_70%_42%/0.5)]">Us</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">
                        New horizons in digital education for future generations
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center gap-3 w-full max-w-xs mx-auto mt-10">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
                        <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
                    </div>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section className="relative bg-[#060a0f] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="absolute -top-10 right-1/3 w-96 h-96 bg-primary/6 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
                            <Users className="w-3.5 h-3.5 text-primary" />
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/90">Our Team</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-[140%]">
                            <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Meet Our </span>
                            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(217_70%_42%/0.45)]">Visionary Team</span>
                        </h2>
                        <p className="mt-4 text-white/50 max-w-2xl mx-auto">
                            The talented team members of ESUN POINT behind the transformation of digital education
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group relative rounded-2xl p-[1px] overflow-hidden flex flex-col
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:scale-[1.015]
                                hover:shadow-[0_20px_60px_hsl(217_70%_42%/0.35)]"
                            >

                                {/* Animated border container */}
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <span
                                        className="absolute inset-0 animate-[spin_8s_linear_infinite]
      bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_70%_42%/0.8),transparent)]"
                                    />
                                    <span
                                        className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse]
      bg-[conic-gradient(from_180deg,transparent_70%,hsl(217_85%_70%/0.4),transparent)]"
                                    />
                                </div>

                                {/* Content card */}
                                <div
                                    className="relative z-10 rounded-2xl bg-[#060a0f] border border-primary/15
    p-8 text-center transition-all duration-500 group-hover:border-primary/40 h-full"
                                >

                                    {/* Light sweep */}
                                    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                        <span
                                            className="absolute -left-[120%] top-0 h-full w-[60%]
        bg-gradient-to-r from-transparent via-white/10 to-transparent
        skew-x-12
        group-hover:left-[120%]
        transition-all duration-1000 ease-out"
                                        />
                                    </div>

                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 rounded-2xl
      bg-gradient-to-b from-primary/10 via-transparent to-transparent
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500 pointer-events-none"
                                    />

                                    {/* Avatar */}
                                    <div className="relative flex justify-center mb-8">
                                        <div className="relative p-[2px] rounded-full overflow-hidden w-36 h-36
      shadow-[0_0_30px_hsl(217_70%_42%/0.2)]">

                                            <span className="absolute inset-[-100%] animate-[spin_6s_linear_infinite]
        bg-[conic-gradient(from_0deg,transparent_50%,hsl(217_70%_42%/0.8),transparent)]" />

                                            <span className="absolute inset-[-100%] animate-[spin_10s_linear_infinite_reverse]
        bg-[conic-gradient(from_180deg,transparent_70%,hsl(217_85%_70%/0.4),transparent)]" />

                                            <div className="relative rounded-full overflow-hidden w-full h-full bg-[#060a0f] p-[2px]">
                                                <div className="relative rounded-full overflow-hidden w-full h-full">
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Text */}
                                    <h3
                                        className="text-xl font-bold text-white/90
      transition-all duration-300
      group-hover:text-white group-hover:tracking-wide mb-1"
                                    >
                                        {member.name}
                                    </h3>

                                    <p className="text-sm font-semibold text-primary/80 mb-1">
                                        {member.role}
                                    </p>

                                    <p className="text-xs text-white/40">
                                        {member.company}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OUR STORY ── */}
            <section className="relative bg-[#060a0f] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute -top-10 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
                    <div className="text-center mb-12">
                        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                            </span>
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/90">আমাদের গল্প</span>
                        </div> */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-[140%]">
                            <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Our </span>
                            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-[0_0_16px_hsl(217_70%_42%/0.4)]">Story</span>
                        </h2>
                    </div>

                    {/* Story card */}
                    <div className="relative overflow-hidden rounded-3xl bg-[#060a0f] border border-primary/15
                        p-8 md:p-12
                        shadow-[0_0_60px_hsl(217_70%_42%/0.10)]">

                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl" />
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-3xl" />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-3xl" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-3xl" />
                        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
                            <strong className="text-primary font-semibold">ESUN POINT</strong> is an innovative digital learning platform established with the goal of building skilled and capable future generations. Our main goal is to provide students in Bangladesh and anywhere in the world the opportunity to learn modern technology and digital skills (such as Graphic Design, Freelancing, Digital Marketing, Video Editing, etc.).
                        </p>

                        {/* Highlighted quote */}
                        <div className="relative pl-5 border-l-2 border-primary/50">
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary/70" />
                            <p className="text-base md:text-lg text-white/70 leading-relaxed italic">
                                We believe that creativity is within everyone—it&apos;s possible to awaken that talent through proper guidance and practical skills training. MISUN Academy is working towards that goal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MISSION & VISION ── */}
            <section className="relative bg-[#060a0f] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
                    {/* <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                            </span>
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/90">Mission & Vision</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-[140%]">
                            <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">আমাদের </span>
                            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-[0_0_16px_hsl(217_70%_42%/0.4)]">লক্ষ্য ও দর্শন</span>
                        </h2>
                    </div> */}

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Mission */}
                        <div className="group relative overflow-hidden rounded-3xl
                            bg-gradient-to-br from-[#0a1620] via-[#0d1c2b] to-[#060a0f]
                            border border-primary/25 p-10
                            shadow-[0_0_50px_hsl(217_70%_42%/0.12)]
                            transition-all duration-300 hover:shadow-[0_0_70px_hsl(217_70%_42%/0.22)] hover:-translate-y-1">

                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-3xl" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/60 rounded-tr-3xl" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/60 rounded-bl-3xl" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-3xl" />
                            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                            <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="text-center mb-8">
                                <div className="relative inline-flex p-[1.5px] rounded-full overflow-hidden mb-5">
                                    <span className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_70%_42%)_100%)]" />
                                    <div className="relative w-16 h-16 rounded-full bg-[#0a1620] flex items-center justify-center">
                                        <Target className="w-7 h-7 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Our </span>
                                    <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">Mission</span>
                                </h3>
                                <p className="text-primary/70 text-sm font-semibold mt-2 tracking-wide uppercase">Skill First, Career Next.</p>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

                            <p className="text-white/55 text-sm mb-6">Our mission is:</p>
                            <ul className="space-y-4">
                                {missionItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center mt-0.5">
                                            <ArrowRight className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <span className="text-sm text-white/65 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Vision */}
                        <div className="group relative overflow-hidden rounded-3xl
                            bg-gradient-to-br from-[#0a1620] via-[#0d1c2b] to-[#060a0f]
                            border border-primary/25 p-10
                            shadow-[0_0_50px_hsl(217_70%_42%/0.12)]
                            transition-all duration-300 hover:shadow-[0_0_70px_hsl(217_70%_42%/0.22)] hover:-translate-y-1">

                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-3xl" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/60 rounded-tr-3xl" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/60 rounded-bl-3xl" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-3xl" />
                            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

                            <div className="text-center mb-8">
                                <div className="relative inline-flex p-[1.5px] rounded-full overflow-hidden mb-5">
                                    <span className="absolute inset-[-100%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_180deg,transparent_60%,hsl(217_70%_42%)_100%)]" />
                                    <div className="relative w-16 h-16 rounded-full bg-[#0a1620] flex items-center justify-center">
                                        <Eye className="w-7 h-7 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Our </span>
                                    <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">Vision</span>
                                </h3>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

                            <p className="text-white/55 text-sm mb-6">Our vision is:</p>
                            <p className="text-sm text-white/65 leading-relaxed mb-6">
                                To ensure affordable, quality, and relevant digital education for everyone, which can guide them towards an independent and self-reliant life.
                            </p>

                            {/* Highlighted quote box */}
                            <div className="relative overflow-hidden rounded-2xl bg-primary/8 border border-primary/20 p-6">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40 rounded-tl-2xl" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40 rounded-tr-2xl" />
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                                <p className="text-sm text-white/60 leading-relaxed text-center italic">
                                    We want to build a community where learning is not just about getting a certificate, but acquiring real-world practical skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="relative bg-[#060a0f] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute -top-10 left-1/4 w-[400px] h-[400px] bg-primary/7 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

                <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                        </span>
                        <span className="text-xs font-semibold  uppercase text-primary/90">Join Now</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold leading-[145%] mb-5">
                        <span className="bg-gradient-to-r from-white via-white/95 to-white/85 bg-clip-text text-transparent">Start Your Career </span>
                        <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(217_70%_42%/0.5)]">Now</span>
                    </h2>

                    <p className="text-white/50 mb-10 leading-relaxed">
                        Join MISUN Academy like thousands of other students to acquire digital skills and become successful in freelancing or local markets.
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-3 w-full max-w-xs mx-auto mb-10">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
                        <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link href="/checkout">
                <div className="relative p-[2px] rounded-xl overflow-hidden
                  shadow-[0_4px_24px_rgba(59,130,246,0.35)]
                  hover:shadow-[0_8px_36px_rgba(59,130,246,0.60)]
                  hover:scale-105 hover:-translate-y-0.5
                  active:scale-95 active:translate-y-0
                  transition-all duration-300 ease-out">
                  <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(217_91%_60%)_25%,hsl(217_85%_70%)_50%,hsl(217_91%_60%)_75%,transparent_100%)]" />
                  <button
                    className="group relative overflow-hidden
                      w-full sm:w-auto
                      inline-flex items-center justify-center gap-2
                      px-8 py-3.5
                      text-base font-bold tracking-wide rounded-[10px]
                      bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700
                      text-white
                      hover:from-blue-700 hover:via-blue-400 hover:to-blue-700
                      transition-all duration-300 ease-out"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Enroll Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0
                      bg-gradient-to-r from-transparent via-white/25 to-transparent
                      -translate-x-full group-hover:translate-x-full
                      transition-transform duration-700 ease-in-out" />
                  </button>
                </div>
              </Link>
                        <Link href="/courses">
                            <button className="inline-flex items-center gap-2
                                bg-[#060a0f] border border-primary/30 text-white/70
                                hover:border-primary/60 hover:text-white
                                transition-all duration-300
                                px-8 py-3.5 rounded-xl text-base font-semibold cursor-pointer">
                                <ArrowRight className="w-4 h-4 text-primary/70" />
                                View Courses
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
