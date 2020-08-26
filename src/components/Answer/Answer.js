import React from 'react';
import './Answer.css';
import birdsData from '../../constants/birdsData.js';

class Answer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      category: 0,
      showInfo: false
    };
  }

  render() {
    let birdsDataRandom = this.props.birdsDataRandom;
    let changeStateShowInfo = this.props.changeStateShowInfo;
    let info;
    console.log(this.props);
    if(this.state.showInfo === true) {
      info = 
      <div className='information'>
        <div className='information-wrapper'>
          <div className='answer-picture'>
            <img className='answer-bird' src={birdsData[this.state.category][0].image} alt='bird'/>
          </div>
          <div className='answer-voice'>
            <div className='answer-name'>{birdsData[this.state.category][0].name}</div>
            <div className='latin-name'>{birdsData[this.state.category][0].species}</div>
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
        <div className='answer-about'>{birdsData[this.state.category][0].description}</div>
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
        <div className='example' onClick={changeStateShowInfo}><span className='dots'>●</span>{1}</div>
          {/* <div className='example' onClick={changeStateShowInfo}><span className='dots'>●</span>{birdsDataRandom[category][0].name}</div>
          <div className='example' onClick={changeStateShowInfo}><span className='dots'>●</span>{birdsDataRandom[category][1].name}</div>
          <div className='example' onClick={changeStateShowInfo}><span className='dots'>●</span>{birdsDataRandom[category][2].name}</div>
          <div className='example' onClick={changeStateShowInfo}><span className='dots'>●</span>{birdsDataRandom[category][3].name}</div>
          <div className='example' onClick={changeStateShowInfo}><span className='dots'>●</span>{birdsDataRandom[category][4].name}</div>
          <div className='example' onClick={changeStateShowInfo}><span className='dots'>●</span>{birdsDataRandom[category][5].name}</div> */}
        </div>
        {info}
      </div>
    );
  }
}

export default Answer;
