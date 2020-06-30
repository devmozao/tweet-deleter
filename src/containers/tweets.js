import React from 'react'

import Tweet from '../components/tweet'

const Tweets = ({ tweetdata = {} }) => {
  const { data, remaining } = tweetdata

  function handleTweets(key, value) {
    console.log(key, value[key])

    const t = value[key]

    return (
      <Tweet {...t} />
    )
  }

  return (
    <>
      <h1>Requisições restantes: {remaining}</h1>
      {data && Object.keys(data).map(item => {
        return handleTweets(item, data)
      })}
    </>
  )
}

export default Tweets
