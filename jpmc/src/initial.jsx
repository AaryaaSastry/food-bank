import React, { useEffect, useState } from "react";
import "./initial.css";
import { Link } from "react-router-dom";

const Initial = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger when scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* ✅ Dynamic Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">
          bangalore <span>food bank</span>
        </div>
        <div className="nav-links">
          <a href="#who">WHO WE ARE</a>
          <a href="#why">WHY WE EXIST</a>
          <a href="#what">WHAT WE DO</a>
          <a href="#involved">GET INVOLVED</a>
          <Link to="/donate">
  <button className="donate-button">DONATE NOW</button>
</Link>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <header className="hero-section">
        <h1>Meeting the challenge of hunger</h1>
      </header>

      {/* ✅ Bottom Info Strip */}
      <div className="bottom-strip">
        <div className="left">
          <h2>The Bangalore Food Bank Process</h2>
        </div>
        <div className="right">
          <button className="watch-btn">▶ Watch video</button>
        </div>
      </div>

      {/* ✅ Content Sections */}
      <section id="who" className="section">
        <section id="who" className="section who-we-are">
  <div className="who-content">
    <div className="who-text">
      <h2>Who We Are</h2>
      <p>
        The Bangalore Food Bank is a not-for-profit organization dedicated to fighting hunger and reducing food waste.
        We collect surplus food from donors such as restaurants, grocery stores, and individuals, and ensure it reaches
        those who need it the most — including homeless shelters, orphanages, and low-income families.
      </p>
      <p>
        Our mission is to build a hunger-free society by bridging the gap between excess and need,
        driven by community support and sustainable practices.
      </p>
    </div>
    <div className="who-image">
      <img src="/images/whorv.webp" alt="Food donation" />
    </div>
  </div>

  {/* ✅ Founders Section */}
  <div className="founders">
    <h2>Our Founders</h2>

    {/* Founder 1 - Image Left */}
    <div className="founder-block">
      <img src="/images/riya.jpg" alt="Founder 1" className="founder-img left" />
      <div className="founder-info right">
        <h3>Riya Nair</h3>
        <p>
          Riya is a passionate food activist who started the Food Bank in 2015 after witnessing urban hunger firsthand. 
          Her leadership has driven several large-scale food recovery campaigns across Karnataka.
        </p>
      </div>
    </div>

    {/* Founder 2 - Image Right */}
    <div className="founder-block reverse">
      <img src="/images/arav.avif" alt="Founder 2" className="founder-img right" />
      <div className="founder-info left">
        <h3>Aarav Mehta</h3>
        <p>
          Aarav brings his background in logistics and operations to optimize food distribution networks. 
          He ensures that food reaches communities quickly and efficiently.
        </p>
      </div>
    </div>

    {/* Founder 3 - Image Left */}
    <div className="founder-block">
      <img src="/images/riya.jpg" alt="Founder 3" className="founder-img left" />
      <div className="founder-info right">
        <h3>Diya Kapoor</h3>
        <p>
          With a background in social work, Diya focuses on outreach and community engagement. 
          She partners with NGOs and local groups to expand the food bank’s impact.
        </p>
      </div>
    </div>
  </div>
</section>

        
      </section>
      <section id="why" className="section">
        <section id="why" className="section why-we-exist">
  <div className="why-header">
    <h2>Why We Exist</h2>
    <p>
      Hunger is not about lack of food — it's about unequal distribution and wastage. Every day, 
      tons of edible food goes to waste while thousands go hungry. Our existence is rooted in the 
      belief that no one should sleep hungry when there's enough to share.
    </p>
  </div>

<div className="why-gallery">
  <div className="why-gallery-item">
    <img src="/images/child.webp  " alt="Child receiving food" />
    <p>Child receiving food</p>
  </div>
  <div className="why-gallery-item">
    <img src="/images/vol.jpg" alt="Volunteers packing meals" />
    <p>Volunteers packing meals</p>
  </div>
  <div className="why-gallery-item">
    <img src="/images/left.jpg" alt="Leftover food collection" />
    <p>Leftover food collection</p>
  </div>
  <div className="why-gallery-item">
    <img src="/images/meal.webp" alt="Meal distribution" />
    <p>Meal distribution</p>
  </div>
  <div className="why-gallery-item">
    <img src="/images/comki.jpg" alt="Community kitchen" />
    <p>Community kitchen</p>
  </div>
  <div className="why-gallery-item">
    <img src="/images/camp.jpg" alt="Awareness campaign" />
    <p>Awareness campaign</p>
  </div>
</div>

