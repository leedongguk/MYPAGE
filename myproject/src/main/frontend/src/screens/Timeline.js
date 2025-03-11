import React, { useState } from "react";
import useResize from "../components/resize/useResize"; // ✅ 화면 크기 가져오는 훅
import "../css/Timeline.css"; // ✅ 스타일 파일
import Menu from "../components/Menu"; // ✅ 메뉴 컴포넌트 추가

const timelineData = [
  { year: "ECOFLOW(WEB)", color: "#9BAE92", img: require("../assets/image/Timeline/010.png"), text:"A JS & Spring-based comprehensive EV charging station platform (Web) that serves as an all-in-one web platform for electric vehicle users. It provides features such as public and private charger management, an AI chatbot, charging station search, and a community function.", hoverImg: "https://github.com/leedongguk/SW-Acadamy-Project/raw/main/image/1.png?raw=true",  },
  { year: "ORDERFLOW(APP/WEB)", color: "#DED2BE", img: require("../assets/image/Timeline/011.png"), text: "A JS & Spring-based comprehensive EV charging station platform (Web) that serves as an all-in-one web platform for electric vehicle users, offering public and private charger management, an AI chatbot, charging station search, and community features.",hoverImg:"https://github.com/24HF063orderflow/Image/raw/main/Main/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4.png?raw=true",  },
  { year: "ECOFLOW(APP)", color: "#E7E3DB", img: require("../assets/image/Timeline/012.png"), text:"A JS & Spring-based comprehensive EV charging station platform (Web), serving as an all-in-one web platform for electric vehicle users. It offers public and private charger management, an AI chatbot, charging station search, and community features.",hoverImg: "https://github.com/ICT-EcoFlow/image/raw/main/%EA%B0%9C%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.png?raw=true",  },
  { year: "Liquor Mall(WEB)", color: "#2F3239", img: require("../assets/image/Timeline/013.png"), text: "A world-class liquor shopping website built with JSP, HTML, CSS, and JS, allowing users to conveniently purchase premium whiskey online. It features a sleek UI and an intuitive interface, ensuring a seamless shopping experience.",hoverImg: "https://private-user-images.githubusercontent.com/39736916/308394016-2056f116-3496-45b3-9bce-ef5a5147431c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE3MzMyMDcsIm5iZiI6MTc0MTczMjkwNywicGF0aCI6Ii8zOTczNjkxNi8zMDgzOTQwMTYtMjA1NmYxMTYtMzQ5Ni00NWIzLTliY2UtZWY1YTUxNDc0MzFjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzExVDIyNDE0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI4ZjdhNTg0NDMyOWUwMDhjNDc1M2FmN2MzOTk3NWFjNDlhODY1OGUzMTgyYjYyMDQwMjExNWU3NDliYjBiMmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.u61rA0q0P57MJxD8rm_pp7hpcfaKsuecm6eUBo87dLw",  },
];

const Timeline = () => {
  const size = useResize();
  const itemWidth = size.width * 0.18;
  const itemHeight = size.height * 0.5;
  const gap = size.width * 0.02;

  const totalSlides = timelineData.length;
  const itemsPerPage = 2;
  const maxIndex = totalSlides - itemsPerPage;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div
      className="timeline-container"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >   <Menu />
      <button className={`arrow left-arrow ${currentIndex === 0 ? "disabled" : ""}`} onClick={prevSlide}>
        &#8592;
      </button>
      <h1 className="timeline-title">PORTFOLIO</h1>
      <button className={`arrow right-arrow ${currentIndex === maxIndex ? "disabled" : ""}`} onClick={nextSlide}>
        &#8594;
      </button>

      <div className="timeline-slider">
        <div className="timeline-wrapper">
          <div
            className="timeline-items"
            style={{
              transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
              gap: `${gap}px`,
            }}
          >
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="timeline-item"
                style={{ width: itemWidth, height: itemHeight }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="timeline-header" style={{ backgroundColor: item.color }}>
                  <span className="timeline-year">{item.year}</span>
                </div>
                <div className="timeline-image" style={{ height: itemHeight * 0.6 }}>
                  <img src={item.img} alt={`timeline-${item.year}`} />
                </div>
                <p className="timeline-text">
                  <span className="timeline-year">{item.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 마우스 대각선 위쪽에 표시될 이미지 */}
      {hoveredIndex !== null && (
        <div
          className="hover-image"
          style={{
            left: `${mousePos.x + 20}px`,
            top: `${Math.max(mousePos.y - 140, 20)}px` // 화면 밖으로 나가지 않도록 보정
          }}
        >
          <img src={timelineData[hoveredIndex].hoverImg} alt="Preview" />
        </div>
      )}

      <div className="timeline-footer">
        <span>/2025</span>
        <span>@Moving_Country99 / BP</span>
        <span>https://github.com/leedongguk</span>
      </div>
    </div>
  );
};

export default Timeline;