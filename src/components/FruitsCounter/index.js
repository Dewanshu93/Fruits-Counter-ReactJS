// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state={mangoCount:0,bananaCount:0}
  increaseMango=()=>{
    this.setState((prevState)=>{
      return ({mangoCount:prevState.mangoCount+1})
    })
  }
  increaseBanana=()=>{
    this.setState((prevState)=>{
      return ({bananaCount:prevState.bananaCount+1})
    })
  }
  render() {
    const {mangoCount,bananaCount}=this.state
    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <h1 className="head1">
            Bob ate <span className="spanEl">{mangoCount} </span>mangoes{' '}
            <span className="spanEl">{bananaCount} </span>bananas
          </h1>
          <div className="fruitContainer">
            <div className="Mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img1"
                alt="mango"
              />
              <button className="btn1" onClick={this.increaseMango}>Eat Mangoes</button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img1"
                alt="banana"
              />
              <button className="btn1" onClick={this.increaseBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
