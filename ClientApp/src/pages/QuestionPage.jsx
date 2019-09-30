import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VotesComponent from '../components/VotesComponent'

const QuestionPage = props => {
  console.log({ props })
  const [question, setQuestion] = useState(null)
  const questionId = props.match.params.qId

  const GetQuestion = async () => {
    const resp = await axios.get(`/api/Questions/${questionId}`)
    console.log(resp.data)
    setQuestion(resp.data)
  }

  useEffect(() => {
    GetQuestion()
  }, [])

  useEffect(() => {
    console.log(question)
  }, [question])

  if (question) {
    return (
      <>
        <section>
          {/* <ul className="questions-list">
            <li className="question-specific"> */}
          <div className="up-down-votes">
            <VotesComponent question={question} />
          </div>
          <div>
            <h4 className="category-text"> {question.questionTitle}</h4>
            <p>{question.questionDescription}</p>
          </div>
          <ul>
            {question.answer.map(a => {
              return (
                <li>
                  <p>{a.answerDescription}</p>
                </li>
              )
            })}
          </ul>
          <textarea
            rows="8"
            cols="100"
            onChange={e => {
              setQuestion(e.target.value)
            }}
          ></textarea>
          <button
            className="form-button"
            onClick={e => {
              // PostAnswer()
              e.preventDefault()
            }}
          >
            Post your answer
          </button>
        </section>
      </>
    )
  } else {
    return <div>Text Loading...</div>
  }
}

export default QuestionPage
