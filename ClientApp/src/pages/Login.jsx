import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const LogIn = async () => {
    const data = await axios
      .post('/auth/login', {
        Email: email,
        Password: password,
        Username: userName
      })
      .then(resp => {
        console.log(resp.data)
        sessionStorage.setItem('token', resp.data.token)
      })
  }

  const getSecretThing = async () => {
    const resp = await axios
      .get('/api/secret', {
        headers: { Authorization: 'bearer ' + sessionStorage.getItem('token') }
      })
      .then(resp => {
        console.log(resp.data)
      })
  }
  return (
    <>
      <form className="email-password-form">
        <label>Email</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <button onClick={() => LogIn()}>Log In</button>
        <button onClick={() => getSecretThing()}>get the secret thing</button>
      </form>
    </>
  )
}

export default Login
