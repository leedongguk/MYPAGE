import React from "react";
import useResize from "../components/resize/useResize"; // ✅ 만든 훅 불러오기
import "../css/Aboutme.css";
import Menu from "../components/Menu"; // ✅ 메뉴 컴포넌트 추가

const AboutmeScreen = () => {

    const size = useResize(); // ✅ 현재 화면 크기 가져오기
    const fontSize = Math.max(size.width * 0.007, 20);
    const letterSpacing = Math.max(size.width * 0.005, 2);
    const aboutmefontSize = Math.max(size.width * 0.06, 20);
    const namefontSize1 = Math.max(size.width * 0.02, 16);
    const namefontSize2 = Math.max(size.width * 0.01, 13);
    const aboutmelistfontSize = Math.max(size.width * 0.01, 11);

  return (
    <div className="homebackground">
          <Menu /> {/* ✅ 메뉴 추가 */}
          <div className="vertical-line" style={{ left: "41%", top:'0%', height: size.height * 0.6, }}></div>
          {/*왼쪽 전광판*/}
          <div className="hometextlengthline" style={{
          width: size.width * 0.02,
          height: size.height * 1,
          left: "0%",
          top: "0%",
          backgroundColor:'black',
          }}>
            <div className="vertical-text" style={{fontSize: `${fontSize}px`,letterSpacing: `${letterSpacing}px`, }}>
            GGUK'S&nbsp;&nbsp;&nbsp;HOME·PAGE&nbsp;&nbsp;&nbsp;MY·LIFE
            </div>
          </div>

          {/*가운데*/}
          <div className="aboutnmearea" style={{ width: size.width * 0.8, height: size.height * 0.85, left: '1%', bottom: '0%',}}>
                    {/*세로선*/}
                    <div className="techarea" style={{ width: size.width * 0.4, height: size.height * 0.2, right: '0%', top: '0%', boxShadow: ' 0 0.3px 0 #292929'}}>

                          {/*Spring*/}
                          <div className="tech1" style={{
                            width: size.width * 0.068,
                            height: size.height * 0.14,
                            left:"1%",

                          }}></div>
                          {/*Spring*/}
                          <div className="tech2" style={{
                            width: size.width * 0.068,
                            height: size.height * 0.14,
                            left:"21%",
                          }}></div>
                          {/*Spring*/}
                          <div className="tech3" style={{
                            width: size.width * 0.068,
                            height: size.height * 0.14,
                            left:"41%",
                          }}></div>
                          {/*Spring*/}
                          <div className="tech4" style={{
                            width: size.width * 0.068,
                            height: size.height * 0.14,
                            left:"61%",
                          }}></div>
                          {/*Spring*/}
                          <div className="tech5" style={{
                            width: size.width * 0.068,
                            height: size.height * 0.14,
                            left:"81%",
                          }}></div>
                    </div>
                    {/*aboutme 텍스트*/}
                    <div className="aboutmetext" style={{
                      width: size.width * 0.4,
                      height: size.height * 0.2,
                      left: "10%",
                      top: "5%",
                    }}>
                      <h1 style={{
                        fontFamily: "Rondal-Semibold",
                        fontSize: `${aboutmefontSize}px`,
                        letterSpacing: `${letterSpacing}px`,
                        color: "black",
                      }}>
                        ABOUT ME
                      </h1>
                    </div>

                    {/*이름 텍스트*/}
                    <div className="aboutmetext" style={{
                      width: size.width * 0.2,
                      height: size.height * 0.08,
                      left: "10%",
                      top: "30%",
                    }}>
                      <h1 style={{
                        fontFamily: "Rondal-Semibold",
                        fontSize: `${namefontSize1}px`,
                        letterSpacing: `${letterSpacing}px`,
                        color: "black",
                        fontWeight: "900",
                      }}>
                        이동국&nbsp;&nbsp;
                      </h1>
                      <h1 style={{
                        fontFamily: "Rondal-Semibold",
                        fontSize: `${namefontSize2}px`,
                        letterSpacing: `${letterSpacing}px`,
                        color: "#292929",
                        fontWeight: "300",
                      }}>
                        개발자
                      </h1>
                    </div>
                    {/*생년월일,학과,졸업일1*/}
                    <div className="aboutmetext" style={{
                      width: size.width * 0.08,
                      height: size.height * 0.2,
                      left: "10%",
                      top: "40%",
                      lineHeight: "2.0",
                    }}>
                      <h1 style={{
                        fontFamily: "Rondal-Semibold",
                        fontSize: `${aboutmelistfontSize}px`,
                        color: "black",
                        fontWeight: "900",
                      }}>
                        생년월일<br/>
                        학과<br/>
                        졸업일
                      </h1>
                    </div>
                    {/*생년월일,학과,졸업일2*/}
                    <div className="aboutmetext" style={{
                      width: size.width * 0.3,
                      height: size.height * 0.2,
                      left: "20%",
                      top: "40%",
                      lineHeight: "2.0",
                    }}>
                      <h1 style={{
                        fontSize: `${aboutmelistfontSize}px`,
                        color: "black",
                        fontWeight: "400",
                      }}>
                        1999.04.20<br/>
                        서경대학교 소프트웨어학과 졸업<br/>
                        2025.02.17
                      </h1>
                    </div>
                    {/*가로 분류선*/}
                    <div className="horizontal-line"style={{ width: size.width * 0.7, top: "64%", left:"10%" }}>
                    </div>

                    {/*대외활동*/}
                    <div className="aboutmetext" style={{
                      width: size.width * 0.08,
                      height: size.height * 0.2,
                      left: "10%",
                      top: "60%",
                      lineHeight: "2.0",
                    }}>
                      <h1 style={{
                        fontFamily: "Rondal-Semibold",
                        fontSize: `${aboutmelistfontSize}px`,
                        color: "black",
                        fontWeight: "900",
                      }}>
                        대회활동
                      </h1>
                    </div>
                    {/*대외활동*/}
                    <div className="aboutmetext" style={{
                      width: size.width * 0.3,
                      height: size.height * 0.2,
                      left: "20%",
                      top: "60%",
                      lineHeight: "2.0",
                    }}>
                      <h1 style={{
                        fontSize: `${aboutmelistfontSize}px`,
                        color: "black",
                        fontWeight: "400",
                      }}>
                        [한이음]소상공인/자영업자를 위한 무료 테이블오더 웹/앱 제작 및 수료<br/>
                        [한이음]전기차 충전소 안내 시스템(공공데이터활용) 앱 제작 및 수료
                      </h1>
                    </div>

                    {/*수상경력*/}
                    <div className="aboutmetext" style={{
                      width: size.width * 0.08,
                      height: size.height * 0.2,
                      left: "10%",
                      top: "75%",
                      lineHeight: "2.0",
                    }}>
                      <h1 style={{
                        fontFamily: "Rondal-Semibold",
                        fontSize: `${aboutmelistfontSize}px`,
                        color: "black",
                        fontWeight: "900",
                      }}>
                        수상경력
                      </h1>
                    </div>
                    {/*수상경력*/}
                    <div className="aboutmetext" style={{
                      width: size.width * 0.3,
                      height: size.height * 0.2,
                      left: "20%",
                      top: "75%",
                      lineHeight: "2.0",
                    }}>
                      <h1 style={{
                        fontSize: `${aboutmelistfontSize}px`,
                        color: "black",
                        fontWeight: "400",
                      }}>
                        헥토그룹 서경SW아카데미 프로젝트 성과 발표회(동상)<br/>
                        대학 · 기업 협력형 SW아카데미 프로젝트 개발 경진대회(동상)
                      </h1>
                    </div>
          </div>

          {/*오른쪽사진*/}
          <div className="homepath" style={{
            width: size.width * 0.30,
            height: size.height * 1.0,
            right: "0%",
            bottom: "0%",
          }}></div>




    </div>
  );
};

export default AboutmeScreen;