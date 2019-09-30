import React, { useEffect, useState } from 'react'
import axios from 'axios'

const QuestionPage = props => {
  const [oneQuestion, setOneQuestion] = useState([])
  const questionId = props.match.params.question

  const GetQuestion = async () => {
    const resp = await axios.get(`/api/questions/${questionId}`)
    console.log(resp.data)
    setOneQuestion(resp.data)
  }

  useEffect(() => {
    GetQuestion()
  }, [])

  return (
    <>
      <section>
        <h1>Question Page</h1>
        <ul className="questions-list">
          {oneQuestion.map((q, i) => {
            return (
              // this needs to bee formatted
              <li className="question-specific" key={i}>
                <div>
                  <p>{q.qUpVotes - q.qDownVotes}</p>
                  <div class="arrow-up"></div>
                  <div class="arrow-down"></div>
                  <label>Votes</label>
                </div>
                <h4 className="category-text"> {q.questionTitle}</h4>
                <p>{q.questionDescription}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default QuestionPage
