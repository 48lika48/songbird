import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends React.Component {

  render() {
    let score = this.props.score;
    let category = this.props.category;
    return (
      <div className='header'>
        <div className='logo-score'>
          <img className='logo' src={logo} alt='logo'/>
          <div className='score'>Score: {score}</div>
        </div>
        <div className='category'>
          <span className={ category === 0 ? 'active' : null }>Разминка</span>
          <span className={ category === 1 ? 'active' : null }>Воробьиные</span>
          <span className={ category === 2 ? 'active' : null }>Лесные птицы</span>
          <span className={ category === 3 ? 'active' : null }>Певчие птицы</span>
          <span className={ category === 4 ? 'active' : null }>Хищные птицы</span>
          <span className={ category === 5 ? 'active' : null }>Морские птицы</span>
        </div>
      </div>
    );
  }
}

export default Header;
