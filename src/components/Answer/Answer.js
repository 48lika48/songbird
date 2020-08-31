import React from 'react';
import './Answer.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Answer extends React.Component {

  render() {
    let birdsDataRandom = this.props.birdsDataRandom;
    let chooseAnswer = this.props.chooseAnswer;
    let serialNumber = this.props.serialNumber;
    let roundClear = this.props.roundClear;
    let showInfo = this.props.showInfo;
    let info;
    if(showInfo === true) {
      info = 
      <div className='information'>
        <div className='information-wrapper'>
          <div className='answer-picture'>
            <img className='answer-bird' src={birdsDataRandom[serialNumber].image} alt='bird'/>
          </div>
          <div className='answer-voice'>
            <div className='answer-name'>{birdsDataRandom[serialNumber].name}</div>
            <div className='latin-name'>{birdsDataRandom[serialNumber].species}</div>
            <AudioPlayer
              src={birdsDataRandom[serialNumber].audio}
              customAdditionalControls={[]}
              showJumpControls={false}
              autoPlay={false}
              autoPlayAfterSrcChange={false}
              style={{backgroundColor: '#303030', boxShadow: 'none'}}
            />
          </div>
        </div>
        <div className='answer-about'>{birdsDataRandom[serialNumber].description}</div>
      </div>
    } else {
      info =
      <div className='information'>
        <div className='lets-start'>Послушайте плеер и выберите птицу из списка.</div>
      </div>
    }
    return (
      <div className='answer'>
        <ul className='choice'>
          <li value={0} className='example' onClick={chooseAnswer}><span className={`${roundClear} ? 'red-dot' : 'grey-dot'`} >●</span>{birdsDataRandom[0].name}</li>
          <li value={1} className='example' onClick={chooseAnswer}><span className={`${roundClear} ? 'red-dot' : 'grey-dot'`} >●</span>{birdsDataRandom[1].name}</li>
          <li value={2} className='example' onClick={chooseAnswer}><span className={`${roundClear} ? 'red-dot' : 'grey-dot'`} >●</span>{birdsDataRandom[2].name}</li>
          <li value={3} className='example' onClick={chooseAnswer}><span className={`${roundClear} ? 'red-dot' : 'grey-dot'`} >●</span>{birdsDataRandom[3].name}</li>
          <li value={4} className='example' onClick={chooseAnswer}><span className={`${roundClear} ? 'red-dot' : 'grey-dot'`} >●</span>{birdsDataRandom[4].name}</li>
          <li value={5} className='example' onClick={chooseAnswer}><span className={`${roundClear} ? 'red-dot' : 'grey-dot'`} >●</span>{birdsDataRandom[5].name}</li>
        </ul>
        {info}
      </div>
    );
  }
}

export default Answer;
