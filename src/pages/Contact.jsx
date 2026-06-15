import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'Plywood',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    
    // Simple Indian phone number validation (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Enter a valid email address";
      }
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message or requirement detail is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error on input
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);

      // Trigger Google Ads conversion tracking event
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'contact_form_submit', {
          'event_category': 'lead',
          'event_label': 'Contact Form'
        });
      }

      setShowToast(true);
      // Clear form
      setFormData({
        name: '',
        phone: '',
        email: '',
        requirement: 'Plywood',
        message: ''
      });
      // Hide Toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }
  };

  return (
    <div className="contact-page animate-fade-in-up">
      {/* Contact Banner */}
      <div className="contact-banner">
        <div className="container contact-banner-container">
          <h1 className="contact-title">Contact &amp; Enquiry</h1>
          <p className="contact-subtitle">Get a custom quote or consult with our experts for your home woodworks today.</p>
        </div>
      </div>

      <section className="section contact-section">
        <div className="container contact-grid-container">
          <div className="contact-grid">
            
            {/* Left Column: Business Details */}
            <div className="contact-info-column">
              <h2 className="column-title">Visit Our Showroom</h2>
              <p className="column-desc">Stop by our main branch in Lalgudi, Trichy to explore samples of laminates, modular hardware systems, and door selections.</p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4>Location Address</h4>
                    <p>
                      Lalgudi Main Road, Lalgudi, Trichy, Tamil Nadu - 621601
                      <br />
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=Sri+Vasavi+Plywood+and+Hardware+Lalgudi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link get-directions-link"
                        style={{ display: 'inline-block', marginTop: '4px', textDecoration: 'underline', fontWeight: '500' }}
                      >
                        Get Directions
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4>Call for Queries</h4>
                    <p><a href="tel:9842438037" className="detail-link">+91 98424 38037</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon wa-icon">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h4>WhatsApp Chat</h4>
                    <p><a href="https://wa.me/919003848037" target="_blank" rel="noopener noreferrer" className="detail-link wa">+91 90038 48037</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4>Email Support</h4>
                    <p><a href="mailto:srivasaviplywood@gmail.com" className="detail-link">srivasaviplywood@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 8:30 PM <br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="contact-map-wrapper">
                <iframe
                  title="Sri Vasavi Plywood &amp; Hardware Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15669.957591603512!2d78.7997096645366!3d10.92610738676239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5e305e5555555%3A0x1d37b60ea2659e9c!2sLalgudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1686641500000!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="contact-form-column">
              <h2 className="column-title">Send An Enquiry</h2>
              <p className="column-desc">Fill out the form below, and our team will get back to you with custom estimates and details within 24 hours.</p>

              <form onSubmit={handleSubmit} className="premium-form" noValidate>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                {/* Grid for Phone & Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'input-error' : ''}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'input-error' : ''}
                      placeholder="example@mail.com"
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>

                {/* Requirement Dropdown */}
                <div className="form-group">
                  <label htmlFor="requirement">What materials are you looking for? *</label>
                  <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                  >
                    <option value="Plywood">Plywood &amp; Boards</option>
                    <option value="Laminates">Laminates &amp; Veneers</option>
                    <option value="Modular Kitchen">Modular Kitchen Accessories</option>
                    <option value="PVC Doors">PVC Doors</option>
                    <option value="Custom Furniture">Custom Solid Wood Furniture</option>
                    <option value="Glasswork">Glass &amp; PVC Board solutions</option>
                    <option value="Hardware">Interior Hardware Fittings</option>
                    <option value="Other">Other Interior Works</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Your Requirements / Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'input-error' : ''}
                    placeholder="Describe your design, sizing, or quantity requirements..."
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary form-submit-btn">
                  <Send size={18} />
                  <span>Send Enquiry</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Success Toast Notification */}
      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        <CheckCircle size={24} className="toast-icon" />
        <div>
          <h4>Inquiry Sent Successfully!</h4>
          <p>Thank you. We will contact you shortly.</p>
        </div>
      </div>
    </div>
  );
}
