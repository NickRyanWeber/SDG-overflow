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

import React, { useState } from 'react'

const VotesComponent = () => {
  const [upvoted, setUpvoted] = useState(false)
  const [downvoted, setDownvoted] = useState(false)
  const [voteCount, setVoteCount] = useState(props.qupvote - props.qdownvote)

  const upVote = () => {
    console.log('upvote')
    let vote = downvoted ? 2 : 1
    // API Post
    // Increment voteCount
    setVoteCount = voteCount + vote
    // set Voted
    setUpvoted = true
    setDownvoted = false
  }

  const downVote = () => {
    console.log('downvote')
    let vote = upvoted ? 2 : 1
    // API Post
    // Increment voteCount
    setVoteCount = voteCount - vote
    // set Voted
    setUpvoted = false
    setDownvoted = true
  }

  return (
    <>
      <p>{voteCount}</p>
      <div
        className={`arrow-up ${upvoted ? 'voted' : ''}`}
        onClick={() => {
          upVote()
        }}
      ></div>
      <div
        className={`arrow-down ${downvoted ? 'voted' : ''}`}
        onClick={() => {
          downVote()
        }}
      ></div>
      <label>Votes</label>
    </>
  )
}

export default VotesComponent
