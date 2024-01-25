// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prev => ({
      count: prev.count + Math.ceil(Math.random() * 100),
    }))
  }
  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div>
        <h1 className="head1">Count {count}</h1>
        <p className="para">Count is {displayText}</p>
        <button className="button" onClick={this.increment} type="button">
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
