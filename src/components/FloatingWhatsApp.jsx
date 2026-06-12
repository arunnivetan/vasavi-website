import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919003848037"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="tooltip-text">Chat with us</span>
    </a>
  );
}
