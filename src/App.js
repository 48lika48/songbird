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
      currentBird: {},
      birdsDataRandom: [],
      hiddenCurrentBird: ''
    };
  }

  nextCategory = () => {
    if(this.state.category < 5) {
      this.setState ({
        category: this.state.category + 1
      });
    }
  }

  componentDidMount = () => {
    this.newRound(0);
  };

  newRound = (category) => {
    let birdsDataRandom = this.getShuffle(birdsData[category]);
    let currentBird = birdsDataRandom[this.randomNumber(0, 5)];
    console.log(birdsDataRandom);
    console.log(birdsDataRandom[0].name);
    console.log(currentBird);
    let hiddenCurrentBird = currentBird.name.replace(currentBird.name, '*****');
    this.setState ({
      birdsDataRandom: birdsDataRandom,
      currentBird: currentBird,
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

  changeStateShowInfo = () => {
    this.setState((state) => ({
      showInfo: true
    }));
  };

  render() {
    return (
      <div className="wrapper">
      < Header score={this.state.score} category={this.state.category}/>
      < Question currentBird={this.state.currentBird} hiddenCurrentBird={this.state.hiddenCurrentBird}/>
      < Answer birdsDataRandom={this.state.birdsDataRandom} changeStateShowInfo={this.changeStateShowInfo}/>
      < Footer nextCategory={this.nextCategory}/>
    </div>
    );
  }
}

export default App;
