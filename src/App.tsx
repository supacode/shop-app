import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/layout/Header';
import Newsletter from './components/layout/Newsletter';
import Footer from './components/layout/Footer';
import './assets/scss/style.scss';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
