import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    let nextCategory = this.props.nextCategory;
    let nextLevel = this.props.nextLevel;
    return (
      <div className='footer'>
        <div className={nextLevel === true ? 'green' : 'grey' } onClick={nextCategory}>Next Level</div>
      </div>
    );
  }
}

export default Footer;
