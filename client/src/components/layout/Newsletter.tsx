import React from 'react';

const Newsletter: React.FC = () => (
  <div className="newsletter">
    <div className="row">
      <div className="newsletter__content">
        <h2>
          <svg width="32" height="32" viewBox="0 0 512 512">
            <rect
              x="48"
              y="96"
              width="416"
              height="320"
              rx="40"
              ry="40"
              style={{
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px'
              }}
            />
            <polyline
              points="112 160 256 272 400 160"
              style={{
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px'
              }}
            />
          </svg>
          <span>Subscribe to our newsletter</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          excepturi odit!
        </p>
      </div>
      <form className="newsletter__form">
        <input
          type="email"
          name="email"
          className="newsletter__form--input newsletter__form--email"
          placeholder="Enter your E-mail"
        />
        <input
          type="submit"
          className="newsletter__form--input newsletter__form--submit"
          value="Subscribe"
        />
      </form>
    </div>
  </div>
);
export default Newsletter;
