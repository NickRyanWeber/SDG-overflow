// Take in props for:
// - upvote count
// - downvote count

// Has functions for
// - Upvote
//    API post to increment upvotes (and decrement downvotes if downvoted is true)
//    Increments displayed upvotes
//    set upvoted to True and downvoted to false
//    add "voted" to upvote class

// - Downvote
//    API post to incrememnt downvotes (and decrement upvotes if upvoted is true)
//    Decrements displayed downvotes
//    set downvoted to True and upvoted to false
//    add "voted" to downvote class

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const VotesComponent = props => {
  const [upVoted, setUpVoted] = useState(false)
  const [downVoted, setDownVoted] = useState(false)
  // const [voteCount, setVoteCount] = useState(
  //   props.question.qUpVotes - props.question.qDownVotes
  // )
  const [question, setQuestion] = useState(props.question)
  const [apiUrl, setApiUrl] = useState('')

  const upVote = async () => {
    console.log('upVote')
    // let vote = downVoted ? 2 : 1
    // Increment voteCount
    // setVoteCount(question.qUpVotes - question.qDownVotes + vote)
    const _question = question
    if (downVoted) {
      _question.qDownVotes = _question.qDownVotes - 1
    }
    _question.qUpVotes = _question.qUpVotes + 1

    setQuestion(_question)
    // API Post
    const resp = await axios.put(
      `/api/Questions/${props.question.questionId}`,
      {
        question
      }
    )
    // set Voted
    setUpVoted(true)
    setDownVoted(false)
  }

  // const downVote = () => {
  //   console.log('downVote')
  //   let vote = upVoted ? 2 : 1
  //   // API Post
  //   // Increment voteCount
  //   setVoteCount(voteCount - vote)
  //   // set Voted
  //   setUpVoted(false)
  //   setDownVoted(true)
  // }

  useEffect(() => {
    // setVoteCount(props.question.qUpVotes - props.question.qDownVotes)
    setQuestion(props)
    // setApiUrl(props.match.params.qId)
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
        // onClick={() => {
        //   downVote()
        // }}
      ></div>
    </>
  )
}

export default VotesComponent
