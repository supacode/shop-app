import React from 'react';

import Header from './components/layout/Header';
import Newsletter from './components/layout/Newsletter';
import './assets/scss/style.scss';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Newsletter />
    </div>
  );
};

export default App;
