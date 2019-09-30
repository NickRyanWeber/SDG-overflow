import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [questions, setQuestions] = useState([])
  // const [votes, setVotes] = useState([])

  const GetQuestions = async () => {
    const resp = await axios.get('/api/questions')
    console.log(resp.data)
    setQuestions(resp.data)
  }

  // const RecordVotes = async () => {
  //   const resp = await axios.post('/api/questions').then(resp => {
  //     console.log(resp.data)
  //     setVotes(resp.data)
  //   })
  // }

  useEffect(() => {
    GetQuestions()
    // RecordVotes()
  }, [])

  return (
    <>
      <section>
        <ul className="questions-list">
          {questions.map((question, i) => {
            return (
              // this needs to bee formatted
              <li className="question-specific" key={i}>
                <div>
                  <p>{question.qUpVotes - question.qDownVotes}</p>
                  <div className="arrow-up"></div>
                  <div className="arrow-down"></div>
                  <label>Votes</label>
                </div>
                {/* this links to undefined, not sure where to fix it */}
                <Link to={`/q/${question.id}`}>
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
