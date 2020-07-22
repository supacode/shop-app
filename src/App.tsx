import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainHeader from './components/layout/MainHeader';
import Newsletter from './components/layout/Newsletter';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import RegisterPage from './components/auth/RegisterPage';
import LoginForm from './components/auth/LoginPage';
import ForgotPassword from './components/auth/ForgotPasswordPage';
import CartPage from './components/cartpage/CartPage';
import ProductPage from './components/products/ProductDetailPage';
import ShoPage from './components/shop/ShopPage';

import './assets/scss/style.scss';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
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
          <Route path="/products/:productId" exact>
            <ProductPage />
          </Route>

          {/* Shop Page */}
          <Route path="/shop" exact>
            <ShoPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
