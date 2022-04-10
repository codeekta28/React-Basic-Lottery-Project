import React, { Component } from 'react'
import "./LotteryBalls.css"

export class LotteryBalls extends Component {
  render() {
      const{ball}=this.props
    return (
      <div className='LotteryBalls'>
          {ball }

      </div>
    )
  }
}

export default LotteryBalls