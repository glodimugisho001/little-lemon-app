import React from 'react'
import '../styles/Footer.css'
import logo  from '../assets/logo 2.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="footer-container">
                <div className="">
                    <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
                </div>
                <div className="footer-navigation item-footer">
                    <h4>Doorman Navigation</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><a href="#order">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                <div className="contact item-footer">
                    <h4>Contact</h4>
                    <p>Adress: 123 Main St, Chicago, IL 60601</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: glodiperso24@gmail.com</p>
                </div>
                <div className="socoal-media-links item-footer">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}
