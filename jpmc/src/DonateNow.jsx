import React, { useState } from 'react';
import QRCode from "react-qr-code";
import './donate.css';

const DonateNow = () => {
  const goalAmount = 75000; // 🎯 Fundraising goal
  const [donatedAmount, setDonatedAmount] = useState(0);
  const [donation, setDonation] = useState('');
  const [qrVisible, setQrVisible] = useState(false);

  const qrData = 'upi://pay?pa=example@upi&pn=Test%20User&am=1&cu=INR';
  const progressPercent = Math.min(Math.round((donatedAmount / goalAmount) * 100), 100);

  const handleDonate = () => {
    const parsed = parseInt(donation);
    if (!isNaN(parsed) && parsed > 0) {
      setDonatedAmount(prev => prev + parsed);
      setDonation('');
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Bangalore<span>Food Bank</span></div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Campaigns</a>
        </div>
      </nav>

      {/* Main Donation Section */}
      <section className="donation-section">
        <div className="donation-text">
          <h2>Tanay Savla's Campaign to Support Daily Wage Earners and Families</h2>
          <p>
            In the face of economic hardship, daily wage earners and their families struggle each day to afford basic necessities like food, shelter, and medicine. This campaign, led by Tanay Savla, is dedicated to uplifting these communities through direct financial support and essential supplies.
          </p>
          <p>
            Your contribution will provide immediate relief in the form of grocery kits, hygiene essentials, and emergency funds for families in need. Every rupee you donate goes directly to those affected, with 100% transparency and no administrative cuts.
          </p>
          <p>
            Together, we can help restore dignity and hope to those who have lost their livelihood. Join us in making a real difference — your support matters now more than ever.
          </p>
        </div>

        <div className="donation-box">
          <div className="progress-circle">
            <div className="circle" style={{ "--progress": progressPercent / 100 }}>
              <span>{progressPercent}%</span>
            </div>
          </div>
          <p><strong>Raised:</strong> ₹{donatedAmount} of ₹{goalAmount.toLocaleString()}</p>

          <input
            type="number"
            min="1"
            placeholder="Enter amount (₹)"
            value={donation}
            onChange={(e) => setDonation(e.target.value)}
            className="donation-input"
          />
          <button className="donate-now-btn" onClick={handleDonate}>Donate now</button>
          <p className="pay-methods">Card, Netbanking, UPI</p>

          <hr className="divider" />
          <p>Or Donate using</p>

          {/* QR Block */}
          <div className="qr-block">
            {qrVisible ? (
              <>
                <QRCode value={qrData} size={180} />
                <p className="scan-text">Scan & donate with any app</p>
              </>
            ) : (
              <img src="/bg.png" alt="QR Placeholder" className="qr-code" />
            )}

            {!qrVisible && (
              <button className="generate-btn" onClick={() => setQrVisible(true)}>
                Generate QR
              </button>
            )}

            <div className="wallet-icons">
              <img src="https://img.icons8.com/color/48/bhim.png" alt="BHIM" />
              <img src="https://img.icons8.com/color/48/google-pay-india.png" alt="GPay" />
              <img src="https://img.icons8.com/color/48/paytm.png" alt="Paytm" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light pt-5 pb-3 mt-5 border-top">
        <div className="container">
          <div className="row">
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

          <hr className="border-secondary my-4" />
          <div className="text-center small">
            <span>© 2010 - 2025 milaap.org. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonateNow;
