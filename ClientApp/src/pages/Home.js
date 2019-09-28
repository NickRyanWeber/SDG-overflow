import React, { Component } from 'react'
import axios from 'axios'

export class Home extends Component {
  static displayName = Home.name

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
        <h2>List of questions will go here</h2>
      </div>
    )
  }
}
