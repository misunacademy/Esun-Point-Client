// ─── FAQ data ────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "This course is ideal for anyone who hesitates to speak in English and wants to present themselves confidently in job interviews or professional meetings. You can start right from the basics.",
  },
  {
    question: "What will be taught in the course?",
    answer:
      "Everything from spoken English fundamentals to daily conversation, professional vocabulary, presentation skills, and interview preparation will be covered.",
  },
  {
    question: "What if I miss a live class?",
    answer:
      "Recordings of all classes are saved in the dashboard. You can also get answers to any questions through live support sessions and the WhatsApp group.",
  },
  {
    question: "Will I get a certificate after the course?",
    answer:
      "Yes, upon completing the course, you will receive a digital certificate from MISUN Academy, which can be added to your LinkedIn profile or CV.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "Each class is conducted in an interactive live session. Speaking confidence is built through roleplay, group discussion, and real-life situation practice.",
  },
  {
    question: "Can I enroll even if I have no prior English experience?",
    answer:
      "Absolutely. The course starts entirely from the basics. Whatever your current English level is, you will be able to progress step-by-step.",
  },
];

const FaqSection = () => {
    return (
           <section className="relative bg-[#060a12] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="relative z-10 py-20 container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-6">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400/90">FAQ</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold uppercase leading-[140%]">
              <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
                Frequently Asked{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
              <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">?</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-blue-500/20 bg-[#060a12]/70 px-6 py-4 open:border-blue-500/40 transition-colors"
              >
                <summary className="cursor-pointer font-semibold text-white/85 text-base list-none flex justify-between items-center gap-3">
                  {faq.question}
                  <span className="flex-shrink-0 text-blue-400 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-white/55 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    );
};

export default FaqSection;