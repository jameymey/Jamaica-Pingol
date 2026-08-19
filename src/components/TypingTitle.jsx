import { useEffect, useState } from "react";

const titles = [
  "System Analyst",
  "Full-Stack Developer",
  "Software Engineer",
];

export const TypingTitle = ({ className = "" }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentTitle.substring(0, text.length + 1));

        if (text.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentTitle.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  return (
    <h2
      className={`text-3xl md:text-4xl font-semibold text-primary ${className}`}
    >
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
};