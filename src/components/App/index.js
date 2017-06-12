import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import FakeApi from '../../FakeApi'
import Chat from '../Chat'
import SignIn from '../SignIn'

import './App.css'

class App extends Component {
    buildUser({screenName, online, avatar}) {
        return (
            <div>{screenName}</div>
        )
    }

    users(context) {
        let users = FakeApi.users(context)

        return users;
    }

    buildChat(props) {
        return (
            <Chat users={this.users('chat')} conversationId={props.match.params.conversationId} messages={FakeApi.messages('chat')} />
        )
    }


    render() {
        return (
            <div>
                <Route exact path="/" component={SignIn}/>
                <Route path="/chat" render={this.buildChat.bind(this)} />
            </div>
        )
    }
}

export default App;
