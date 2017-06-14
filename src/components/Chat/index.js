import PropTypes from 'prop-types'
import React from 'react'
import Users from './Users'
import Messages from './Messages'
import Messenger from "./Messenger"

import './chat.css'

export default class Chat extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        messages: PropTypes.array,
        currentUser: PropTypes.string,
        sendMessage: PropTypes.func.isRequired
    }

    static defaultProps = {
        users: [],
        messages: []
    }

    render() {
        console.log('chat current user', this.props.currentUser)
        return (
            <div className="chat">
                <Users users={this.props.users} currentUser={this.props.currentUser} />
                <div className="conversation">
                    <Messages messages={this.props.messages}></Messages>
                    <Messenger sendMessage={this.props.sendMessage} />
                </div>
            </div>
        )
    }
}