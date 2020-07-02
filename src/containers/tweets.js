import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Tweet from '../components/tweet'
import InfoLabel from '../components/infoLabel'

const TimelineWrapper = styled.div`
  padding: 5px;
  background-color: var(--nord1);
`
const TweetWrapper = styled.div`
  padding: 5px 5px 5px 5px;
  background-color: var(--nord1);
`

const Tweets = ({ tweetdata = {} }) => {
  const { remaining } = tweetdata
  const [data, setData] = useState([])

  useEffect(() => {
    const d = tweetdata.data
    setData(d)
  }, [tweetdata])

  function handleClick (event) {
    const target = event.target.id

    const selected = data.filter(el => el.id == target)[0] // Pega o elemento que você selecionou
    const newList = data.filter(el => el.id != target) // Pega a lista sem o elemento que selecionou
    selected.isSelected = true // Define que ele tá selecionado

    newList.push(selected) // Adiciona o elemento selecionado
    setData(newList) // Adiciona o selecionado na lista de novo com o novo parametro
  }

  function handleTweets (key, value) {
    const t = value[key]

    return (
      <TweetWrapper key={key}>
        <Tweet handleClick={handleClick} {...t} />
      </TweetWrapper>
    )
  }

  return (
    <>
      <InfoLabel remaining={remaining} />
      <TimelineWrapper>
        {data && Object.keys(data).map(item => {
          return handleTweets(item, data)
        })}
      </TimelineWrapper>
    </>
  )
}

export default Tweets
