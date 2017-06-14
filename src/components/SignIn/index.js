import PropTypes from 'prop-types'
import React from 'react'
import {withRouter} from "react-router-dom"

import './sign_in.css'

class SignIn extends React.Component {
  static propTypes = {
    users: PropTypes.array
  }

  static defaultProps = {
    users: []
  }

  login(user) {
    let request = new XMLHttpRequest()
    request.open('POST', 'http://localhost:8080/signin', true)
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let payload = {screenName: user}
    request.send(JSON.stringify(payload))
  }

  signInClick(event) {
    this.login(this.state.screenName)
    this.props.history.push(`/chat/${this.state.screenName}`)
    console.log(`Signing in as ${this.state.screenName}`)
  }

  screenNameChanged(event) {
    this.setState({screenName: event.target.value})
  }

  render() {
    return (
      <div className="sign-in">
        <div className="login">
          <div className="screen-name">Screen Name</div>
          <select onChange={this.screenNameChanged.bind(this)}>
            {
              this.props.users.map((user) => {
                return (
                  <option key={user.screenName} value={user.screenName}>{user.screenName}</option>
                )
              })
            }
          </select>
          <button className="sign-in-button" onClick={this.signInClick.bind(this)}>Sign In</button>
        </div>
      </div>
    )
  }
}
export default withRouter(SignIn);