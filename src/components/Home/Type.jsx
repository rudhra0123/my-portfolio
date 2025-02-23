import React, { useState, useEffect } from "react";
import "./type.css";

const Type = () => {
  const texts = [
    "Web Developer...",
    "App Developer...",
    "Effective Problem Solver..."
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setText((prev) => prev + currentText[charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100); // Typing speed

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <h2 className="typewriter-text">{text}</h2>
  );
};

export default Type;
