import { useState, useCallback } from "react";

const getCSRFToken = (): string | null => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
};

export interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
}

interface ChatApiResponse {
  reply: string;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export function useChat(messages: Message[], setMessages: React.Dispatch<React.SetStateAction<Message[]>>) {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const userMsg: Message = {
        id: `msg-${Date.now()}`,
        sender: "user",
        text: text.trim(),
        time: timeNow,
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      try {
        // Server accepts user turns only (assistant history is untrusted
        // client input — a jailbreak vector). Send recent genuine user turns.
        const conversation = [
          ...messages
            .slice(1)
            .filter((m) => m.sender === "user")
            .slice(-10)
            .map((m) => ({
              role: "user" as const,
              content: m.text,
            })),
          { role: "user" as const, content: text.trim() },
        ];

        const csrfToken = getCSRFToken();
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(csrfToken ? { "X-CSRF-Token": csrfToken } : {}),
          },
          credentials: "include",
          body: JSON.stringify({ messages: conversation }),
        });

        if (!res.ok) throw new Error("API request failed");

        const json = await res.json();
        const data: ChatApiResponse = json.data;

        const botMsg: Message = {
          id: `msg-${Date.now() + 1}`,
          sender: "bot",
          text: data.reply || "দুঃখিত, এই মুহূর্তে উত্তর দিতে পারছি না। পরে আবার চেষ্টা করুন।",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, botMsg]);
      } catch {
        const fallbackMsg: Message = {
          id: `msg-${Date.now() + 1}`,
          sender: "bot",
          text: "দুঃখিত, একটি প্রযুক্তিগত সমস্যা হয়েছে। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, fallbackMsg]);
      } finally {
        setIsTyping(false);
      }
    },
    [messages, setMessages],
  );

  const handleQuickAction = useCallback(
    (prompt: string) => {
      setInputValue(prompt);
      setTimeout(() => sendMessage(prompt), 100);
    },
    [sendMessage],
  );

  const handleSend = useCallback(
    (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      sendMessage(inputValue);
    },
    [inputValue, sendMessage],
  );

  return { inputValue, setInputValue, isTyping, sendMessage, handleQuickAction, handleSend };
}
