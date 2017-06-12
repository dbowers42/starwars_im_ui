import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message/index'
import './messages.css'

export default class Messages extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    }

    static defaultProps = {
        messages: []
    }

    render() {
        console.log('messages', this.props.messages)
        return (
            <div className="messages">
                {this.props.messages.map((message) => <Message key={message.key} message={message}/>)}
            </div>
        )
    }
}