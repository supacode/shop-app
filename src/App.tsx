import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Newsletter from './components/layout/Newsletter';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import LoginForm from './components/login/LoginPage';
import './assets/scss/style.scss';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        {/* Landing page */}
        <Route path="/" exact>
          <Hero />
          <Products />
          <Newsletter />
        </Route>

        {/* Login */}
        <Route path="/login" exact>
          <LoginForm />
        </Route>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
