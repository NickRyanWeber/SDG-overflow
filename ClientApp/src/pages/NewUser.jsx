import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewUser = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const NewUser = async e => {
    const data = await axios
      .post('/auth/register', {
        Email: email,
        Password: password,
        UserName: userName
      })
      .then(resp => {
        console.log(resp.data)
        sessionStorage.setItem('token', resp.data.token)
      })
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
        <label>UserName</label>
        <input
          type="text"
          onChange={e => {
            setUserName(e.target.value)
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
          onClick={e => {
            NewUser()
            e.preventDefault()
          }}
        >
          Sign up
        </button>
      </form>
    </>
  )
}

export default NewUser

// BREAK

// import React, { Component, useEffect, useState } from 'react'
// import axios from 'axios'

// export class NewUser extends Component {
// not sure if this is needed, so keeping it for now
// static displayName = NewUser.name

// doesn't like useState for some reason. Building another to test
// const [email, setEmail] = useState("")
// const [password, setPassword] = useState("")

//   render() {
//     return <div></div>
//   }
// }
