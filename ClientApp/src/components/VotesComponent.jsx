import React, { useState, useEffect } from 'react'
import axios from 'axios'

const VotesComponent = props => {
  const [upVoted, setUpVoted] = useState(false)
  const [downVoted, setDownVoted] = useState(false)
  const [question, setQuestion] = useState(props.question)
  const [apiUrlUpVote, setApiUrlUpVote] = useState('')
  const [apiUrlDownVote, setApiUrlDownVote] = useState('')

  const upVote = async () => {
    console.log('upVote')
    // API Post
    const resp = await axios.patch(apiUrlUpVote)
    setQuestion(resp.data)
    console.log(resp.data)
    // set Voted
    setUpVoted(true)
    setDownVoted(false)
  }

  const downVote = async () => {
    console.log('downVote')
    // API Post
    const resp = await axios.patch(apiUrlDownVote)
    // `/api/Questions/${props.question.id}/downVote`
    setQuestion(resp.data)
    console.log(resp.data)
    // set Voted
    setUpVoted(false)
    setDownVoted(true)
  }

  useEffect(() => {
    setQuestion(props.question)
    setApiUrlUpVote(
      props.question.questionDescription
        ? `/api/Questions/${props.question.id}/upVote`
        : `/api/Questions/${props.question.questionId}/Answer/${props.question.id}/upVote`
    )
    setApiUrlDownVote(
      props.question.questionDescription
        ? `/api/Questions/${props.question.id}/downVote`
        : `/api/Questions/${props.question.questionId}/Answer/${props.question.id}/downVote`
    )
  }, [props])

  return (
    <>
      <div
        className={`arrow-up`}
        onClick={() => {
          upVote()
        }}
      ></div>
      <span>{question.upVotes - question.downVotes}</span>
      <div
        className={`arrow-down`}
        onClick={() => {
          downVote()
        }}
      ></div>
    </>
  )
}

export default VotesComponent
