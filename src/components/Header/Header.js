import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='logo-score'>
          <img className='logo' src={logo} alt='logo'/>
          <div className='score'>Score: 0</div>
        </div>
        <div className='category'>
          <span>Разминка</span>
          <span>Воробьиные</span>
          <span>Лесные птицы</span>
          <span>Певчие птицы</span>
          <span>Хищные птицы</span>
          <span>Морские птицы</span>
        </div>
      </div>
    );
  }
}

export default Header;
