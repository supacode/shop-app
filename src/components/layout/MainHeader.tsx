import React from 'react';
import { Link } from 'react-router-dom';

import MainNav from './MainNav';

const MainHeader: React.FC = () => (
  <header className="main-header">
    <div className="row">
      <div className="main-header__logo">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
      </div>
      <MainNav />
    </div>
  </header>
);

export default MainHeader;
