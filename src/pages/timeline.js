import React, { useState, useEffect } from 'react'

import * as api from '../services/api'

import Tweets from '../containers/tweets'

function Home () {
  const [tweetdata, setTweetdata] = useState({})

  useEffect(() => {
    getTimeline()
  }, [])

  async function getTimeline () {
    try {
      const response = await api.getTimeline()
      setTweetdata(response)
    } catch (error) {
      console.log('error', error)
    }
  }

  async function deleteTweet (ids = []) {
    try {
      console.log(await api.deleteTweets(ids))
      // await getTimeline()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Tweets
      tweetdata={tweetdata}
      handleUpdate={getTimeline}
      handleDelete={deleteTweet}
    />
  )
}

export default Home
