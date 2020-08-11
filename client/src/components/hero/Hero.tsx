import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/shop" className="hero__item--btn">
            Go to Store
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
