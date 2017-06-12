import React from 'react'

export default class SignIn extends  React.Component {
    render() {
        console.log(this.props.match.params)
        return (
            <div>Sign In</div>
        )
    }
}