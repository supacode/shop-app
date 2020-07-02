import React from 'react';

import Header from './components/layout/Header';
import Newsletter from './components/layout/Newsletter';
import Footer from './components/layout/Footer';
import './assets/scss/style.scss';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
