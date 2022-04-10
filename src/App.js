import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import LotteryContainer from './Component/LotteryContainer';


export class App extends Component {
  render() {
    return <div className="app">
      <h1> Example-1 This is Lottery Project for practicing state patterens</h1>
      <LotteryContainer heading="Bangalore Lottery" maxNumberInBalls={40} maxBalls={6}/>
      <LotteryContainer heading="khajuraho Lottery" maxNumberInBalls={10} maxBalls={4}/>
    </div>;
  }
}

export default App;

