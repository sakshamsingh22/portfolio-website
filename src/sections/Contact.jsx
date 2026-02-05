import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const socials = [
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1OIoJYIigzNa-pB1wXSfGpsV1JpcET7oU/view?usp=drive_link",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saksham-singh-5b2627290/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    name: "GitHub",
    href: "https://github.com/sakshamsingh22",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.1.68-.2.68-.47v-1.72c-2.78.62-3.36-1.35-3.36-1.35-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .08 1.52 1.04 1.52 1.04.9 1.52 2.36 1.08 2.94.83.1-.64.35-1.08.64-1.33-2.22-.25-4.56-1.12-4.56-4.98 0-1.1.4-2 1.04-2.7-.1-.26-.45-1.3.1-2.7 0 0 .86-.28 2.8 1.03a9.7 9.7 0 0 1 5.1 0c1.94-1.31 2.8-1.03 2.8-1.03.55 1.4.2 2.44.1 2.7.64.7 1.04 1.6 1.04 2.7 0 3.88-2.34 4.72-4.58 4.96.36.32.68.94.68 1.9v2.8c0 .27.18.58.68.47A10 10 0 0 0 12 2z" />
      </svg>
    )
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/sakshambyte/",
    icon: (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neon-500/20 text-[10px] font-semibold text-neon-300">
        LC
      </span>
    )
  },
  {
    name: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/sakshambyte",
    icon: (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neon-500/20 text-[9px] font-semibold text-neon-300">
        GfG
      </span>
    )
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/sakshambyte",
    icon: (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neon-500/20 text-[9px] font-semibold text-neon-300">
        CF
      </span>
    )
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/sakshambyte",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M5 4l14 16" />
        <path d="M19 4L5 20" />
      </svg>
    )
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields before sending." });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Please try again later."
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        { publicKey }
      );

      setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.message || "Unable to send message right now."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-padding py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-neon-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold">Let&apos;s build something clean</h2>
          <p className="mt-4 text-white/70">
            Reach out for internships, collaborations, or interview prep discussions. I typically respond
            within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-neon-500/60 hover:text-neon-300"
              >
                <span className="text-neon-400 transition group-hover:text-neon-300">{social.icon}</span>
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="card grid gap-4 p-8"
          whileHover={{ boxShadow: "0 0 40px rgba(79, 107, 255, 0.25)" }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-white/50">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-white/10 bg-base-900/80 px-4 py-3 text-sm text-white outline-none focus:border-neon-500/60"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-white/50">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-white/10 bg-base-900/80 px-4 py-3 text-sm text-white outline-none focus:border-neon-500/60"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-white/50">Message</label>
            <textarea
              rows="4"
              name="message"
              placeholder="Tell me about your project or opportunity"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-white/10 bg-base-900/80 px-4 py-3 text-sm text-white outline-none focus:border-neon-500/60"
            />
          </div>
          {status.type !== "idle" && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm ${
                status.type === "success" ? "text-neon-400" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-full bg-neon-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-neon-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
