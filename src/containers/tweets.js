import React from 'react'

import Tweet from '../components/tweet'
import InfoLabel from '../components/infoLabel'

const Tweets = ({ tweetdata = {} }) => {
  const { data, remaining } = tweetdata

  function handleTweets (key, value) {
    console.log(key, value[key])

    const t = value[key]

    return (
      <Tweet key={key} {...t} />
    )
  }

  return (
    <>
      <InfoLabel remaining={remaining} />
      {data && Object.keys(data).map(item => {
        return handleTweets(item, data)
      })}
    </>
  )
}

export default Tweets
