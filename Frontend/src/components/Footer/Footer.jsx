import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo_1} alt="" /> */}
          <h1>Adishakti Caterers.</h1>
          <p>
            Since 2024, our catering service has been proudly serving NCR,
            Delhi, and the surrounding areas with a commitment to excellence and
            professionalism. We specialize in creating unforgettable culinary
            experiences tailored to your event's unique needs. With a focus on
            high-quality ingredients and exceptional service, we ensure that
            every dish delights your guests, making your occasion truly
            memorable. Whether it's a wedding, corporate event, or private
            party, we bring passion and expertise to every table.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>Ashish</li>
            <li>+91-7278003587</li>
            <li>indiakolas@gmail.com</li>
          </ul>
          <ul>
            <li>Devesh</li>
            <li>+91-9966867399</li>
          </ul>
          <ul>
            <li>Ajay</li>
            <li>8920340968</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Adishakti Caterers -All Rights Reserved || Made with ❤️ By Adarsh Singh
      </p>
    </div>
  );
};

export default Footer;

