import React, { useState, useEffect } from 'react'
import axios from 'axios'

const VotesComponent = props => {
  const [upVoted, setUpVoted] = useState(false)
  const [downVoted, setDownVoted] = useState(false)
  const [question, setQuestion] = useState(props.question)

  const upVote = async () => {
    console.log('upVote')
    // API Post
    const resp = await axios.patch(`/api/Questions/${props.question.id}/upVote`)
    setQuestion(resp.data)
    console.log(resp.data)
    // set Voted
    setUpVoted(true)
    setDownVoted(false)
  }

  const downVote = async () => {
    console.log('downVote')
    // API Post
    const resp = await axios.patch(
      `/api/Questions/${props.question.id}/downVote`
    )
    setQuestion(resp.data)
    console.log(resp.data)
    // set Voted
    setUpVoted(false)
    setDownVoted(true)
  }

  useEffect(() => {
    setQuestion(props.question)
  }, [props])

  return (
    <>
      <div
        className={`arrow-up ${upVoted ? 'voted' : ''}`}
        onClick={() => {
          upVote()
        }}
      ></div>
      <span>{question.qUpVotes - question.qDownVotes}</span>
      <div
        className={`arrow-down ${downVoted ? 'voted' : ''}`}
        onClick={() => {
          downVote()
        }}
      ></div>
    </>
  )
}

export default VotesComponent
