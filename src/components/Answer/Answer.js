import React from 'react';
import './Answer.css';
import bird from '../../assets/bird.jpg';

class Answer extends React.Component {
  render() {
    return (
      <div className='answer'>
        <div className='choice'>
          <div className='example'><span className='dots'>●</span>Name</div>
          <div className='example'><span className='dots'>●</span>Name</div>
          <div className='example'><span className='dots'>●</span>Name</div>
          <div className='example'><span className='dots'>●</span>Name</div>
          <div className='example'><span className='dots'>●</span>Name</div>
          <div className='example'><span className='dots'>●</span>Name</div>
        </div>
        <div className='information'>
          <div className='information-wrapper'>
            <div className='answer-picture'>
              <img className='answer-bird' src={bird} alt='bird'/>
            </div>
            <div className='answer-voice'>
              <div className='answer-name'>Name</div>
              <div className='latin-name'>Latin Name</div>
              <div className='answer-controls'>
                <div className='playback-button'>
                  <span className='triangle-button'>⯈</span>
                </div>
                <div className='answer-time-bar'>
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
          <div className='answer-about'>Ворон – крупная птица.</div>
        </div>
      </div>
    );
  }
}

export default Answer;
