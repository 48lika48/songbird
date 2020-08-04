import React from 'react';
import './Question.css';
import bird from '../../assets/bird.jpg';

class Question extends React.Component {
  render() {
    return (
      <div className='question'>
        <div className='question-picture'>
          <img className='question-bird' src={bird} alt='bird'/>
        </div>
        <div className='question-voice'>
          <div className='question-name'>Name</div>
          <div className='question-sound'>Sound</div>
        </div>
      </div>
    );
  }
}

export default Question;
