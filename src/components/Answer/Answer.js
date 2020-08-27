import React from 'react';
import './Answer.css';

class Answer extends React.Component {

  render() {
    let birdsDataRandom = this.props.birdsDataRandom;
    let chooseAnswer = this.props.chooseAnswer;
    let showInfo = this.props.showInfo;
    let info;
    if(showInfo === true) {
      info = 
      <div className='information'>
        <div className='information-wrapper'>
          <div className='answer-picture'>
            {/* <img className='answer-bird' src={birdsData[this.state.category][0].image} alt='bird'/> */}
          </div>
          <div className='answer-voice'>
            {/* <div className='answer-name'>{birdsData[this.state.category][0].name}</div> */}
            {/* <div className='latin-name'>{birdsData[this.state.category][0].species}</div> */}
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
        {/* <div className='answer-about'>{birdsData[this.state.category][0].description}</div> */}
      </div>
    } else {
      info =
      <div className='information'>
        <div className='lets-start'>Послушайте плеер и выберите название птицы, чей голос прозвучал...</div>
      </div>
    }
    return (
      <div className='answer'>
        <div className='choice'>
          <div value={0} className='example' onClick={chooseAnswer}><span className='dots'>●</span>{birdsDataRandom[0].name}</div>
          <div value={1} className='example' onClick={chooseAnswer}><span className='dots'>●</span>{birdsDataRandom[1].name}</div>
          <div value={2} className='example' onClick={chooseAnswer}><span className='dots'>●</span>{birdsDataRandom[2].name}</div>
          <div value={3} className='example' onClick={chooseAnswer}><span className='dots'>●</span>{birdsDataRandom[3].name}</div>
          <div value={4} className='example' onClick={chooseAnswer}><span className='dots'>●</span>{birdsDataRandom[4].name}</div>
          <div value={5} className='example' onClick={chooseAnswer}><span className='dots'>●</span>{birdsDataRandom[5].name}</div>
        </div>
        {info}
      </div>
    );
  }
}

export default Answer;
