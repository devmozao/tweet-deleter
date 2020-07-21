import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Tweet from '../components/tweet'
import InfoLabel from '../components/infoLabel'

const TimelineWrapper = styled.div`
  padding: 5px;
  padding-top: 70px;
  background-color: var(--nord1);
`
const TweetWrapper = styled.div`
  padding: 5px 5px 5px 5px;
  background-color: var(--nord1);
`

const Tweets = ({ tweetdata = [], handleUpdate, handleDelete }) => {
  const { remaining } = tweetdata
  const [data, setData] = useState([])

  useEffect(() => {
    const { data } = { ...tweetdata }
    if (Array.isArray(data)) {
      return setData(data)
    }
  }, [tweetdata])

  function handleTweets (value = {}, key = '') {
    return (
      <TweetWrapper key={key}>
        <Tweet handleClick={handleClick} {...value} />
      </TweetWrapper>
    )
  }

  function handleClick (event) {
    const target = event.target.id

    const mutatedArray = []
    data.map((item, index) => {
      if (item.id_str === target) {
        const r = { ...item }
        r.isSelected = !r.isSelected
        mutatedArray.push(r)
      } else {
        mutatedArray.push(item)
      }
    })
    setData(mutatedArray)
  }

  function handleSelectAll () {
    const mutatedArray = []
    data.map((item, index) => {
      const r = { ...item }
      r.isSelected = !r.isSelected
      mutatedArray.push(r)
    })
    setData(mutatedArray)
  }

  function handleDeleteTweets () {
    const selectedTweets = data.reduce((accumulator, actual) => {
      if (actual?.isSelected) {
        accumulator.push(actual.id_str)
      }
      return accumulator
    }, [])
    handleDelete(selectedTweets)
  }

  return (
    <>
      <InfoLabel
        remaining={remaining}
        handleFunctionUpdateTimeline={handleUpdate}
        handleFunctionSelectAll={handleSelectAll}
        handleFunctionDeleteTweet={handleDeleteTweets}
      />

      <TimelineWrapper>
        {Array.isArray(data) && data.map((item, index) => {
          return handleTweets(item, index)
        })}
      </TimelineWrapper>
      <br />
    </>
  )
}

export default Tweets
