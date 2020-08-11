import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Context
import ProductState from './context/product/ProductState';
import CartState from './context/cart/CartState';

// Components
import MainHeader from './components/layout/MainHeader';
import Newsletter from './components/layout/Newsletter';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import Products from './components/products/ProductHome';
import RegisterPage from './components/auth/RegisterPage';
import LoginForm from './components/auth/LoginPage';
import ForgotPassword from './components/auth/ForgotPasswordPage';
import CartPage from './components/cartpage/CartPage';
import ProductPage from './components/products/ProductDetailPage';
import ShopPage from './components/shop/ShopPage';

import './assets/scss/style.scss';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductState>
          <CartState>
            <MainHeader />

            <Switch>
              {/* Landing page */}
              <Route path="/" exact>
                <Hero />
                <Products />
                <Newsletter />
              </Route>

              {/* Create an account */}
              <Route path="/register" exact>
                <RegisterPage />
              </Route>

              {/* Login */}
              <Route path="/login" exact>
                <LoginForm />
              </Route>

              {/* Forgot password */}
              <Route path="/forgot-password" exact>
                <ForgotPassword />
              </Route>

              {/* Cart Page */}
              <Route path="/cart" exact>
                <CartPage />
              </Route>

              {/* Product Page */}
              <Route path="/products/:slug" exact>
                <ProductPage />
              </Route>

              {/* Shop Page */}
              <Route path="/shop" exact>
                <ShopPage />
              </Route>
            </Switch>

            <Footer />
          </CartState>
        </ProductState>
      </BrowserRouter>
    </div>
  );
};

export default App;
