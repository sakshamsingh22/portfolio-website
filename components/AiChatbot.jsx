"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const transport = new DefaultChatTransport({ api: "/api/chat" });

const QUICK_QUESTIONS = [
  "What are Saksham's skills?",
  "Tell me about his projects",
  "What certifications does he have?",
  "How can I hire Saksham?",
];

function getMessageText(message) {
  if (!message.parts || !Array.isArray(message.parts)) return "";
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({ transport });

  const isStreaming = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  function handleQuickQuestion(question) {
    if (isStreaming) return;
    sendMessage({ text: question });
  }

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-neon-500/40 bg-base-900/90 shadow-glow backdrop-blur transition hover:border-neon-500/70 hover:shadow-[0_0_40px_rgba(79,107,255,0.5)]"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 24 24"
              className="h-6 w-6 text-neon-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 24 24"
              className="h-6 w-6 text-neon-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              <path d="M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[min(520px,calc(100vh-120px))] w-[min(400px,calc(100vw-48px))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-900/95 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/5 px-5 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-500/15">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-neon-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Ask about Saksham</p>
                <p className="text-xs text-white/40">AI-powered portfolio assistant</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-white/40 transition hover:bg-white/5 hover:text-white/70"
                aria-label="Close chat"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neon-500/20 bg-neon-500/10">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-neon-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      Hi! Ask me anything about Saksham.
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Skills, projects, experience, or how to get in touch.
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {QUICK_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleQuickQuestion(q)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition hover:border-neon-500/40 hover:text-neon-300"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {messages.map((message) => {
                    const text = getMessageText(message);
                    if (!text) return null;
                    const isUser = message.role === "user";
                    return (
                      <div
                        key={message.id}
                        className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                            isUser
                              ? "bg-neon-500/20 text-white"
                              : "border border-white/5 bg-white/5 text-white/80"
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{text}</p>
                        </div>
                      </div>
                    );
                  })}
                  {isStreaming &&
                    !messages.some(
                      (m) => m.role === "assistant" && getMessageText(m)
                    ) && (
                      <div className="flex justify-start">
                        <div className="flex items-center gap-1.5 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-400" />
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-400 [animation-delay:150ms]" />
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-400 [animation-delay:300ms]" />
                        </div>
                      </div>
                    )}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-white/5 px-4 py-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Saksham..."
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-neon-500/50"
                disabled={isStreaming}
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-500/20 text-neon-400 transition hover:bg-neon-500/30 disabled:opacity-40 disabled:hover:bg-neon-500/20"
                aria-label="Send message"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m5 12 14-7-4 7 4 7Z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
