"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible]);

  return (
    <div
      className="fixed pointer-events-none z-[1] hidden lg:block transition-opacity duration-300"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        background:
          "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0) 70%)",
        opacity: visible ? 1 : 0,
      }}
    />
  );
}