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
      hiddenCurrentBird: hiddenCurrentBird
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
    if(this.state.currentNumber === serialNumber) {
      console.log('right');
      this.setState ({
        nextLevel: true
      });
    } else {
 
    }
  }

  render() {
    return (
      <div className="wrapper">
      < Header score={this.state.score} category={this.state.category}/>
      < Question currentBird={this.state.currentBird} currentNumber={this.state.currentNumber} serialNumber={this.state.serialNumber} showCurrentBird={this.state.showCurrentBird} hiddenCurrentBird={this.state.hiddenCurrentBird}/>
      < Answer birdsDataRandom={this.state.birdsDataRandom} showInfo={this.state.showInfo} serialNumber={this.state.serialNumber} chooseAnswer={this.chooseAnswer}/>
      < Footer nextCategory={this.nextCategory}/>
    </div>
    );
  }
}

export default App;
