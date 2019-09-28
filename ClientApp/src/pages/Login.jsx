import React, { Component } from 'react'
import axios from 'axios'

export class Login extends Component {
  static displayName = Login.name

  LogIn = () => {
    axios
      .post('/auth/login', { email: 'test@test.com', password: 'password123' })
      .then(resp => {
        console.log(resp.data)
        sessionStorage.setItem('token', resp.data.token)
      })
  }

  getSecretThing = () => {
    axios
      .get('/api/secret', {
        headers: { Authorization: 'bearer ' + sessionStorage.getItem('token') }
      })
      .then(resp => {
        console.log(resp.data)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.LogIn}>Log In</button>
        <button onClick={this.getSecretThing}>get the secret thing</button>
      </div>
    )
  }
}
