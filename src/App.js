import React from 'react';
import './App.css';
import yes from './assets/yes.mp3';
import no from './assets/no.mp3';
import chick from './assets/chick.JPG';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Answer from './components/Answer/Answer';
import Footer from './components/Footer/Footer';
import birdsData from './constants/birdsData.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      counter: 5,
      category: 0,
      nextLevel: false,
      roundClear: false,
      showInfo: false,
      currentNumber: null,
      serialNumber: null,
      currentBird: {},
      birdsDataRandom: [],
      showCurrentBird: '',
      hiddenCurrentBird: '',
      chooseBird: '',
      gameEnd: false
    };
  }

  nextCategory = () => {
    if(this.state.nextLevel === true) {
      if(this.state.category < 5) {
        this.setState ({
          showInfo: false,
          nextLevel: false,
          roundClear: true,
          category: this.state.category + 1
        }, () => this.newRound(this.state.category));
      } else {
        this.setState ({
          gameEnd: true
        });
      }
    }
  }

  componentWillMount = () => {
    this.newRound(0);
  };

  newRound = (category) => {
    let birdsDataRandom = this.getShuffle(birdsData[category]);
    let currentNumber = this.randomNumber(0, 5);
    let currentBird = birdsDataRandom[currentNumber];
    let showCurrentBird = currentBird.name;
    let hiddenCurrentBird = currentBird.name.replace(currentBird.name, '*****');
    this.setState ({
      roundClear: false,
      birdsDataRandom: birdsDataRandom,
      currentNumber: currentNumber,
      currentBird: currentBird,
      showCurrentBird: showCurrentBird,
      hiddenCurrentBird: hiddenCurrentBird,
      counter: 5
    });
    console.log(showCurrentBird);
  }

  getShuffle = (arr) => {
    let m = arr.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    return arr;
  };

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  playAudio = (audioSrc) => {
    let audio = null;
    try {
      if (audio && audio.played) {
        audio.pause();
      }
      audio = new Audio(audioSrc);
      audio.play().catch((e) => console.log(e.message));
    } catch (e) {
      console.log(e.message);
    }
  }

  chooseAnswer = (event) => {
    let entireText = event.target.innerText;
    let serialNumber = event.target.value;
    let chooseBird = entireText.substr(1);
    this.setState ({
      showInfo: true,
      chooseBird: chooseBird,
      serialNumber: serialNumber
    });
    if(this.state.currentNumber === serialNumber && this.state.counter > -1) {
      event.target.firstChild.className = 'green-dot';
      this.playAudio(yes);
      this.setState ({
        score: this.state.score + this.state.counter,
        counter: 0,
        nextLevel: true
      });
      
    } else if(this.state.currentNumber === serialNumber) {
      event.target.firstChild.className = 'green-dot';
      this.playAudio(yes);
      this.setState ({
        counter: 0,
        nextLevel: true
      });
    } else {
      event.target.firstChild.className = 'red-dot';
      this.playAudio(no);
      this.setState ({
        counter: this.state.counter - 1
      });
    }
  }

  gameStart = () => {
    this.setState ({
      score: 0,
      counter: 5,
      category: 0,
      nextLevel: false,
      showInfo: false,
      currentNumber: null,
      serialNumber: null,
      currentBird: {},
      birdsDataRandom: [],
      showCurrentBird: '',
      hiddenCurrentBird: '',
      chooseBird: '',
      gameEnd: false
    });
    this.newRound(0);
  }

  render() {
    let score = this.state.score;
    let gameEnd = this.state.gameEnd;
    let notification;
    if(gameEnd === false) {
      notification =
      <div>
        < Question currentBird={this.state.currentBird} currentNumber={this.state.currentNumber} serialNumber={this.state.serialNumber}   showCurrentBird={this.state.showCurrentBird} hiddenCurrentBird={this.state.hiddenCurrentBird} nextLevel={this.state.nextLevel}/>
        < Answer birdsDataRandom={this.state.birdsDataRandom} showInfo={this.state.showInfo} 
        roundClear={this.state.roundClear}
        serialNumber={this.state.serialNumber} chooseAnswer={this.chooseAnswer}/>
        < Footer nextCategory={this.nextCategory} nextLevel={this.state.nextLevel}/>
      </div>
    } else if(gameEnd === true && score < 30) {
      notification =
      <div className="notFull">
        <h2>Поздравляем!</h2>
        <p>Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
        <div onClick={this.gameStart}>Попробовать ещё раз!</div>
      </div>
    } else {
      notification =
      <div className="full">
        <img src={chick} alt='чык-чырык'/>
        <h2>Начык-чырыкано!</h2>
      </div>
    }

    return (
      <div className="wrapper">
      < Header score={this.state.score} category={this.state.category}/>
      {notification}
    </div>
    );
  }
}

export default App;
