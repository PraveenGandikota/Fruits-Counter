// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }
  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }
  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }
  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="mini-container">
          <h1 className="head">
            Bob ate <span className="spaaaa">{mango}</span> mangoes{' '}
            <span className="spaaaa">{banana}</span> bananas
          </h1>
          <div className="gandi">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
