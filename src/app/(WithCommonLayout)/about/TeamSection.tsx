import { Users } from "lucide-react";
import Image from "next/image";
import { ajeful, debrotto, mehedi, mithun, neyemur, nur, nur_2, puspita, sakin } from "@/assets/teamMembers/index";

const teamMembers = [
  { name: "Mithun Sarkar", role: "Founder & CEO", company: "MISUN Academy", image: mithun },
  { name: "Puspita Singha", role: "Lead Instructor, English For Professional Communication", company: "MISUN Academy", image: puspita },
  { name: "Debbroto Biswas", role: "Senior Visualizer", company: "MISUN Academy", image: debrotto },
  { name: "Nurnobi Hossen Shagor", role: "Senior Visualizer", company: "MISUN Academy", image: nur },
  { name: "MD.Nur Nobe Islam", role: "Video Editor", company: "MISUN Academy", image: nur_2 },
  { name: "Ajeful Mallick", role: "Design And Social Media Coordinator", company: "MISUN Academy", image: ajeful },
  { name: "Mehedi Hasan", role: "Web Developer", company: "MISUN Academy", image: mehedi },
  { name: "S. M. Nayemur Rahman", role: "Marketing Executive", company: "MISUN Academy", image: neyemur },
  { name: "Nafiun Sakin", role: "Community Growth Manager", company: "MISUN Academy", image: sakin },
];

export function TeamSection() {
  return (
    <section className="relative bg-[#060a0f] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute -top-10 right-1/3 w-96 h-96 bg-primary/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
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
            <div key={index}
              className="group relative rounded-2xl p-[1px] overflow-hidden flex flex-col
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:scale-[1.015]
                hover:shadow-[0_20px_60px_hsl(217_70%_42%/0.35)]"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <span className="absolute inset-0 animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_70%_42%/0.8),transparent)]" />
                <span className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse] bg-[conic-gradient(from_180deg,transparent_70%,hsl(217_85%_70%/0.4),transparent)]" />
              </div>

              <div className="relative z-10 rounded-2xl bg-[#060a0f] border border-primary/15 p-8 text-center transition-all duration-500 group-hover:border-primary/40 h-full">
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <span className="absolute -left-[120%] top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000 ease-out" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex justify-center mb-8">
                  <div className="relative p-[2px] rounded-full overflow-hidden w-36 h-36 shadow-[0_0_30px_hsl(217_70%_42%/0.2)]">
                    <span className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_50%,hsl(217_70%_42%/0.8),transparent)]" />
                    <span className="absolute inset-[-100%] animate-[spin_10s_linear_infinite_reverse] bg-[conic-gradient(from_180deg,transparent_70%,hsl(217_85%_70%/0.4),transparent)]" />
                    <div className="relative rounded-full overflow-hidden w-full h-full bg-[#060a0f] p-[2px]">
                      <div className="relative rounded-full overflow-hidden w-full h-full">
                        <Image src={member.image} alt={member.name} fill sizes="144px"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110" />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white/90 transition-all duration-300 group-hover:text-white group-hover:tracking-wide mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary/80 mb-1">{member.role}</p>
                <p className="text-xs text-white/40">{member.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
