// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameShowHide = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameShowHide = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName} = this.state
    const firstNameClass = firstName ? 'show-hide-name-container' : null
    const fistNameText = firstName ? 'Joe' : null

    const {lastName} = this.state
    const lastNameClass = lastName ? 'show-hide-name-container' : null
    const lastNameText = lastName ? 'Jonas' : null

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.firstNameShowHide}
            >
              Show/Hide Firstname
            </button>
            <div className={`${firstNameClass}`}>
              <p>{fistNameText}</p>
            </div>
          </div>
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.lastNameShowHide}
            >
              Show/Hide Lastname
            </button>
            <div className={`${lastNameClass}`}>
              <p>{lastNameText}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
