import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, DollarSign, Truck, Award, Headphones, ChevronDown, ChevronUp, Star, Phone, MessageSquare, ArrowRight, ClipboardList } from 'lucide-react';
import './Home.css';

export default function Home() {
  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
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
      icon: <Shield size={32} />,
      title: "Best Quality Materials",
      desc: "Direct source for premium-grade water-resistant plywood, standard laminates, and long-lasting kitchen fixtures."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Affordable Pricing",
      desc: "Competitive pricing structure for wholesale builders and individual home projects alike, with no middleman markup."
    },
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      desc: "Our active logistics network ensures all wood products and hardware materials reach your project site on time."
    },
    {
      icon: <Award size={32} />,
      title: "Trusted Brands Only",
      desc: "Authorized partner with major industry giants like CenturyPly, Greenply, Hafele, and Hettich to guarantee quality."
    },
    {
      icon: <Headphones size={32} />,
      title: "Expert Design Support",
      desc: "Consult with our in-house consultants to pick the exact laminates, door styles, and modular accessories for your layout."
    }
  ];

  const brandLogos = [
    "CenturyPly", "Greenply", "Kitply", "Merino", "Fevicol", "Hafele", "Ebco", "Hettich",
    "CenturyPly", "Greenply", "Kitply", "Merino", "Fevicol", "Hafele", "Ebco", "Hettich" // Repeated for infinite scroll
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
      <section className="hero-section" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/hero_bg.png')" }}>
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

      {/* 2. Why Choose Us Section */}
      <section className="section why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We deliver unbeatable value through premium materials and expert advice.</p>
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

      {/* 3. Featured Brands Section */}
      <section className="brands-section">
        <div className="container">
          <div className="section-header">
            <h2>Premium Brands We Deal In</h2>
            <p>We distribute authentic wooden components and hardware from industry-leading builders.</p>
          </div>
        </div>
        
        {/* Infinite Scrolling Logo Carousel */}
        <div className="logo-carousel-container">
          <div className="logo-carousel-track">
            {brandLogos.map((brand, idx) => (
              <div className="logo-slide" key={idx}>
                <div className="brand-logo-card">
                  <span className="brand-logo-text">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Reel Section */}
      <section className="section video-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Showroom</h2>
            <p>Take a virtual tour of our Trichy store and watch our premium custom woodworks and hardware selections in action.</p>
          </div>

          <div className="video-reel-container">
            <div className="video-reel-card">
              <iframe
                src="https://www.instagram.com/reel/DV4HP_ykp3w/embed"
                width="100%"
                height="650"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '24px' }}
                scrolling="no"
                allowtransparency="true"
                allowFullScreen={true}
              ></iframe>
            </div>
            
            <div className="video-reel-info">
              <h3 className="video-reel-title">Quality Timber &amp; Modern Designs</h3>
              <p className="video-reel-desc">
                From luxury wardrobe laminates to heavy-duty modular kitchen cabinets, watch how we craft premium designs. Visit us in Lalgudi, Trichy to explore our collections live.
              </p>
              <div className="video-reel-stats">
                <div className="v-stat">
                  <span className="v-stat-num">28+</span>
                  <span className="v-stat-label">Years Legacy</span>
                </div>
                <div className="v-stat">
                  <span className="v-stat-num">100%</span>
                  <span className="v-stat-label">Authentic Brands</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary video-cta-btn">
                <span>Plan Your Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
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

      {/* 5. FAQ Section */}
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

    </div>
  );
}
