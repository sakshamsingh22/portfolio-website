import { useEffect, useRef, useState } from "react";
import { assistantSuggestions, getAssistantResponse } from "../data/assistantKnowledge";

function AgentMessage({ currentMessage }) {
  const response = currentMessage.response;
  const isExternalLink = response?.link && !response.link.startsWith("mailto:");

  return (
    <div
      className={`max-w-[88%] rounded-2xl px-3 py-2 leading-relaxed ${
        currentMessage.role === "user"
          ? "ml-auto rounded-br-sm bg-neon-500 text-white"
          : "rounded-bl-sm border border-white/10 bg-white/5 text-white/75"
      }`}
    >
      {currentMessage.text || response?.answer}
      {response?.link && (
        <a
          href={response.link}
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noreferrer" : undefined}
          className="mt-2 block font-semibold text-neon-300 underline-offset-4 hover:underline"
        >
          {response.linkLabel}
        </a>
      )}
      {response?.links?.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-1 block font-semibold text-neon-300 underline-offset-4 hover:underline"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function PortfolioAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "agent",
      text: "Hi! I’m Saksham’s AI portfolio assistant. Ask me about his education, projects, skills, experience, or career interests.",
    },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function submitMessage(event, prompt = message) {
    event?.preventDefault();
    const trimmedMessage = prompt.trim();
    if (!trimmedMessage) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now(), role: "user", text: trimmedMessage },
      { id: Date.now() + 1, role: "agent", response: getAssistantResponse(trimmedMessage) },
    ]);
    setMessage("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      {isOpen && (
        <div className="mb-3 flex h-[min(34rem,calc(100vh-7rem))] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-neon-500/30 bg-base-900/95 shadow-[0_20px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-neon-500/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neon-500/20 text-neon-300 shadow-glow">
                ✦
              </span>
              <div>
                <p className="text-sm font-semibold">Saksham&apos;s AI Assistant</p>
                <p className="text-[11px] text-emerald-300">Online · Portfolio guide</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white" aria-label="Close AI assistant">
              ×
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {messages.map((currentMessage) => (
              <AgentMessage key={currentMessage.id} currentMessage={currentMessage} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {assistantSuggestions.slice(0, 4).map((prompt) => (
                <button key={prompt} type="button" onClick={() => submitMessage(undefined, prompt)} className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/60 transition hover:border-neon-500/50 hover:text-neon-300">
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={submitMessage} className="flex items-center gap-2">
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask about the portfolio..."
                aria-label="Message Saksham's AI assistant"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-neon-500/60"
              />
              <button type="submit" className="rounded-full bg-neon-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neon-400" aria-label="Send message">
                ↑
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="ml-auto flex items-center gap-2 rounded-full border border-neon-500/50 bg-base-900/90 px-4 py-3 text-sm font-semibold text-neon-200 shadow-glow backdrop-blur transition hover:-translate-y-1 hover:border-neon-400 hover:text-white"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
      >
        <span className="text-lg">✦</span>
        <span>{isOpen ? "Close chat" : "Ask AI"}</span>
      </button>
    </div>
  );
}
