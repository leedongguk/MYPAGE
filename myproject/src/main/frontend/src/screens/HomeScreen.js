import React, { useState } from "react";
import "../App.css";
import useResize from "../components/resize/useResize"; // ✅ 만든 훅 불러오기
import TypingEffect from "../components/TypingEffect"; // ✅ 타이핑 효과 컴포넌트 추가

const HomeScreen: React.FC = () => {
  const size = useResize(); // ✅ 현재 화면 크기 가져오기
  const [showContent, setShowContent] = useState(false); // ✅ 나머지 UI 표시 여부

  // ✅ 화면 크기에 맞게 폰트 크기 및 자간 조절
  const fontSize = Math.max(size.width * 0.08, 50); // 화면 너비의 10%, 최소 50px
  const fontSize2 = Math.max(size.width * 0.01, 11); // 화면 너비의 10%, 최소 50px
  const fontSize3 = Math.max(size.width * 0.007, 11); // 화면 너비의 10%, 최소 50px
  const letterSpacing = Math.max(size.width * 0.005, 2); // 너비의 0.5%, 최소 2px

  // ✅ 화면 크기에 맞춰 동적으로 위치 조절
  const topTextTop = size.height * 0.04; // 사진 위 간격
  const bottomTextTop = size.height * 0.75; // 사진 아래 간격

  return (
    <div className="homebackground">
      {!showContent ? (
        // ✅ 타이핑 애니메이션
        <div className="typing-container">
            <TypingEffect
              text={"HEELLO WORLD!"}
              speed={100}
              onComplete={() => {
                console.log("Typing animation complete"); // ✅ 디버깅용 로그 추가
                console.log("Final text:", "Welcome to GGUK'S HOMEPAGE");
                setShowContent(true);
              }}
            />
        </div>

      ) : (
        // ✅ 타이핑 후 나머지 UI 페이드인
        <div className={`centerlayout ${showContent ? "fade-in" : ""}`} style={{
          width: size.width * 0.6,
          height: size.height * 1.0,
          left: size.width * 0.2,
          position: "absolute",
        }}>
          <div className="horizontal-line" style={{ width: size.width * 0.7, top: "30%" }}></div>
          <div className="vertical-line" style={{ left: "1%" }}></div>

          {/* 왼쪽 글씨 */}
          <div className="hometextlengthline" style={{
            width: size.width * 0.05,
            height: size.height * 0.6,
            left: "-9%",
            top: "30%",
          }}>
            <h1 style={{
              fontFamily: "Hahmlet",
              fontSize: `${fontSize3}px`,
              letterSpacing: `${letterSpacing}px`,
              color: "black",
              writingMode: "vertical-rl",
              textOrientation: "upright",
            }}>
              My Life Is Wet
            </h1>
          </div>

          {/* 상단 텍스트 */}
          <div className="hometextline" style={{
            width: size.width * 0.4,
            height: size.height * 0.2,
            top: `${topTextTop}px`,
          }}>
            <h1 style={{
              fontFamily: "BodoniModa",
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
            }}>
              GGUK'S
            </h1>
          </div>

          {/* 기울어진 텍스트 */}
          <div className="homeinclinationtext" style={{
            left: "40%",
            top: "20%",
            width: size.width * 0.4,
            height: size.height * 0.4,
            transform: "rotate(-18deg)",
          }}>
            <h1 style={{
              fontFamily: "BodoniModa",
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
              opacity: "7%",
              lineHeight: "0.8",
            }}>
              LIFE IS WET
            </h1>
          </div>

          <div className="homecenter" style={{
                width: size.width * 0.25,
                height: size.height * 0.6,
                }}>
          </div>

          {/* 오른쪽 글씨 */}
          <div className="hometextlengthline" style={{
            width: size.width * 0.05,
            height: size.height * 0.6,
            left: "98%",
            top: "30%",
          }}>
            <h1 style={{
              fontFamily: "Hahmlet",
              fontSize: `${fontSize3}px`,
              letterSpacing: `${letterSpacing}px`,
              color: "black",
              writingMode: "vertical-rl",
              textOrientation: "upright",
            }}>
              YOUNG AND WILD
            </h1>
          </div>

          {/* 하단 텍스트 */}
          <div className="hometextline" style={{
            width: size.width * 0.4,
            height: size.height * 0.1,
            top: `${bottomTextTop}px`,
          }}>
            <h1 style={{
              fontFamily: "BodoniModa",
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
            }}>
              PAGE
            </h1>
          </div>

          <div className="homepath" style={{
            width: size.width * 0.10,
            height: size.height * 0.10,
            left: "73%",
            top: "85%",
          }}>
          </div>

          <div className="vertical-line" style={{ left: "99%" }}></div>
          <div className="horizontal-line" style={{ width: size.width * 0.7, top: "92.5%" }}></div>
          <div className="homebutton" style={{
            width: size.width * 0.7,
            height: size.height * 0.075,
            top: "92.5%",
          }}>
            <h1 style={{
              fontFamily: "BodoniModa",
              fontSize: `${fontSize2}px`,
              letterSpacing: `${letterSpacing}px`,
              color: "white",
            }}>
              PRESS HERE
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
