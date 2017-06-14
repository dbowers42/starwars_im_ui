import PropTypes from 'prop-types'
import React from 'react'
import './messenger.css'

export default class Messenger extends React.Component {
    static propTypes =
    {
      sendMessage: PropTypes.func.isRequired
    }


    render() {
        return (
            <div className="messenger">
                <textarea id="txtMessenger" cols="100" rows="1" />
                <img src="/images/send.png" alt="send" className="send" width="32" height="32" onClick={this.props.sendMessage} />
            </div>
        )
    }
}