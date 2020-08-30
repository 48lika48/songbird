import React from 'react';
import './Question.css';
import bird from '../../assets/bird.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import { getNodeText } from '@testing-library/react';

class Question extends React.Component {
  
  render() {
    let currentBird = this.props.currentBird;
    let serialNumber = this.props.serialNumber;
    let currentNumber = this.props.currentNumber;
    let showCurrentBird = this.props.showCurrentBird;
    let hiddenCurrentBird = this.props.hiddenCurrentBird;
    let nextLevel = this.props.nextLevel;
    let showImage;
    let showName;
    if(currentNumber === serialNumber || nextLevel === true) {
      showImage =
      <img className='question-bird' src={currentBird.image} alt='bird'/>
      showName = 
      <div className='question-name'>{showCurrentBird}</div>
    } else if (nextLevel === false){
      showImage =
      <img className='question-bird' src={bird} alt='bird'/>
      showName = 
      <div className='question-name'>{hiddenCurrentBird}</div>
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
        </div>
      </div>
    );
  }
}

export default Question;
