import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/logo 2.png";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Menu", href: "/#menu" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div>
          <img src={logo} alt="Little Lemon logo" className="footer-logo" loading="lazy" />
        </div>

        <div className="footer-navigation item-footer">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
          </ul>
        </div>

        <address className="contact item-footer">
          <h4>Contact</h4>
          <p>123 Main St, Chicago, IL 60601</p>
          <p>
            <a href="tel:+11234567890">(123) 456-7890</a>
          </p>
          <p>
            <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
          </p>
        </address>

        <div className="social-media-links item-footer">
          <h4>Social Media</h4>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
