import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    console.log(resp.data)
    sessionStorage.setItem('token', resp.data.token)
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
        <Link to={`/q/${question.id}`}>
          <button
            className="form-button"
            onClick={e => {
              Question()
              e.preventDefault()
            }}
          >
            Post your question
          </button>
        </Link>
      </form>
    </>
  )
}

export default AskQuestionPage
