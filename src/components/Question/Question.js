import React from 'react';
import './Question.css';
import bird from '../../assets/bird.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Question extends React.Component {
  
  render() {
    let currentBird = this.props.currentBird;
    let serialNumber = this.props.serialNumber;
    let currentNumber = this.props.currentNumber;
    let showCurrentBird = this.props.showCurrentBird;
    let hiddenCurrentBird = this.props.hiddenCurrentBird;
    let showImage;
    let showName;
    if(currentNumber === serialNumber) {
      showImage =
      <img className='question-bird' src={currentBird.image} alt='bird'/>
      showName = 
      <div className='question-name'>{showCurrentBird}</div>
    } else {
      showImage =
      <img className='question-bird' src={bird} alt='bird'/>
      showName = 
      <div className='question-name'>{hiddenCurrentBird}</div>
    }
    return (
      <div className='question'>
        <div className='question-picture'>
          {showImage}
        </div>
        <div className='question-voice'>
          {showName}
          <AudioPlayer
            src={currentBird.audio}
            customAdditionalControls={[]}
            showJumpControls={false}
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            style={{backgroundColor: '#303030', boxShadow: 'none'}}
          />
          {/* <div className='question-controls'>
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
          </div> */}
        </div>
      </div>
    );
  }
}

export default Question;
