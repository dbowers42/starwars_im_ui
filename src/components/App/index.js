import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Chat from '../Chat'
import SignIn from '../SignIn'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  buildUser({screenName, online, avatar}) {
    return (
      <div>{screenName}</div>
    )
  }

  fetchUsers() {
    fetch('http://localhost:8080/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({users: data })
      }).catch((err) => console.log(err))
  }

  componentDidMount(props) {
    var self = this
    this.fetchUsers()

    let socket = new WebSocket('ws://localhost:8080/chat')
    this.setState({socket: socket})

    socket.addEventListener('open', (event) => {
      socket.send('users');
    });



    socket.addEventListener('message', (event) => {
      let data = JSON.parse(event.data)

      switch(data.action){
        case('login'):
          console.log('login')
          socket.send(JSON.stringify({action: 'getUsers'}))
          break
        case('users'):
          console.log('update status')
          self.setState({users: data.payload})
          break
        case 'message':
          console.log('got message')
          break;
        default:
          console.log('unrecognized message', event.data)

      }
    })
  }

  buildChat(props) {
    let self = this
    return (
      <Chat users={this.state.users} currentUser={props.match.params.screenName}
            messages={[]} sendMessage={this.sendMessage.bind(self)}/>
    )
  }

  buildSignin(props) {
    return (<SignIn users={this.state.users} />)
  }

  sendMessage(event) {
    let payload = {action: 'message', content: 'hello', screen_name: this.state.screenName}
    console.log('payload', payload)
    this.state.socket.send(JSON.stringify(payload))
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={this.buildSignin.bind(this)} />
        <Route path="/chat/:screenName" render={this.buildChat.bind(this)}/>
      </div>
    )
  }
}

export default App;
