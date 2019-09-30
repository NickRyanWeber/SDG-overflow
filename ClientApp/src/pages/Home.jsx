import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import VotesComponent from '../components/VotesComponent'

const Home = () => {
  const [questions, setQuestions] = useState([])

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
  }, [])

  return (
    <>
      <section>
        <ul className="questions-list">
          {questions.map((question, i) => {
            return (
              <li className="question-specific" key={i}>
                <div className="up-down-votes">
                  <VotesComponent question={question} />
                </div>
                <div>
                  <Link to={`/q/${question.id}`}>
                    <h4 className="category-text"> {question.questionTitle}</h4>
                  </Link>
                  <p>{question.questionDescription}</p>
                </div>
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
