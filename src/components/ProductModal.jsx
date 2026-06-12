import React, { useEffect } from 'react';
import { X, Check, Phone, MessageCircle } from 'lucide-react';
import './ProductModal.css';

export default function ProductModal({ product, onClose }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        {/* Product Image */}
        <div className="modal-image-container">
          <img src={product.image} alt={product.name} className="modal-image" />
        </div>

        {/* Content Area */}
        <div className="modal-content">
          <h3 className="modal-section-title">Product Description</h3>
          <p className="modal-description">{product.description}</p>

          <h4 className="modal-subtitle">Key Features</h4>
          <ul className="modal-features">
            {product.features && product.features.map((feature, idx) => (
              <li key={idx} className="modal-feature-item">
                <span className="feature-checkmark">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="modal-divider"></div>
          
          <p className="modal-cta-note">
            Interested in this product? Contact us for pricing, availability, and custom options.
          </p>

          {/* Action Buttons */}
          <div className="modal-actions">
            <a href="tel:9842438037" className="btn btn-primary modal-action-btn call-btn">
              <Phone size={18} />
              <span>Call: 98424 38037</span>
            </a>
            <a href="https://wa.me/919003848037" target="_blank" rel="noopener noreferrer" className="btn modal-action-btn wa-btn">
              <MessageCircle size={18} />
              <span>WhatsApp: 90038 48037</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
