// Write your code here
import Component from 'react'
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
        <h1 className="heading">
          Speed is <span className="count">{count}</span> mph
        </h1>
        <p className="para">Min limit is 0mph, Max Limit is 200mph</p>

        <div>
          <button type="button" className="button" onClick={this.increaseSpeed}>
            Accelerate
          </button>
          <button type="button" className="button" onClick={this.decreaseSpeed}>
            Accelerate
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
