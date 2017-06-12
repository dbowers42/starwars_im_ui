import PropTypes from 'prop-types'
import React from 'react'
import Users from './Users'
import Messages from './Messages'
import Messenger from "./Messenger"

import './chat.css'

export default class Chat extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        messages: PropTypes.array
    }

    static defaultProps = {
        users: [],
        messages: []
    }

    render() {
        return (
            <div className="chat">
                <Users users={this.props.users} />
                <div className="conversation">
                    <Messages messages={this.props.messages}></Messages>
                    <Messenger />
                </div>
            </div>
        )
    }
}