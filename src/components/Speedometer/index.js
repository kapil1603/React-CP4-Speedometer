// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  increaseSpeed = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  decreaseSpeed = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="Container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image1"
          />{' '}
        </div>
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="para">Min limit is 0mph, Max Limit is 200mph</p>

        <div>
          <button
            type="button"
            className="button blue-color"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button white-color"
            onClick={this.decreaseSpeed}
          >
            Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
