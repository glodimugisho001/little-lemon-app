import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HighLightSection from "./components/HighLightSection";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <SiteLayout>
              <MainPage />
            </SiteLayout>
          }
        />
        <Route
          path="/booking"
          element={
            <SiteLayout>
              <BookingPage />
            </SiteLayout>
          }
        />
        <Route
          path="/confirmed"
          element={
            <SiteLayout>
              <ConfirmedBooking />
            </SiteLayout>
          }
        />
        <Route
          path="*"
          element={
            <SiteLayout>
              <NotFound />
            </SiteLayout>
          }
        />
      </Routes>
    </div>
  );
}

function SiteLayout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <Analytics />
    </>
  );
}

function MainPage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="menu">
        <HighLightSection />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>

      <section id="about">
        <About />
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="not-found-link" to="/">
        Return to homepage
      </Link>
    </section>
  );
}
