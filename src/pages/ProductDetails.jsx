import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Phone, MessageCircle, Send, Check, ChevronRight, HelpCircle, Sparkles, Box, ShieldCheck, Clock, X } from 'lucide-react';
import { productsList } from '../data/products';
import './ProductDetails.css';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find current product
  const product = productsList.find((p) => p.slug === slug);
  
  // States
  const [activeImage, setActiveImage] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state to display beautiful skeleton loader
  useEffect(() => {
    setIsLoading(true);
    if (product) {
      setActiveImage(product.image);
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [slug, product]);

  // Handle product not found
  if (!product) {
    return (
      <div className="product-not-found container">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist or has been removed.</p>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  // Get 3-4 related products (excluding the current one)
  const relatedProducts = productsList
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  // Toggle FAQ accordion
  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="product-details-page animate-fade-in-up">
      {/* Breadcrumbs */}
      <div className="breadcrumbs-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products">Products</Link>
            <ChevronRight size={14} />
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      {isLoading ? (
        /* --- SKELETON LOADER SCREEN --- */
        <div className="container skeleton-container">
          <div className="product-details-grid">
            {/* Left Column: Gallery Skeleton */}
            <div className="details-left">
              <div className="skeleton skeleton-main-image"></div>
              <div className="skeleton-thumbnails">
                <div className="skeleton skeleton-thumb"></div>
                <div className="skeleton skeleton-thumb"></div>
                <div className="skeleton skeleton-thumb"></div>
              </div>
            </div>
            {/* Right Column: Info Skeleton */}
            <div className="details-right">
              <div className="skeleton skeleton-badge"></div>
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-meta"></div>
              <div className="skeleton skeleton-description"></div>
              <div className="skeleton skeleton-buttons">
                <div className="skeleton skeleton-btn"></div>
                <div className="skeleton skeleton-btn"></div>
              </div>
              <div className="skeleton skeleton-features-header"></div>
              <div className="skeleton skeleton-features"></div>
            </div>
          </div>
        </div>
      ) : (
        /* --- LOADED PRODUCT DETAILS PAGE --- */
        <div className="container">
          <div className="product-details-grid">
            
            {/* 1. Left Column: Image Gallery (Sticky) */}
            <div className="details-left">
              <div className="gallery-sticky-wrapper">
                <div className="main-image-wrapper">
                  <img src={activeImage} alt={product.name} className="main-image" />
                  {product.badge && (
                    <span className="details-badge">{product.badge}</span>
                  )}
                </div>

                <div className="thumbnail-gallery">
                  {product.images && product.images.map((imgUrl, index) => (
                    <button
                      key={index}
                      className={`thumbnail-btn ${activeImage === imgUrl ? 'active' : ''}`}
                      onClick={() => setActiveImage(imgUrl)}
                      aria-label={`View gallery image ${index + 1}`}
                    >
                      <img src={imgUrl} alt={`${product.name} thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Right Column: Content Scroll & Info (Sticky Panel Actions) */}
            <div className="details-right">
              <div className="product-meta-header">
                <div className="meta-brand-tag">
                  <Box size={14} className="meta-icon" />
                  <span>Brand: {product.brand}</span>
                </div>
                <div className="meta-status-tag">
                  <ShieldCheck size={14} className="meta-icon" />
                  <span>Availability: {product.availability}</span>
                </div>
              </div>

              <h1 className="product-title-large">{product.name}</h1>
              <p className="product-short-desc">{product.description}</p>

              {/* Desktop Sticky Panel Action Buttons */}
              <div className="details-action-buttons">
                <a href="tel:9842438037" className="btn btn-primary detail-action-btn call">
                  <Phone size={18} />
                  <span>Call Now: 98424 38037</span>
                </a>
                <a 
                  href={`https://wa.me/919003848037?text=Hello%20Sri%20Vasavi%20Plywood,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20provide%20more%20details.`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn detail-action-btn whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link 
                  to="/contact"
                  className="btn detail-action-btn enquiry-btn"
                >
                  <Send size={18} />
                  <span>Request Quote</span>
                </Link>
              </div>

              {/* Structured Content Sections with generous spacing */}
              <div className="structured-content">
                
                {/* A. Overview */}
                <div className="details-section">
                  <h3 className="section-title">Overview</h3>
                  <p className="section-text">{product.overview}</p>
                </div>

                {/* B. Features List */}
                <div className="details-section">
                  <h3 className="section-title">Key Features</h3>
                  <ul className="details-features-grid">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="details-feature-item">
                        <span className="feature-icon-check">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* C. Specifications */}
                <div className="details-section">
                  <h3 className="section-title">Technical Specifications</h3>
                  <div className="specs-table-container">
                    <table className="specs-table">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, val]) => (
                          <tr key={key}>
                            <td className="spec-name">{key}</td>
                            <td className="spec-val">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* D. Applications */}
                <div className="details-section">
                  <h3 className="section-title">Applications</h3>
                  <div className="app-pills">
                    {product.applications.map((app, idx) => (
                      <span key={idx} className="app-pill">{app}</span>
                    ))}
                  </div>
                </div>

                {/* E. Benefits */}
                <div className="details-section">
                  <h3 className="section-title">Key Benefits</h3>
                  <ul className="benefits-list">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="benefit-item">
                        <div className="benefit-dot"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* F. FAQ Accordion */}
                {product.faqs && product.faqs.length > 0 && (
                  <div className="details-section">
                    <h3 className="section-title">Frequently Asked Questions</h3>
                    <div className="details-faq-list">
                      {product.faqs.map((faq, idx) => (
                        <div 
                          key={idx} 
                          className={`details-faq-item ${activeFaq === idx ? 'active' : ''}`}
                          onClick={() => toggleFaq(idx)}
                        >
                          <div className="details-faq-question">
                            <span>{faq.q}</span>
                            <span className="faq-icon-arrow">{activeFaq === idx ? '−' : '+'}</span>
                          </div>
                          <div className="details-faq-answer">
                            <p>{faq.a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* 3. Related Products Section */}
          <section className="related-section">
            <div className="related-header">
              <h2>You May Also Like</h2>
              <p>Explore other premium interior materials and hardware solutions</p>
            </div>
            
            <div className="related-grid">
              {relatedProducts.map((p) => (
                <div key={p.id} className="related-card" onClick={() => navigate(`/products/${p.slug}`)}>
                  <div className="related-card-image-box">
                    <img src={p.image} alt={p.name} className="related-card-img" />
                    {p.badge && <span className="related-card-badge">{p.badge}</span>}
                  </div>
                  <div className="related-card-info">
                    <h3 className="related-card-title">{p.name}</h3>
                    <p className="related-card-desc">
                      {p.description.length > 80 
                        ? p.description.substring(0, 80) + '...' 
                        : p.description}
                    </p>
                    <div className="related-card-actions">
                      <button 
                        className="related-action-btn details"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/products/${p.slug}`);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      )}

      {/* 4. Mobile Sticky Bottom Action Bar */}
      <div className="mobile-sticky-action-bar">
        <a href="tel:9842438037" className="mobile-action-link call">
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <a 
          href={`https://wa.me/919003848037?text=Hello%20Sri%20Vasavi%20Plywood,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20provide%20more%20details.`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-action-link whatsapp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
        <Link 
          to="/contact"
          className="mobile-action-link enquiry"
        >
          <Send size={18} />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  );
}
