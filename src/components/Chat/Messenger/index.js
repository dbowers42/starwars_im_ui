import React from 'react'
import './messenger.css'

export default class Messenger extends React.Component {
    render() {
        return (
            <div className="messenger">
                <textarea id="txtMessenger" cols="100" rows="1" />
                <img src="/images/send.png" alt="send" className="send" width="32" height="32" />
            </div>
        )
    }
}