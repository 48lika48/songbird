import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='footer'>
        <div className='level' onClick={this.props.nextCategory}>Next Level</div>
      </div>
    );
  }
}

export default Footer;
