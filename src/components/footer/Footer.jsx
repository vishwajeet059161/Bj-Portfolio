import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Biswajit</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/biswajit760/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/biswajit760"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i className="uil uil-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          #BJ76; Biswajitmahanty. All right reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
