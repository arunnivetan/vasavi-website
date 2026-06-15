import React from 'react';
import { MapPin } from 'lucide-react';
import './FloatingDirections.css';

export default function FloatingDirections() {
  return (
    <a
      href="https://maps.app.goo.gl/bdt8VgCnaoGfdr927"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-directions"
      aria-label="Get Directions on Google Maps"
    >
      <MapPin size={26} />
      <span className="tooltip-text">Get Directions</span>
    </a>
  );
}
