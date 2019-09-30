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

  return (
    <>
      <p>{question.qUpVotes - question.qDownVotes}</p>
      <div className="arrow-up"></div>
      <div className="arrow-down"></div>
      <label>Votes</label>
    </>
  )
}

export default VotesComponent
