import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo classname='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        <div>SHOP</div>
      </Link>
      <Link className='option' to='/contact'>
        <div>CONTACT</div>
      </Link>
    </div>
  </div>
);

export default Header;
