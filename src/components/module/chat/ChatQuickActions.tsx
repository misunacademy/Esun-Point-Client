import { BookOpen, HelpCircle, CreditCard } from "lucide-react";

const QUICK_ACTIONS = [
  { label: "কোর্স সমূহ", icon: BookOpen, prompt: "আপনাদের কি কি কোর্স আছে?" },
  { label: "পেমেন্ট", icon: CreditCard, prompt: "পেমেন্ট কিভাবে করব? SSLCommerz সম্পর্কে বলুন।" },
  { label: "সাহায্য", icon: HelpCircle, prompt: "আমার সাহায্য প্রয়োজন" },
];

interface ChatQuickActionsProps {
  onAction: (prompt: string) => void;
}

export function ChatQuickActions({ onAction }: ChatQuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center pb-2">
      {QUICK_ACTIONS.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.label}
            onClick={() => onAction(action.prompt)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171f33]/70 border border-white/10 text-[12px] text-[#bccbb9] hover:text-primary hover:border-primary/30 transition-all duration-200"
          >
            <Icon className="w-3.5 h-3.5" />
            {action.label}
          </button>
        );
      })}
    </div>
  );
}
