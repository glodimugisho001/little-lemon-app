import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "../styles/Header.css";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Menu", href: "/#menu" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/" aria-label="Little Lemon home">
        <img src={logo} alt="Little Lemon logo" />
      </Link>

      <nav className="nav" aria-label="Main navigation">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <Link className="nav-cta" to="/booking">
              Reservations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
