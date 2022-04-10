import React, { Component } from "react";
import LotteryBalls from "./LotteryBalls";
import "./LotteryContainer.css"


export class LotteryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayBalls: Array.from(Array(this.props.maxBalls).fill("ball")),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("button clicked");
    const copyArrayBalls = this.state.arrayBalls.map((ball) => ball);
    for (let i = 0; i < this.props.maxBalls; i++) {
      const random = Math.floor(Math.random() * this.props.maxNumberInBalls);
      copyArrayBalls[i] = random;
    }
    this.setState({
        arrayBalls:copyArrayBalls
    })
  }
  render() {
    const { maxNumberInBalls, maxBalls } = this.props;
    const FinalLotteryBalls = this.state.arrayBalls.map((ball) => (
      <span className="LotteryBalls-ball">{ball}</span>
    ));
    return (
      <div className="LotteryContainer">
        <h1>{this.props.heading}</h1>
        <LotteryBalls ball={FinalLotteryBalls} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default LotteryContainer;

// let a=[1,2,3,4];
// for(let i=0;i<a.length;i++){
//     let random=Math.floor(Math.random()*20)
//     a[i]=random;
// }