</section>


      </section>
      <section id="what" className="section">
        <section class="what-we-do">
  <div class="what-header">
    <h2>What We Do</h2>
    <p>We are committed to ending hunger and food wastage through meaningful action and community-driven initiatives.</p>
  </div>
  <div class="what-cards">
    <div class="what-card">
      <img src="/images/meal.webp" alt="Food Distribution" />
      <h3>Food Distribution</h3>
      <p>We deliver meals to underprivileged communities and ensure no one sleeps hungry.</p>
    </div>
    <div class="what-card">
      <img src="/images/vol.jpg" alt="Food Rescue" />
      <h3>Food Rescue</h3>
      <p>We collect surplus food from events and restaurants to prevent waste and feed those in need.</p>
    </div>
    <div class="what-card">
      <img src="/images/camp.jpg" alt="Awareness Campaigns" />
      <h3>Awareness Campaigns</h3>
      <p>We educate people about hunger issues and sustainable solutions through campaigns and drives.</p>
    </div>
  </div>
</section>

      </section>
    
      <section id="involved" className="section">
        <section class="get-involved">
  <div class="involved-header">
    <h2>Get Involved</h2>
    <p>Join our mission in fighting hunger and making a lasting difference.</p>
  </div>

  <div class="involved-cards">
    <div class="involved-card">
      <img src="/images/camp.jpg" alt="Volunteer" />
      <h3>Volunteer</h3>
      <p>Help us distribute meals, organize events, and serve the community directly.</p>
    </div>
    <div class="involved-card">
      <img src="/images/meal.webp" alt="Donor" />
      <h3>Be a Donor</h3>
      <p>Support our work financially or by donating food supplies regularly.</p>
    </div>
    <div class="involved-card">
      <img src="/images/meal.webp" alt="Partner" />
      <h3>Become a Partner</h3>
      <p>Collaborate with us as a restaurant, organization, or sponsor.</p>
    </div>
    <div class="involved-card">
      <img src="/images/comki.jpg" alt="Advocate" />
      <h3>Be an Advocate</h3>
      <p>Spread awareness on hunger issues and amplify our impact online and offline.</p>
    </div>
  </div>

  <div class="register-cta">
    <a href="/register" class="register-button">Register Here</a>
  </div>
</section>

      </section>

<footer className="bg-dark text-light pt-5 pb-3 mt-5 border-top">
  <div className="container">
    <div className="row">
      
      {/* Column 1: Milaap Links */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold mb-3">Milaap</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">About us</a></li>
          <li><a href="#" className="text-light text-decoration-none">Press and media</a></li>
          <li><a href="#" className="text-light text-decoration-none">Team</a></li>
          <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
          <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
          <li><a href="#" className="text-light text-decoration-none">Thank you</a></li>
          <li><a href="#" className="text-light text-decoration-none">Resources</a></li>
        </ul>
      </div>

      {/* Column 2: Address and Payment Support */}
      <div className="col-md-5 mb-4">
        <h6 className="fw-bold mb-3">Indian office address</h6>
        <p className="mb-2 small">
          Milaap Social Ventures India Pvt. Ltd.<br />
          Nextcoworks JP Nagar – Coworking Space JP Nagar Alankar Plaza, Bk circle, Nayak Layout, 8th Phase, J. P. Nagar,<br />
          Bangalore, Karnataka, India 560078
        </p>
        <h6 className="fw-bold mt-3">Supported by</h6>
        <div className="d-flex gap-2 mt-2">
          <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" height="24" />
          <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="MasterCard" height="24" />
          <img src="https://img.icons8.com/color/48/paytm.png" alt="Paytm" height="24" />
          <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" height="24" />
        </div>
      </div>

      {/* Column 3: Call-to-Action + Social Media */}
      <div className="col-md-4 text-md-end text-center">
       <button
  className="btn rounded-pill px-4 py-2 mb-3 text-white"
  style={{ backgroundColor: "orange", border: "none" }}
>
  Start a fundraiser
</button>
        <div className="mb-3">
          <a href="#" className="text-decoration-none text-light me-3">Pricing</a>
          <a href="#" className="text-decoration-none text-light me-3">Reviews</a>
          <a href="#" className="text-decoration-none text-light">FAQs and tips</a>
        </div>
        <div className="d-flex justify-content-md-end justify-content-center gap-3">
          <a href="#"><i className="fab fa-facebook text-light"></i></a>
          <a href="#"><i className="fab fa-twitter text-light"></i></a>
          <a href="#"><i className="fab fa-linkedin text-light"></i></a>
          <a href="#"><i className="fab fa-instagram text-light"></i></a>
          <a href="#"><i className="fab fa-youtube text-light"></i></a>
        </div>
      </div>
    </div>

    {/* Bottom Centered Copyright */}
    <hr className="border-secondary my-4" />
    <div className="text-center small">
      <span>© 2010 - 2025 milaap.org. All rights reserved.</span>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Initial;
