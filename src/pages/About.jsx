import React, { useState, useEffect } from 'react';
import { Check, Calendar, Users, Award, Shield } from 'lucide-react';
import './About.css';

// Animated Counter hook/component
function Counter({ endValue, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // Extract number from endValue (e.g., "5000" from "5000+")
    const parsedEnd = parseInt(endValue.toString().replace(/[^0-9]/g, ''), 10);
    if (isNaN(parsedEnd)) return;

    const totalSteps = 60;
    const stepTime = duration / totalSteps;
    const increment = parsedEnd / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= parsedEnd) {
        clearInterval(timer);
        setCount(parsedEnd);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  // Format with comma
  const formattedCount = count.toLocaleString();
  return <span>{formattedCount}{suffix}</span>;
}

export default function About() {
  const timelineEvents = [
    {
      year: "1997",
      title: "Established Roots",
      desc: "Founded Sri Vasavi Plywood & Hardware in Lalgudi, Trichy, starting as a local supplier of quality timber and basic plywood boards."
    },
    {
      year: "2005",
      title: "Expanded Product Range",
      desc: "Added hardware, PVC doors, modular kitchen accessories, and decorative laminates to cater to growing modern home trends."
    },
    {
      year: "2010",
      title: "Introduced Installation Services",
      desc: "Launched professional interior installation and custom design services, helping clients from selection to finish."
    },
    {
      year: "2015",
      title: "Recognized for Excellence",
      desc: "Built a loyal customer base with a solid reputation for reliability, timely supplies, and authentic branded distributions."
    },
    {
      year: "2020",
      title: "Digital Presence & Smart Solutions",
      desc: "Launched social media, online support, and digital initiatives for easier customer communication, consultation, and estimates."
    }
  ];

  const stats = [
    { value: "5000", suffix: "+", label: "Customers Served", icon: <Users size={24} /> },
    { value: "300", suffix: "+", label: "Products Cataloged", icon: <Award size={24} /> },
    { value: "28", suffix: "+", label: "Years of Trust", icon: <Calendar size={24} /> },
    { value: "100", suffix: "%", label: "Quality Assurance", icon: <Shield size={24} /> }
  ];

  return (
    <div className="about-page animate-fade-in-up">
      {/* About Header Banner */}
      <div className="about-banner">
        <div className="container about-banner-container">
          <span className="badge-years">28+ Years of Service</span>
          <h1 className="about-title">Our Timeline & Journey</h1>
          <p className="about-subtitle">Revisiting 28+ years of trusted plywood distribution and premium woodcraft solutions in Trichy.</p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div className="stat-card" key={idx}>
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-number">
                  <Counter endValue={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <div className="container timeline-container">
          <div className="section-header">
            <h2>The Sri Vasavi Plywood &amp; Hardware Journey</h2>
            <p>Tracing our legacy of quality, consistency, and customer service since 1997.</p>
          </div>

          <div className="timeline-list">
            {timelineEvents.map((event, idx) => (
              <div className="timeline-card" key={idx}>
                {/* Year Circle (Left) */}
                <div className="timeline-year-circle">
                  <span>{event.year}</span>
                </div>

                {/* Content Area (Middle) */}
                <div className="timeline-card-content">
                  <span className="timeline-card-title">{event.title}</span>
                  <span className="timeline-card-divider">&mdash;</span>
                  <p className="timeline-card-desc">{event.desc}</p>
                </div>

                {/* Checkmark (Right) */}
                <div className="timeline-check-circle">
                  <Check size={18} strokeWidth={2.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
