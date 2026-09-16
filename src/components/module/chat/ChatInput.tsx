import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  inputValue: string;
  setInputValue: (val: string) => void;
  isTyping: boolean;
  onSend: (e?: React.FormEvent) => void;
}

export function ChatInput({ inputValue, setInputValue, onSend }: ChatInputProps) {
  return (
    <form onSubmit={onSend} className="p-3 bg-[#171f33]/30 border-t border-white/5 flex gap-2 items-center">
      <div className="flex-grow bg-[#171f33]/70 backdrop-blur-xl border border-white/5 rounded-xl flex items-center gap-2 px-3 py-1 focus-within:ring-1 focus-within:ring-primary/40 focus-within:shadow-[0_0_12px_hsl(var(--primary)/0.1)] transition-all duration-300">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="বাংলায় আপনার প্রশ্ন লিখুন..."
          className="bg-transparent border-none focus:ring-0 flex-grow text-[#dae2fd] text-[14px] py-2.5 outline-none placeholder-[#bccbb9]/40"
        />
      </div>
      <button
        type="submit"
        aria-label="Send message"
        disabled={!inputValue.trim()}
        className="flex-shrink-0 w-10 h-10 bg-primary hover:bg-blue-600 disabled:opacity-30 rounded-xl flex items-center justify-center transition-all"
      >
        <SendHorizontal className="w-4 h-4 text-white" />
      </button>
    </form>
  );
}
