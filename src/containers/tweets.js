import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Tweet from '../components/tweet'
import InfoLabel from '../components/infoLabel'

import { api, request } from '../utils/handleRequests'

const TimelineWrapper = styled.div`
  padding: 5px;
  background-color: var(--nord1);
`
const TweetWrapper = styled.div`
  padding: 5px 5px 5px 5px;
  background-color: var(--nord1);
`

const SendButton = styled.button`
  margin: auto;
  display: block;
`

const Tweets = ({ tweetdata = {} }) => {
  const { remaining } = tweetdata
  const [data, setData] = useState([])

  useEffect(() => {
    const d = tweetdata.data
    setData(d)
  }, [tweetdata])

  function handleClick(event) {
    const target = event.target.id

    const mutatedArray = []
    data.map((item, index) => {
      if (item.id == target) {
        const r = { ...item }
        r.isSelected = !r.isSelected
        mutatedArray.push(r)
      } else {
        mutatedArray.push(item)
      }
    })

    setData(mutatedArray)
  }

  function handleTweets(key, value) {
    const t = value[key]

    return (
      <TweetWrapper key={key}>
        <Tweet handleClick={handleClick} {...t} />
      </TweetWrapper>
    )
  }

  function handleGetIds() {
    const r = data.reduce((accumulator, actual) => {
      if (actual?.isSelected) {
        accumulator.push(actual.id_str)
      }
      return accumulator
    }, [])
    sendDelete(r)
  }

  async function sendDelete(ids = []) {
    try {
      const response = await request(api.deleteTweets(ids))
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <InfoLabel remaining={remaining} />
      <TimelineWrapper>
        {data && Object.keys(data).map(item => {
          return handleTweets(item, data)
        })}
      </TimelineWrapper>
      <br />
      <SendButton onClick={handleGetIds} children='Send' />
    </>
  )
}

export default Tweets
