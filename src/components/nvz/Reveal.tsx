import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  once?: boolean;
}

const translateFor = (dir: Direction) => {
  switch (dir) {
    case "up": return "translate3d(0, 28px, 0)";
    case "down": return "translate3d(0, -28px, 0)";
    case "left": return "translate3d(28px, 0, 0)";
    case "right": return "translate3d(-28px, 0, 0)";
    default: return "none";
  }
};

export const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Tag = "div",
  once = false,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : translateFor(direction),
    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  const Component = Tag as any;
  return (
    <Component ref={ref as any} style={style} className={className}>
      {children}
    </Component>
  );
};
