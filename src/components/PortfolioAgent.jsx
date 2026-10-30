import { useEffect, useRef, useState } from "react";

const quickPrompts = ["What does Saksham build?", "Tell me about Quorum", "How can I contact him?"];

const responses = [
  {
    keywords: ["contact", "hire", "email", "reach", "linkedin"],
    answer:
      "You can reach Saksham at saksham22.dev@gmail.com, or connect on LinkedIn. He is open to internships, collaborations, and interesting product conversations.",
  },
  {
    keywords: ["quorum", "research"],
    answer:
      "Quorum is a four-agent research assistant built with Python, LangGraph, Mistral AI, Tavily, and Streamlit. Its Search, Reader, Writer, and Critic agents work together to create reviewed reports from live sources.",
    link: "https://quorum-multi-agent.streamlit.app/",
    linkLabel: "Open Quorum",
  },
  {
    keywords: ["video", "whisper", "transcript"],
    answer:
      "The AI Video Assistant turns videos, audio, and YouTube content into transcripts, summaries, insights, and searchable answers. It supports English, Hindi, and Hinglish.",
  },
  {
    keywords: ["skill", "stack", "technology", "tech", "use"],
    answer:
      "Saksham works with Python, FastAPI, Django, React, JavaScript, C++, SQL, Docker, LangChain, AWS, and agentic AI workflows.",
  },
  {
    keywords: ["project", "build", "work", "portfolio"],
    answer:
      "He builds practical AI and full-stack products, including Quorum, AI Video Assistant, AI Thumbnail Generator, SamTrack, and FocusList. Scroll to Projects to explore them.",
  },
  {
    keywords: ["about", "who", "experience", "background"],
    answer:
      "Saksham is a Computer Science undergraduate and Full-Stack & Generative AI Developer based in India. He enjoys turning useful ideas into clean, reliable products.",
  },
];

function getResponse(message) {
  const normalizedMessage = message.toLowerCase();
  const matchedResponse = responses.find(({ keywords }) =>
    keywords.some((keyword) => normalizedMessage.includes(keyword))
  );

  return (
    matchedResponse || {
      answer:
        "I can tell you about Saksham's projects, skills, background, or how to get in touch. Try asking about Quorum or his tech stack.",
    }
  );
}

export default function PortfolioAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "agent",
      text: "Hi! I’m Saksham’s AI assistant. Ask me about his projects, skills, or experience.",
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
      { id: Date.now() + 1, role: "agent", text: getResponse(trimmedMessage).answer },
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
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
              aria-label="Close AI assistant"
            >
              ×
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {messages.map((currentMessage) => (
              <div
                key={currentMessage.id}
                className={`max-w-[88%] rounded-2xl px-3 py-2 leading-relaxed ${
                  currentMessage.role === "user"
                    ? "ml-auto rounded-br-sm bg-neon-500 text-white"
                    : "rounded-bl-sm border border-white/10 bg-white/5 text-white/75"
                }`}
              >
                {currentMessage.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => submitMessage(undefined, prompt)}
                  className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/60 transition hover:border-neon-500/50 hover:text-neon-300"
                >
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
              <button
                type="submit"
                className="rounded-full bg-neon-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neon-400"
                aria-label="Send message"
              >
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
