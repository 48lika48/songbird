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
      showInfo: false,
      currentNumber: null,
      currentBird: {},
      birdsDataRandom: [],
      showCurrentBird: '',
      hiddenCurrentBird: '',
      chooseBird: '',
    };
  }

  nextCategory = () => {
    if(this.state.category < 5) {
      this.setState ({
        category: this.state.category + 1
      });
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
    console.log(birdsDataRandom);
    console.log(currentBird);
    console.log(showCurrentBird);
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

  showInfo = () => {
    this.setState ({
      showInfo: true
    });
  };

  chooseAnswer = (event) => {
    let entireText = event.target.innerText;
    let serialNumber = event.target.value;
    let chooseBird = entireText.substr(1);
    console.log(chooseBird);
    this.setState ({
      chooseBird: chooseBird,
      
    });
    console.log(this.state.currentNumber);
    console.log(serialNumber);
  }

  render() {
    return (
      <div className="wrapper">
      < Header score={this.state.score} category={this.state.category}/>
      < Question currentBird={this.state.currentBird} hiddenCurrentBird={this.state.hiddenCurrentBird}/>
      < Answer birdsDataRandom={this.state.birdsDataRandom} showInfo={this.showInfo} chooseAnswer={this.chooseAnswer}/>
      < Footer nextCategory={this.nextCategory}/>
    </div>
    );
  }
}

export default App;
