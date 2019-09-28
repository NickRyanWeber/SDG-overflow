import React, { Component } from 'react'
import axios from 'axios'

export class NewUser extends Component {
  static displayName = NewUser.name

  NewUser = () => {
    axios
      .post('/auth/register', {
        email: 'test@test.com',
        password: 'password123'
      })
      .then(resp => {
        console.log(resp.data)
        sessionStorage.setItem('token', resp.data.token)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.NewUser}>Sign up</button>
      </div>
    )
  }
}
