import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>Header
        <img src={logo} alt='logo'/>
      </div>
    );
  }
}

export default Header;
