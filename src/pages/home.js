import React, { useState, useEffect } from 'react'

import { api, request } from '../utils/handleRequests'

import Tweets from '../containers/tweets'

function Home () {
  const [tweetdata, setTweetdata] = useState({})

  useEffect(() => {
    getTimeline()
  }, [])

  async function getTimeline () {
    try {
      const response = await request(api.getTimeline())
      setTweetdata(response)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Tweets tweetdata={tweetdata} />
  )
}

export default Home
