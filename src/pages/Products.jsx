import React, { useState } from 'react';
import { Check, Phone, MessageCircle } from 'lucide-react';
import ProductModal from '../components/ProductModal';
import './Products.css';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsList = [
    {
      id: 1,
      name: "PVC Doors",
      badge: "Premium",
      image: "/pvc_doors.png",
      description: "Stylish, durable PVC doors suitable for homes and offices. Water-resistant, termite-proof, and extremely low maintenance. Ideal for bathrooms, balconies, and utility areas.",
      features: ["Weather resistant", "Modern designs", "Easy installation"]
    },
    {
      id: 2,
      name: "Modular Kitchen Accessories",
      badge: "Best Seller",
      image: "/modular_kitchen.png",
      description: "Premium stainless steel fittings, pull-out racks, wire baskets, corner organizers, and cabinet drawer systems for modern modular kitchens. Designed for smart storage and smooth soft-close operation.",
      features: ["Smart storage", "Soft-close mechanisms", "Rust-resistant steel"]
    },
    {
      id: 3,
      name: "Teak Wood Furniture",
      badge: "Premium",
      image: "/teak_wood.png",
      description: "Premium dressing tables, luxury dining tables, solid wood frames, chairs, and other bespoke solid wood furniture pieces crafted with precision and finished to highlight natural wood grains.",
      features: ["Solid teak wood", "Handcrafted designs", "Polished finish"]
    },
    {
      id: 4,
      name: "Handmade Wooden Stands",
      badge: "New",
      image: "/wooden_stands.png",
      description: "Custom-crafted decorative wooden wall shelves, brackets, study desk organizers, and plant stands. Made from premium timber to add warmth and storage to your living room walls.",
      features: ["Handcrafted wood", "Space saving", "Elegant aesthetic"]
    },
    {
      id: 5,
      name: "Mosquito Net Solutions",
      badge: "Best Seller",
      image: "/mosquito_net.png",
      description: "Custom-fit window nets, pleated mesh doors, sliding mesh screens, and velcro frames designed to keep interior spaces completely insect-free while maintaining perfect ventilation.",
      features: ["Durable mesh", "Smooth sliding slider", "Perfect ventilation"]
    },
    {
      id: 6,
      name: "Plywood & Boards",
      badge: "Best Seller",
      image: "/plywood_boards.png",
      description: "Commercial and marine plywood, MDF, block boards, and particle boards of superior quality. Excellent load-bearing strength and resistance to wrapping for wardrobes and cabinet framing.",
      features: ["Water resistant", "Highly durable", "Termite proof"]
    },
    {
      id: 7,
      name: "Hardware & Fittings",
      badge: "Premium",
      image: "/hardware_fittings.png",
      description: "Premium door locks, elegant handles, robust hinges, smooth drawer channels, tower bolts, and cupboard fittings. Designed to ensure long-term durability and modern aesthetics.",
      features: ["Brass & Matte finish", "Smooth movement", "Robust security"]
    },
    {
      id: 8,
      name: "Glass & Mirrors",
      badge: "New",
      image: "/glass_mirrors.png",
      description: "Plain and toughened glass in custom sizes, premium mirrors for bathrooms, bedrooms, and commercial shops. Glass shelving and partitions with complete edge finishing and cutting support.",
      features: ["Precision cutting", "Custom sizing", "Edge finish support"]
    }
  ];

  return (
    <div className="products-page animate-fade-in-up">
      <div className="products-banner">
        <div className="container products-banner-container">
          <h1 className="products-title">Premium Product Range</h1>
          <p className="products-subtitle">Browse our complete collection of premium interior materials and furniture.</p>
        </div>
      </div>

      <section className="section products-section">
        <div className="container">
          {/* Products Grid Starts Immediately */}
          <div className="products-grid">
            {productsList.map((product) => (
              <div 
                className="product-card" 
                key={product.id}
                onClick={() => setSelectedProduct(product)}
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
                    {product.description.length > 110 
                      ? product.description.substring(0, 110) + "..." 
                      : product.description}
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
                        setSelectedProduct(product);
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

      {/* Modal Popup for Details */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}
