import React from 'react';
import './Question.css';
import bird from '../../assets/bird.jpg';
import birdsData from '../../constants/birdsData.js';

class Question extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      category: 0
    };
  }

  render() {
    return (
      <div className='question'>
        <div className='question-picture'>
          <img className='question-bird' src={bird} alt='bird'/>
        </div>
        <div className='question-voice'>
          <div className='question-name'>{birdsData[this.state.category][0].name}</div>
          <div className='question-controls'>
            <div className='playback-button'>
              <span className='triangle-button'>⯈</span>
            </div>
            <div className='question-time-bar'>
              <div className='time-bar-bar'></div>
              <div className='time-bar-circle'></div>
              <div className='time-bar-info'>
                <div className='start'>00:00</div>
                <div className='finish'>00:48</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
