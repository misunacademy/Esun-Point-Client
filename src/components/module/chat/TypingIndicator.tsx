import Image from "next/image";

export function TypingIndicator() {
  return (
    <div className="flex gap-3 max-w-[85%]">
      <div className="w-8 h-8 rounded-full border border-primary/20 relative overflow-hidden flex-shrink-0">
        <Image
          src="/images/chat-bubble-icon-white.png"
          alt="Sun"
          fill
          sizes="32px"
          className="object-cover"
        />
      </div>
      <div className="bg-[#171f33]/90 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 opacity-80">
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
      </div>
    </div>
  );
}
