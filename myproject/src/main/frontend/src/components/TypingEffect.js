import React, { useState, useEffect } from "react";

const TypingEffect = ({ text = "", speed = 100, onComplete }) => {
  const [displayText, setDisplayText] = useState(""); // ✅ 초기값 빈 문자열 설정

  useEffect(() => {
    if (!text || text.length === 0) return; // ✅ text가 없으면 실행 안 함
    let index = 0;
    setDisplayText(""); // ✅ 시작할 때 초기화

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + (text[index] || "")); // ✅ undefined 방지
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete(); // ✅ onComplete 실행
          }
        }, 1000);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <h1 className="typing-text">{displayText}</h1>;
};

export default TypingEffect;
