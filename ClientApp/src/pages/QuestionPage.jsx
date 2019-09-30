import React, { useEffect, useState } from 'react'
import axios from 'axios'

const QuestionPage = props => {
  console.log({ props })
  const [question, setQuestion] = useState([])
  const questionId = props.match.params.qId

  const GetQuestion = async () => {
    const resp = await axios.get(`/api/questions/${questionId}`)
    console.log(resp.data)
    setQuestion(resp.data)
  }

  useEffect(() => {
    GetQuestion()
  }, [])

  return (
    <>
      <section>
        <ul className="questions-list">
          {/* this needs to bee formatted */}
          <li className="question-specific">
            <div className="up-down-votes">
              <div class="arrow-up"></div>
              <span>{question.qUpVotes - question.qDownVotes}</span>
              <div class="arrow-down"></div>
            </div>
            <div>
              <h4 className="category-text"> {question.questionTitle}</h4>
              <p>{question.questionDescription}</p>
            </div>
          </li>
        </ul>
        <textarea
          rows="8"
          cols="100"
          onChange={e => {
            setQuestion(e.target.value)
          }}
        ></textarea>
      </section>
    </>
  )
}

export default QuestionPage
