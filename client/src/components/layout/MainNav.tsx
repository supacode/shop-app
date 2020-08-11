import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CartContext from '../../context/cart/cartContext';

const MainNav: React.FC = () => {
  const { products } = useContext(CartContext);

  return (
    <nav className="main-header__nav">
      <ul>
        <li>
          <NavLink to="/login" activeClassName="main-header__nav--active">
            <svg width="33px" height="33px" viewBox="0 0 512 512">
              <title>My Account</title>
              <path
                d="M344,144c-3.92,52.87-44,96-88,96s-84.15-43.12-88-96c-4-55,35-96,88-96S348,90,344,144Z"
                style={{
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px',
                }}
              />
              <path
                d="M256,304c-87,0-175.3,48-191.64,138.6C62.39,453.52,68.57,464,80,464H432c11.44,0,17.62-10.48,15.65-21.4C431.3,352,343,304,256,304Z"
                style={{
                  fill: 'none',
                  strokeMiterlimit: 10,
                  strokeWidth: '32px',
                }}
              />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="main-header__nav--cart-icon"
            activeClassName="main-header__nav--active"
          >
            {products.length > 0 && (
              <span className="main-header__nav--cart-count">
                {products.reduce((inc, { count }) => count + inc, 0)}
              </span>
            )}
            <svg width="33px" height="33px" viewBox="0 0 512 512">
              <title>Cart</title>
              <circle
                cx="176"
                cy="416"
                r="16"
                style={{
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px',
                }}
              />
              <circle
                cx="400"
                cy="416"
                r="16"
                style={{
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px',
                }}
              />
              <polyline
                points="48 80 112 80 160 352 416 352"
                style={{
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px',
                }}
              />
              <path
                d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128"
                style={{
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px',
                }}
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
