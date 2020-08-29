import React from 'react';
import './App.css';
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
      // dots: 'grey',
      nextLevel: false,
      showInfo: false,
      currentNumber: null,
      serialNumber: null,
      currentBird: {},
      birdsDataRandom: [],
      showCurrentBird: '',
      hiddenCurrentBird: '',
      chooseBird: '',
    };
  }

  nextCategory = () => {
    if(this.state.nextLevel === true) {
      if(this.state.category < 5) {
        this.setState ({
          nextLevel: false,
          category: this.state.category + 1
        }, () => this.newRound(this.state.category));
      }
    }
  }

  componentWillMount = () => {
    this.newRound(0);
    console.log(this.state.nextLevel);
  };

  newRound = (category) => {
    let birdsDataRandom = this.getShuffle(birdsData[category]);
    let currentNumber = this.randomNumber(0, 5);
    let currentBird = birdsDataRandom[currentNumber];
    let showCurrentBird = currentBird.name;
    console.log(showCurrentBird);
    let hiddenCurrentBird = currentBird.name.replace(currentBird.name, '*****');
    this.setState ({
      birdsDataRandom: birdsDataRandom,
      currentNumber: currentNumber,
      currentBird: currentBird,
      showCurrentBird: showCurrentBird,
      hiddenCurrentBird: hiddenCurrentBird,
      counter: 5
    });
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
      console.log('right');
      this.setState ({
        score: this.state.score + this.state.counter,
        // dots: 'green',
        counter: 0,
        nextLevel: true
      });
    } else {
      this.setState ({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
      < Header score={this.state.score} category={this.state.category}/>
      < Question currentBird={this.state.currentBird} currentNumber={this.state.currentNumber} serialNumber={this.state.serialNumber} showCurrentBird={this.state.showCurrentBird} hiddenCurrentBird={this.state.hiddenCurrentBird} nextLevel={this.state.nextLevel}/>
      < Answer birdsDataRandom={this.state.birdsDataRandom} showInfo={this.state.showInfo} 
      // currentNumber={this.state.currentNumber} 
      serialNumber={this.state.serialNumber} chooseAnswer={this.chooseAnswer}/>
      < Footer nextCategory={this.nextCategory} nextLevel={this.state.nextLevel}/>
    </div>
    );
  }
}

export default App;
