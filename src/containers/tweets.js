import React from 'react'

import styled from 'styled-components'

import Tweet from '../components/tweet'
import InfoLabel from '../components/infoLabel'

const StyledWrapper = styled.div`
  padding: 5px;
  background-color: var(--nord1);
`

const Tweets = ({ tweetdata = {} }) => {
  const { data, remaining } = tweetdata

  function handleTweets(key, value) {
    console.log(key, value[key])

    const t = value[key]

    return (
      <Tweet key={key} {...t} />
    )
  }

  return (
    <>
      <InfoLabel remaining={remaining} />
      <StyledWrapper>
        {data && Object.keys(data).map(item => {
          return handleTweets(item, data)
        })}
      </StyledWrapper>
    </>
  )
}

export default Tweets
