import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [questions, setQuestions] = useState([])

  const GetQuestions = async () => {
    const resp = await axios.get('/api/questions').then(resp => {
      console.log(resp.data)
      setQuestions(resp.data)
    })
  }

  useEffect(() => {
    GetQuestions()
  }, [])

  return (
    <>
      <section>
        <ul className="questions-list">
          {questions.map((question, i) => {
            return (
              // this needs to bee formatted
              <li className="question-specific" key={i}>
                <p>
                  {/* this needs to be turned into an equation */}
                  {question.qUpVotes} - {question.qDownVotes}
                </p>
                <label>Votes</label>
                {/* this links to undefined, not sure where to fix it */}
                <Link to={`/q/${question.Id}`}>
                  <h4 className="category-text"> {question.questionTitle}</h4>
                </Link>
                <p>{question.questionDescription}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default Home

// import React, { Component } from 'react'

// export class Home extends Component {
//   static displayName = Home.name

//   render() {
//     return (
//       <div>
//         <h2>List of questions will go here</h2>
//       </div>
//     )
//   }
// }
