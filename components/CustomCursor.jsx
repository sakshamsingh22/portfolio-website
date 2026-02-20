import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTORS = [
  "a",
  "button",
  "[role='button']",
  "input",
  "textarea",
  "select",
  "[data-cursor='pointer']"
].join(",");

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!isCoarse);
    return undefined;
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    document.body.classList.add("custom-cursor");

    const handleMove = (event) => {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
    };

    const handleDown = () => document.body.classList.add("cursor-click");
    const handleUp = () => document.body.classList.remove("cursor-click");

    const handleHover = (event) => {
      const targetEl = event.target;
      const canMatch = targetEl && typeof targetEl.closest === "function";
      const target = canMatch ? targetEl.closest(INTERACTIVE_SELECTORS) : null;
      if (target) {
        document.body.classList.add("cursor-hover");
      } else {
        document.body.classList.remove("cursor-hover");
      }
    };

    const animate = () => {
      const dx = pos.current.x - ringPos.current.x;
      const dy = pos.current.y - ringPos.current.y;
      ringPos.current.x += dx * 0.18;
      ringPos.current.y += dy * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mouseout", handleHover);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor");
      document.body.classList.remove("cursor-hover");
      document.body.classList.remove("cursor-click");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mouseout", handleHover);
      cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
