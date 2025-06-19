import React from "react";
import "./vol.css"; // Create this file for specific styling if needed
import { Link } from "react-router-dom";

const Volunteers = () => {
  return (
    <div className="volunteers-page">
      {/* ✅ Dynamic Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          bangalore <span>food bank</span>
        </div>
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <a href="#why-volunteer">WHY VOLUNTEER</a>
          <a href="#roles">VOLUNTEER ROLES</a>
          <a href="#join">JOIN US</a>
          <Link to="/donate">
            <button className="donate-button">DONATE NOW</button>
          </Link>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <header className="hero-section">
        <h1>Become a Hunger Hero</h1>
        <p>Volunteer with us and help transform lives through food recovery.</p>
      </header>

      {/* ✅ Why Volunteer Section */}
      <section id="why-volunteer" className="section">
        <div className="volunteer-info">
          <h2>Why Volunteer?</h2>
          <p>
            Volunteering with the Bangalore Food Bank is more than just an act of service — it’s an opportunity to be
            part of a meaningful movement to end hunger. Every hour you give brings food and hope to someone in need.
          </p>
          <p>
            Whether you're packing meals, rescuing food, or organizing drives, you become part of a network of kindness
            and change.
          </p>
        </div>
        <div className="volunteer-image">
          <img src="/images/vol.jpg" alt="Volunteers working together" />
        </div>
      </section>

      {/* ✅ Volunteer Roles */}
      <section id="roles" className="section roles">
        <h2>Volunteer Roles</h2>
        <div className="role-cards">
          <div className="role-card">
            <img src="/images/meal.webp" alt="Meal Packing" />
            <h3>Meal Packing</h3>
            <p>Help sort and pack nutritious meals for distribution to partner organizations.</p>
          </div>
          <div className="role-card">
            <img src="/images/left.jpg" alt="Food Recovery" />
            <h3>Food Recovery</h3>
            <p>Collect and transport surplus food from donors to our food bank centers.</p>
          </div>
          <div className="role-card">
            <img src="/images/camp.jpg" alt="Campaign Support" />
            <h3>Campaign Support</h3>
            <p>Participate in awareness events and help us spread the message of zero hunger.</p>
          </div>
          <div className="role-card">
            <img src="/images/comki.jpg" alt="Logistics" />
            <h3>Logistics & Coordination</h3>
            <p>Organize storage, transport, and delivery to ensure timely food distribution.</p>
          </div>
        </div>
      </section>

      {/* ✅ Join Us CTA */}
      <section id="join" className="section join-us">
        <h2>Ready to Make a Difference?</h2>
        <p>Join our family of volunteers and help us build a hunger-free Bangalore.</p>
        <a href="/register" className="register-button">Join Now</a>
      </section>

      {/* ✅ Footer (reused) */}
      <footer className="bg-dark text-light pt-5 pb-3 mt-5 border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Milaap</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">About us</a></li>
                <li><a href="#" className="text-light text-decoration-none">Team</a></li>
                <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
                <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-5 mb-4">
              <h6 className="fw-bold mb-3">Office Address</h6>
              <p className="small">
                Milaap Social Ventures India Pvt. Ltd.<br />
                JP Nagar, Bangalore, Karnataka 560078
              </p>
              <h6 className="fw-bold mt-3">Supported by</h6>
              <div className="d-flex gap-2 mt-2">
                <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" height="24" />
                <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="MasterCard" height="24" />
                <img src="https://img.icons8.com/color/48/paytm.png" alt="Paytm" height="24" />
                <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" height="24" />
              </div>
            </div>
            <div className="col-md-4 text-md-end text-center">
              <button
                className="btn rounded-pill px-4 py-2 mb-3 text-white"
                style={{ backgroundColor: "orange", border: "none" }}
              >
                Start a fundraiser
              </button>
              <div className="mb-3">
                <a href="#" className="text-decoration-none text-light me-3">FAQs</a>
                <a href="#" className="text-decoration-none text-light me-3">Reviews</a>
                <a href="#" className="text-decoration-none text-light">Pricing</a>
              </div>
              <div className="d-flex justify-content-md-end justify-content-center gap-3">
                <a href="#"><i className="fab fa-facebook text-light"></i></a>
                <a href="#"><i className="fab fa-twitter text-light"></i></a>
                <a href="#"><i className="fab fa-linkedin text-light"></i></a>
                <a href="#"><i className="fab fa-instagram text-light"></i></a>
              </div>
            </div>
          </div>
          <hr className="border-secondary my-4" />
          <div className="text-center small">
            <span>© 2010 - 2025 milaap.org. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Volunteers;
