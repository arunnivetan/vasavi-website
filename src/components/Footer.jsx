import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Company Profile */}
          <div className="footer-col footer-about">
            <div className="footer-logo-row">
              <img src="/logo.png" alt="SVP Logo" className="footer-logo" />
              <div>
                <h3 className="footer-brand-title">Sri Vasavi Plywood &amp; Hardware</h3>
                <span className="footer-brand-subtitle">Premium Wood Solutions</span>
              </div>
            </div>
            <p className="footer-desc">
              Your one-stop destination for premium plywood, laminates, custom furniture, modular kitchen accessories, PVC doors, and complete interior designing solutions since 1997.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/sri_vasavi_plywood" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://wa.me/919003848037" target="_blank" rel="noopener noreferrer" className="social-icon wa" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/about">About Timeline</Link></li>
              <li><Link to="/contact">Contact & Enquiry</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="footer-col">
            <h4 className="footer-title">Product Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products">PVC Doors</Link></li>
              <li><Link to="/products">Modular Kitchen Accessories</Link></li>
              <li><Link to="/products">Teak Wood Furniture</Link></li>
              <li><Link to="/products">Handmade Wooden Stands</Link></li>
              <li><Link to="/products">Mosquito Net Solutions</Link></li>
              <li><Link to="/products">Interior Hardware</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-col footer-contact-news">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-icon" />
                <span>Lalgudi Main Road, Trichy, Tamil Nadu - 621601</span>
              </li>
              <li>
                <Phone size={18} className="footer-icon" />
                <a href="tel:9842438037">+91 98424 38037</a>
              </li>
              <li>
                <Mail size={18} className="footer-icon" />
                <a href="mailto:srivasaviplywood@gmail.com">srivasaviplywood@gmail.com</a>
              </li>
            </ul>

            <div className="footer-newsletter">
              <h5 className="newsletter-title">Subscribe to Newsletter</h5>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <Send size={16} />
                </button>
              </form>
              {subscribed && <span className="newsletter-success">Subscribed successfully!</span>}
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Sri Vasavi Plywoods. All Rights Reserved. Crafted with care.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
