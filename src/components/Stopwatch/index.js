import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: '00', sec: '00', running: false}

  componentDidMount() {
    this.timer = setInterval(this.updateTimer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  updateTimer = () => {
    const {running} = this.state

    if (running) {
      this.setState(prevState => {
        let minutes = parseInt(prevState.min)
        let seconds = parseInt(prevState.sec)

        if (seconds < 59) {
          seconds += 1
        } else {
          seconds = 0
          minutes += 1
        }

        return {
          min: minutes < 10 ? `0${minutes}` : minutes,
          sec: seconds < 10 ? `0${seconds}` : seconds,
        }
      })
    }
  }

  startTime = () => {
    this.setState({running: true})
  }

  stopTime = () => {
    this.setState({running: false})
  }

  resetTime = () => {
    this.setState({running: false, min: '00', sec: '00'})
  }

  render() {
    const {sec, min} = this.state
    return (
      <div className="totalThing">
        <h1 className="headThing">StopWatch</h1>
        <div className="mainDiv">
          <div className="imgParaDiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>
            {min}:{sec}
          </h1>
          <div className="btnDiv">
            <button onClick={this.startTime} className="btn1" type="button">
              Start
            </button>
            <button onClick={this.stopTime} className="btn2" type="button">
              Stop
            </button>
            <button onClick={this.resetTime} className="btn3" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
