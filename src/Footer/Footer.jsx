import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>მთავარი</li>
        <li>აირჩიე კურსი</li>
        <li>ჩვენ შესახებ</li>
        <li>კონტაქტი</li>
      </ul>
      <div className="rules-box">
        <p>© 2023 ყველა უფლება დაცულია</p>
        <a href="#">წესები და პირობები</a>
      </div>
    </footer>
  );
};

export default Footer;
