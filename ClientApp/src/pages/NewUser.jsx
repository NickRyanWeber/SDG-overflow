import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

export class NewUser extends Component {
  // not sure if this is needed, so keeping it for now
  // static displayName = NewUser.name

  // doesn't like useState for some reason. Building another to test
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

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
        <form className="email-password-form">
          <label>Email</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="password"></input>
          <button onClick={this.NewUser}>Sign up</button>
        </form>
      </div>
    )
  }
}
