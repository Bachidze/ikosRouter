import React from "react";
import { Link } from "react-router-dom"; 
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header-box">
        <ul>
          <li><Link to="/">მთავარი</Link></li>
          <li><Link to="/about">აირჩიე კურსი</Link></li>
          <li><Link to="/about">ჩვენ შესახებ</Link></li>
          <li><Link to="/contact">კონტაქტი</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
