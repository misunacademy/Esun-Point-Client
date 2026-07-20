export function StorySection() {
  return (
    <section className="relative bg-[#060a0f] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -top-10 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-[140%]">
            <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Our </span>
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-[0_0_16px_hsl(217_70%_42%/0.4)]">Story</span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[#060a0f] border border-primary/15 p-8 md:p-12 shadow-[0_0_60px_hsl(217_70%_42%/0.10)]">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-3xl" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
            <strong className="text-primary font-semibold">ESUN POINT</strong> is an innovative digital learning platform established with the goal of building skilled and capable future generations. Our main goal is to provide students in Bangladesh and anywhere in the world the opportunity to learn modern technology and digital skills (such as Graphic Design, Freelancing, Digital Marketing, Video Editing, etc.).
          </p>

          <div className="relative pl-5 border-l-2 border-primary/50">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary/70" />
            <p className="text-base md:text-lg text-white/70 leading-relaxed italic">
              We believe that creativity is within everyone—it&apos;s possible to awaken that talent through proper guidance and practical skills training. MISUN Academy is working towards that goal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
