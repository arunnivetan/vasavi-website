import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, DollarSign, Truck, Award, Headphones, ChevronDown, ChevronUp, Star, Phone, MessageSquare, ArrowRight, ClipboardList, MapPin, Clock, Check, Send, CheckCircle, Mail } from 'lucide-react';
import { productsList } from '../data/products';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  // Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'Plywood',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

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
          'event_label': 'Home Contact Form'
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

  const faqs = [
    {
      q: "What materials do you specialize in?",
      a: "We specialize in premium plywood, laminate sheets, veneer boards, PVC doors, glass panels, high-end modular kitchen accessories, and all essential decorative woodworks hardware."
    },
    {
      q: "Do you provide customized carpentry and installations?",
      a: "Yes! Beyond supplying raw materials, we have an expert team of craftsmen who design and install custom modular wardrobes, kitchen setups, custom furniture, and wooden doors."
    },
    {
      q: "How long have you been in business?",
      a: "Sri Vasavi Plywood & Hardware has been serving homeowners, contractors, and builders with premium wood solutions since 1997, marking over 28 years of trusted excellence."
    },
    {
      q: "Do you deliver materials to the site?",
      a: "Yes, we arrange prompt and secure transportation for all purchased materials directly to your site in and around Lalgudi and Trichy."
    },
    {
      q: "Which brands do you distribute?",
      a: "We are authorized distributors and dealers for premium brands including CenturyPly, Greenply, Kitply, Merino Laminates, Hafele, Ebco, Hettich, and Fevicol."
    }
  ];

  const chooseUsData = [
    {
      icon: <Award size={32} />,
      title: "28+ Years of Trust",
      desc: "Serving homeowners, carpenters, and builders with premium plywood and interior materials for over 28 years."
    },
    {
      icon: <Shield size={32} />,
      title: "Genuine Premium Brands",
      desc: "Authorized dealer for Greenply, CenturyPly, Merino, Hafele, Hettich, and other trusted brands."
    },
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery & Expert Support",
      desc: "Quick delivery, honest pricing, and expert guidance to help customers choose the right materials."
    }
  ];

  const testimonials = [
    {
      name: "Ramanathan K.",
      role: "Architect, Trichy",
      text: "Sri Vasavi Plywood & Hardware has been my trusted supplier for 15 years. Their collection of laminates and hardware accessories from brands like Ebco and CenturyPly is second to none.",
      rating: 5
    },
    {
      name: "Anjali Devi",
      role: "Homeowner, Lalgudi",
      text: "We ordered modular kitchen fittings and PVC doors for our new home. Excellent durability, and the customer assistance helped us pick the perfect color tones.",
      rating: 5
    },
    {
      name: "David Raja",
      role: "Contractor, Trichy",
      text: "Very reliable service, on-time site deliveries, and premium materials. Their 28+ years of expertise in wood solutions shows in their advice and material quality.",
      rating: 5
    }
  ];

  return (
    <div className="home-page animate-fade-in-up">
      
      {/* 1. Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/showroom_bg.jpg')" }}>
        <div className="container hero-container">
          <div className="hero-content">
            
            {/* Trust Badge */}
            <div className="hero-badge">
              <span className="badge-emoji">🏆</span>
              <span>28+ Years of Trusted Service</span>
            </div>

            {/* Hero Heading */}
            <h1 className="hero-title">
              All Types of Wooden Works & Interior Materials in One Place
            </h1>

            {/* Tagline / Subheading */}
            <p className="hero-tags">
              Custom Furniture &bull; Plywood &bull; Hardware &bull; Modular Kitchen &bull; PVC Doors &bull; Glass & More
            </p>

            {/* Contact Box (Glassmorphic Container) */}
            <div className="hero-contact-box">
              <a href="tel:9842438037" className="hero-contact-link">
                <Phone size={18} />
                <span>98424 38037</span>
              </a>
              <span className="hero-contact-divider">|</span>
              <a href="https://wa.me/919003848037" target="_blank" rel="noopener noreferrer" className="hero-contact-link wa">
                <MessageSquare size={18} />
                <span>90038 48037</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary hero-btn">
                <span>View Products</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white hero-btn">
                <ClipboardList size={18} />
                <span>Get Quote Now</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Explore Our Products in Action (Video Section) */}
      <section className="section video-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Products in Action</h2>
            <p>Take a virtual tour of our Trichy store and watch real product demonstrations in action.</p>
          </div>

          <div className="video-reel-three-grid">
            
            {/* Card 1: Showroom Tour (Instagram Reel) */}
            <div className="video-grid-card">
              <div className="video-card-title-bar">
                <h3>Store Showroom Tour</h3>
              </div>
              <div className="video-iframe-wrapper instagram-iframe-wrapper">
                <iframe
                  src="https://www.instagram.com/reel/DV4HP_ykp3w/embed"
                  title="Store Showroom Tour"
                  style={{ border: 'none' }}
                  scrolling="no"
                  allowtransparency="true"
                  allowFullScreen={true}
                ></iframe>
              </div>
              <div className="video-card-footer">
                <Link to="/products" className="btn btn-secondary video-card-cta">
                  <span>Explore Interior</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2: PVC Doors (YouTube Short) */}
            <div className="video-grid-card">
              <div className="video-card-title-bar">
                <h3>PVC Doors Demonstration</h3>
              </div>
              <div className="video-iframe-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dJSOHkah0XI"
                  title="PVC Doors Showcase"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-card-footer">
                <Link to="/products/pvc-doors" className="btn btn-secondary video-card-cta">
                  <span>View PVC Doors</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3: Wooden Doors (YouTube Short) */}
            <div className="video-grid-card">
              <div className="video-card-title-bar">
                <h3>Wooden Doors Showcase</h3>
              </div>
              <div className="video-iframe-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/iA0ZcVNmB9Y"
                  title="Premium Wooden Doors Showcase"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-card-footer">
                <Link to="/products/wooden-doors" className="btn btn-secondary video-card-cta">
                  <span>View Wooden Doors</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>

          <div className="showroom-bottom-actions">
            <a 
              href="https://wa.me/919003848037" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn showcase-whatsapp-btn"
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Sri Vasavi Section */}
      <section className="section why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Sri Vasavi</h2>
            <p>Trusted by homeowners, carpenters, and builders for premium interior materials.</p>
          </div>
          <div className="choose-us-grid">
            {chooseUsData.map((item, idx) => (
              <div className="choose-us-card" key={idx}>
                <div className="choose-us-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="choose-us-card-title">{item.title}</h3>
                <p className="choose-us-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Premium Product Range Section */}
      <section className="section home-products-section">
        <div className="container">
          <div className="section-header">
            <h2>Premium Product Range</h2>
            <p>Discover our selection of premium plywood, designer hardware, custom woodworks, and modular kitchen solutions.</p>
          </div>
          <div className="home-products-grid">
            {productsList.slice(0, 4).map((product) => (
              <div 
                className="home-product-card" 
                key={product.id}
                onClick={() => navigate(`/products/${product.slug}`)}
              >
                {/* Product Image Area */}
                <div className="home-product-card-image-box">
                  <img src={product.image} alt={product.name} className="home-product-card-img" />
                  {product.badge && (
                    <span className="home-product-card-badge">{product.badge}</span>
                  )}
                  <div className="home-product-card-overlay">
                    <h3 className="home-product-card-overlay-title">{product.name}</h3>
                  </div>
                </div>

                {/* Info and Features */}
                <div className="home-product-card-info">
                  <p className="home-product-card-desc">
                    {product.description}
                  </p>

                  <ul className="home-product-card-features">
                    {product.features.slice(0, 3).map((feat, index) => (
                      <li key={index} className="home-product-card-feature-item">
                        <span className="home-card-feature-check">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Footer Actions */}
                  <div className="home-product-card-footer">
                    <button 
                      className="home-product-card-details-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.slug}`);
                      }}
                    >
                      View Details
                    </button>
                    <div className="home-product-card-quick-actions">
                      <a 
                        href="tel:9842438037" 
                        className="home-quick-action-btn call" 
                        aria-label="Call Now" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone size={15} />
                      </a>
                      <a 
                        href="https://wa.me/919003848037" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="home-quick-action-btn whatsapp" 
                        aria-label="WhatsApp" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MessageSquare size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="showroom-bottom-actions">
            <Link to="/products" className="btn btn-primary">
              <span>View All Products</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Hear from home builders, architects, and contractors who rely on our interior solutions.</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--secondary-accent)" color="var(--secondary-accent)" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{t.name}</h4>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our materials, installation, and order delivery.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`} 
                key={idx}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <button className="faq-toggle-btn" aria-label="Toggle Answer">
                    {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                <div className="faq-answer-container">
                  <p className="faq-answer">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Visit Our Showroom (Google Map) Section */}
      <section className="section showroom-location-section">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our Showroom</h2>
            <p>We'd love to welcome you to our showroom. Visit us to explore our premium plywood, hardware, wooden works, modular kitchens, PVC doors, and interior solutions.</p>
          </div>
          
          <div className="showroom-container">
            {/* Left: Map Preview Card */}
            <div className="showroom-map-card">
              <iframe
                title="Sri Vasavi Plywood &amp; Hardware Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15669.957591603512!2d78.7997096645366!3d10.92610738676239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5e305e5555555%3A0x1d37b60ea2659e9c!2sLalgudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1686641500000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            {/* Right: Store Information */}
            <div className="showroom-info">
              <h3 className="showroom-store-name">Sri Vasavi Plywood &amp; Hardware</h3>
              <p className="showroom-store-address">Lalgudi, Tiruchirappalli, Tamil Nadu</p>
              
              <div className="showroom-details-list">
                <div className="showroom-detail-item">
                  <MapPin size={20} className="showroom-icon" />
                  <span>Lalgudi, Tiruchirappalli</span>
                </div>
                <div className="showroom-detail-item">
                  <Phone size={20} className="showroom-icon" />
                  <a href="tel:9842438037">98424 38037</a>
                </div>
                <div className="showroom-detail-item">
                  <MessageSquare size={20} className="showroom-icon wa-icon" />
                  <a href="https://wa.me/919003848037" target="_blank" rel="noopener noreferrer">90038 48037</a>
                </div>
                <div className="showroom-detail-item">
                  <Clock size={20} className="showroom-icon" />
                  <div>
                    <strong>Business Hours:</strong>
                    <br />
                    Monday - Saturday: 9:00 AM - 8:30 PM
                    <br />
                    Sunday: Closed
                  </div>
                </div>
                <div className="showroom-detail-item">
                  <Star size={20} className="showroom-icon star-icon" fill="var(--secondary-accent)" color="var(--secondary-accent)" />
                  <span>28+ Years Experience</span>
                </div>
              </div>
              
              <div className="showroom-cta-buttons">
                <a 
                  href="https://maps.app.goo.gl/bdt8VgCnaoGfdr927" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-showroom-directions"
                >
                  <MapPin size={18} />
                  <span>Get Directions</span>
                </a>
                <a href="tel:9842438037" className="btn btn-showroom-call">
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a 
                  href="https://wa.me/919003848037" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-showroom-whatsapp"
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section className="section home-contact-section">
        <div className="container home-contact-container">
          <div className="home-contact-grid">
            <div className="home-contact-info-col">
              <h2 className="home-contact-title">Send An Enquiry</h2>
              <p className="home-contact-desc">
                Have a question or looking for a custom estimate for your woodworks or interior project? Fill out the form, and our experts will get back to you within 24 hours.
              </p>
              <div className="home-contact-details">
                <div className="home-contact-detail-item">
                  <Phone size={20} className="home-contact-detail-icon" />
                  <div>
                    <h4>Call Us</h4>
                    <p><a href="tel:9842438037">+91 98424 38037</a></p>
                  </div>
                </div>
                <div className="home-contact-detail-item">
                  <MessageSquare size={20} className="home-contact-detail-icon wa" />
                  <div>
                    <h4>WhatsApp Us</h4>
                    <p><a href="https://wa.me/919003848037" target="_blank" rel="noopener noreferrer">+91 90038 48037</a></p>
                  </div>
                </div>
                <div className="home-contact-detail-item">
                  <Mail size={20} className="home-contact-detail-icon" />
                  <div>
                    <h4>Email Support</h4>
                    <p><a href="mailto:srivasaviplywood@gmail.com">srivasaviplywood@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-contact-form-col">
              <form onSubmit={handleSubmit} className="home-contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="home-name">Full Name *</label>
                  <input
                    type="text"
                    id="home-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="home-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="home-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'input-error' : ''}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="home-email">Email (Optional)</label>
                    <input
                      type="email"
                      id="home-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'input-error' : ''}
                      placeholder="example@mail.com"
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="home-requirement">What materials are you looking for? *</label>
                  <select
                    id="home-requirement"
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

                <div className="form-group">
                  <label htmlFor="home-message">Your Requirements / Message *</label>
                  <textarea
                    id="home-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'input-error' : ''}
                    placeholder="Describe your design, sizing, or quantity requirements..."
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

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
