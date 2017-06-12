import React from 'react'
import './message.css'


export default class Message extends React.Component {
    render() {
        console.log('message', this.props)

        return (
            <div className="message">
                <div className="sidebar">
                    <img className="avatar" src={`/images/${this.props.message.avatar}`} width="64" height="64"/>
                </div>
                <div>
                    <div className="screen-name">{this.props.message.screenName}</div>
                    <div className="content">{this.props.message.content}</div>
                </div>
            </div>
        )
    }
}
