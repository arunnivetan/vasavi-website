import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Phone, MessageCircle } from 'lucide-react';
import { productsList } from '../data/products';
import './Products.css';

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="products-page animate-fade-in-up">
      {/* 1. Products Hero Banner */}
      <div className="products-banner">
        <div className="container products-banner-container">
          <h1 className="products-title">Premium Product Range</h1>
          <p className="products-subtitle">Browse our complete collection of premium interior materials and furniture.</p>
        </div>
      </div>



      {/* 3. Product Grid Section */}
      <section className="section products-section">
        <div className="container">
          <div className="products-grid">
            {productsList.map((product) => (
              <div 
                className="product-card" 
                key={product.id}
                onClick={() => navigate(`/products/${product.slug}`)}
              >
                {/* Product Image Area */}
                <div className="product-card-image-box">
                  <img src={product.image} alt={product.name} className="product-card-img" />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className="product-card-badge">{product.badge}</span>
                  )}
                  
                  {/* Title Overlay */}
                  <div className="product-card-overlay">
                    <h3 className="product-card-overlay-title">{product.name}</h3>
                  </div>
                </div>

                {/* Info and Features */}
                <div className="product-card-info">
                  <p className="product-card-desc">
                    {product.description}
                  </p>

                  <ul className="product-card-features">
                    {product.features.map((feat, index) => (
                      <li key={index} className="product-card-feature-item">
                        <span className="card-feature-check">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Footer Actions */}
                  <div className="product-card-footer">
                    <button 
                      className="product-card-details-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.slug}`);
                      }}
                    >
                      View Details
                    </button>
                    <div className="product-card-quick-actions">
                      <a 
                        href="tel:9842438037" 
                        className="quick-action-btn call" 
                        aria-label="Call Now" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone size={15} />
                      </a>
                      <a 
                        href="https://wa.me/919003848037" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="quick-action-btn whatsapp" 
                        aria-label="WhatsApp" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
