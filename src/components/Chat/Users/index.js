import React from 'react'
import PropTypes from  'prop-types'
import './users.css'

export default class Users extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        currentUser: PropTypes.string
    }

    static defaultProps = {
        users: []
    }


    userClass(user) {
      return  user.screenName === this.props.currentUser ? 'user active' : 'user'
    }

    render() {

        return (
            <div className="users">
                {this.props.users.map((user) => {
                    return (
                        <div key={user.screenName} className={this.userClass(user)}>
                            <div className={user.online ? "online" : "offline"} />
                            <div className="avatar">
                                <img src={`/images/${user.avatar}`} alt={user.screenName} width="50" height="50" />
                            </div>
                            <div className="content">
                                <div className="screen-name">{user.screenName}</div>
                                <div className="last-comment">{user.lastComment}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}