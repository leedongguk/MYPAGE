import React from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      {/* 왼쪽: Home 버튼 */}
      <div className="menu-left">
        <Link to="/" className="menu-item">Home</Link>
      </div>

      {/* 오른쪽: Timeline, GitHub, Instagram, About */}
      <div className="menu-right">
        <Link to="/timeline" className="menu-item">Timeline</Link>
        <Link to="/aboutme" className="menu-item">About</Link>
        <a href="https://github.com/leedongguk" target="_blank" rel="noopener noreferrer" className="menu-item">GitHub</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="menu-item">Instagram</a>

      </div>
    </nav>
  );
};

export default Menu;
