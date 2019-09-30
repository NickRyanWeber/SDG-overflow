import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const LogIn = async () => {
    const resp = await axios.post('/auth/login', {
      Email: email,
      Password: password
    })
    console.log(resp.data)
    sessionStorage.setItem('token', resp.data.token)
  }

  const getSecretThing = async () => {
    const resp = await axios.get('/api/secret', {
      headers: { Authorization: 'bearer ' + sessionStorage.getItem('token') }
    })
    console.log(resp.data)
  }

  return (
    <>
      <form className="email-password-form">
        <label>Email</label>
        <input
          type="text"
          onChange={e => {
            setEmail(e.target.value)
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={e => {
            setPassword(e.target.value)
          }}
        ></input>
        <button
          className="form-button"
          onClick={() => {
            LogIn()
          }}
        >
          Log In
        </button>
        <button
          className="form-button"
          onClick={e => {
            getSecretThing()
            e.preventDefault()
          }}
        >
          get the secret thing
        </button>
      </form>
    </>
  )
}

export default Login
