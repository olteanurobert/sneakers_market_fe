import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footersDivs">
        <ul className="footerUls">
          <strong>Serviciu clienți</strong>
          <br />
          <br />
          <li>tel. 0356-005845</li>
          <li>e-mail: olteanurobertcatalin@gmail.com</li>
          <li>Luni - Vineri: 09:00 - 16:00</li>
          <li>Sâmbătă - Duminică: ne odihnim</li>
        </ul>
      </div>
      <div className="footersDivs">
        <ul className="footerUls">
          <strong>Ajutor</strong>
          <br />
          <br />
          <li>Contact</li>
          <li>FAQs</li>
          <li>Plata și livrarea</li>
          <li>Returnare</li>
          <li>Termeni și Condiții</li>
          <li>Politica de Confidențialitate</li>
          <li>Despre Cookie</li>
          <li>Site Map</li>
        </ul>
      </div>
      <div className="footersDivs">
        <ul className="footerUls">
          <strong>Shops</strong>
          <br />
          <br />
          <li>Magazine</li>
          <li>Blog</li>
          <li>Jobs</li>
        </ul>
      </div>
      <div className="footersDivs">
        <ul className="footerUls">
          <strong>Socializăm</strong>
          <br />
          <br />
          <li className="footerUlsLis">
            <FacebookIcon />
            Facebook
          </li>
          <li className="footerUlsLis">
            <InstagramIcon />
            Instagram
          </li>
          <li className="footerUlsLis">
            <YouTubeIcon />
            Youtube
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
