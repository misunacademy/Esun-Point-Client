"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatToggleButton } from "@/components/module/chat/ChatToggleButton";
import { ChatHeader } from "@/components/module/chat/ChatHeader";
import { ChatMessage } from "@/components/module/chat/ChatMessage";
import { ChatQuickActions } from "@/components/module/chat/ChatQuickActions";
import { ChatInput } from "@/components/module/chat/ChatInput";
import { TypingIndicator } from "@/components/module/chat/TypingIndicator";
import { useChat, type Message } from "@/hooks/useChat";

const INITIAL_MESSAGE: Message = {
  id: "init-1",
  sender: "bot",
  text: "স্বাগতম! আমি Sun, Misun Academy-এর আপনার AI সহায়ক। কিভাবে আপনাকে সাহায্য করতে পারি?",
  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [showNotification, setShowNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { inputValue, setInputValue, isTyping, handleQuickAction, handleSend } = useChat(messages, setMessages);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) setShowNotification(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 w-[370px] sm:w-[400px]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full h-[580px] sm:h-[620px] flex flex-col rounded-2xl bg-[#0b1326]/90 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_hsl(var(--primary)/0.12)] overflow-hidden"
          >
            <ChatHeader onClose={toggle} />
            <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar bg-gradient-to-b from-transparent to-[#0b1326]/50">
              {messages.length === 1 && (
                <p className="text-[12px] text-[#bccbb9]/50 text-center leading-relaxed py-3 px-2">
                  নিচের যেকোনো অপশনে ক্লিক করে দ্রুত উত্তর পান
                </p>
              )}
              {messages.length === 1 && (
                <ChatQuickActions onAction={handleQuickAction} />
              )}
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
            <ChatInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              isTyping={isTyping}
              onSend={handleSend}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ChatToggleButton isOpen={isOpen} showNotification={showNotification} onClick={toggle} />
      <style>{`
        @keyframes fabFloat { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        @keyframes fabPulseGlow { 0%,100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.35); } 50% { box-shadow: 0 0 0 10px hsl(var(--primary) / 0); } }
        .fab-btn { animation: fabFloat 3s ease-in-out infinite; }
        .fab-btn:hover { animation-play-state: paused; }
        .fab-pulse-glow { animation: fabPulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; border-radius: 9999px; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 9999px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: hsl(var(--primary) / 0.3); }
      `}</style>
    </div>
  );
}
