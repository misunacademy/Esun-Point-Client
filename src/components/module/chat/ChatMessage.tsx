import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { Message } from "@/hooks/useChat";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "bot";

  return (
    <div className={`flex gap-3 max-w-[88%] ${isBot ? "" : "ml-auto flex-row-reverse"}`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full border border-primary/20 relative overflow-hidden flex-shrink-0 mt-0.5">
          <Image
            src="/images/chat-bubble-icon-white.png"
            alt="Sun"
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
      )}
      <div className={`flex flex-col space-y-1 ${isBot ? "items-start" : "items-end"}`}>
        <div
          className={`p-3.5 rounded-2xl text-[14px] leading-relaxed ${
            isBot
              ? "bg-[#171f33]/90 text-[#dae2fd] border border-white/5 rounded-tl-none"
              : "bg-primary text-primary-foreground font-medium rounded-tr-none shadow-[0_0_10px_hsl(var(--primary)/0.25)]"
          }`}
        >
          {isBot ? (
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>,
                li: ({ children }) => <li className="text-[14px] leading-relaxed">{children}</li>,
                h3: ({ children }) => <h3 className="text-sm font-semibold text-white mt-3 mb-1">{children}</h3>,
                hr: () => <div className="my-3 border-t border-white/10" />,
                code: ({ children }) => <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm">{children}</code>,
              }}
            >
              {message.text.replace(/\n/g, "  \n")}
            </ReactMarkdown>
          ) : (
            message.text
          )}
        </div>
        <span className="text-[9px] text-[#bccbb9]/40 px-1">{message.time}</span>
      </div>
    </div>
  );
}
