import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to The Canvas Club</h1>
        <p>Your one-stop shop for all your fashion needs!</p>
        <button>Shop Now</button>
      </header>
      <section className="features-section">
        <div className="feature">
          <h2>Latest Trends</h2>
          <p>Stay updated with the latest fashion trends.</p>
        </div>
        <div className="feature">
          <h2>High Quality</h2>
          <p>Only the best materials for our products.</p>
        </div>
        <div className="feature">
          <h2>Affordable Prices</h2>
          <p>Get the best deals and discounts.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
