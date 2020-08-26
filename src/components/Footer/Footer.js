import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    let nextCategory = this.props.nextCategory;
    return (
      <div className='footer'>
        <div className='level' onClick={nextCategory}>Next Level</div>
      </div>
    );
  }
}

export default Footer;
