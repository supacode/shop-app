import React from 'react';

const Hero: React.FC = () => (
  <div className="hero">
    <div className="hero__item">
      <div className="row">
        <div className="hero__item--content">
          <h2 className="hero__item--title">Up to 30% Off On New Arrivals</h2>
          <p className="hero__item--text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            veritatis fugit pariatur voluptatem vero incidunt aspernatur.
          </p>
          <a href="shop.html" className="hero__item--btn">
            Go to Store
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
