import React from 'react';

const CartPage: React.FC = () => {
  return (
    <div className="cart">
      <div className="row">
        <div className="cart-item">
          <div className="cart-item__product">
            <img src="images/products/product_3.png" alt="Product" />
            <a href="/product.html" className="cart-item__product--link">
              <h3>Lorem, ipsum dolor.</h3>
              <p>#2321356</p>
            </a>
          </div>
          <div className="cart-item__quantity">
            <button type="button" className="cart-item__quantity--reduce">
              -
            </button>
            <input
              className="cart-item__quantity--count"
              type="text"
              value="1"
            />
            <button type="button" className="cart-item__quantity--add">
              +
            </button>
          </div>
          <div className="cart-item__price">$150</div>
          <button className="cart-item__remove">&times;</button>
        </div>

        <div className="cart__footer">
          <p className="cart__footer--to-home">
            <a href="index.html">
              <svg width="32" height="32" viewBox="0 0 512 512">
                <polyline
                  points="249.38 336 170 256 249.38 176"
                  style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px'
                  }}
                />
                <line
                  x1="181.03"
                  y1="256"
                  x2="342"
                  y2="256"
                  style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px'
                  }}
                />
                <path
                  d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
                  style={{
                    fill: 'none',
                    strokeMiterlimit: 10,
                    strokeWidth: '32px'
                  }}
                />
              </svg>
              <span> Continue shopping</span>
            </a>
          </p>
          <p>
            <button className="cart__footer--checkout-btn">
              <svg width="32" height="32" viewBox="0 0 512 512">
                <polyline
                  points="336 176 225.2 304 176 255.8"
                  style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px'
                  }}
                />
                <path
                  d="M463.1,112.37C373.68,96.33,336.71,84.45,256,48,175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z"
                  style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px'
                  }}
                />
              </svg>

              <span>Checkout</span>
            </button>
          </p>
          <p className="cart__footer--subtotal">
            Subtotal: <span>$251,000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
