import React, { useState } from 'react'
import axios from 'axios'

const AskQuestionPage = () => {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [userName, setUserName] = useState('')

  const Question = async () => {
    const resp = await axios.post('/api/questions', {
      questionTitle: title,
      questionDescription: question,
      Username: userName
    })
    sessionStorage.setItem('token', resp.data.token)
    console.log(resp.data.id)
    if (resp.status === 200) {
      window.location.replace(`/q/${resp.data.id}`)
    }
  }

  return (
    <>
      <form className="ask-question-form">
        <label>Question Title</label>
        <input
          type="text"
          placeholder="What's your programming question? Be specific."
          onChange={e => {
            setTitle(e.target.value)
          }}
        ></input>
        <label>Question Body</label>
        <textarea
          rows="8"
          cols="25"
          onChange={e => {
            setQuestion(e.target.value)
          }}
        ></textarea>
        <button
          className="form-button"
          onClick={e => {
            Question()
            e.preventDefault()
          }}
        >
          Post your question
        </button>
      </form>
    </>
  )
}

export default AskQuestionPage
