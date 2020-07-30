import React from 'react';
import './Answer.css';
// import logo from '../assets/logo.svg';

class Answer extends React.Component {
  render() {
    return (
      <div className='answer'>
        <div className='choice'></div>
        <div className='information'></div>
      </div>
    );
  }
}

export default Answer;
