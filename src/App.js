import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Answer from './components/Answer/Answer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="wrapper">
      < Header />
      < Question />
      < Answer />
      < Footer />
    </div>
  );
}

export default App;
