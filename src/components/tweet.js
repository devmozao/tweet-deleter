import React from 'react'

import styled from 'styled-components'
import moment from 'moment-twitter'

import { ReactComponent as Heart } from '../static/svgs/heart.svg'
import { ReactComponent as Repeat } from '../static/svgs/repeat.svg'
import { ReactComponent as Message } from '../static/svgs/message-square.svg'

const TweetWrapper = styled.div`
  background-color: var(--nord0);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;
  border-radius: 20px;
  cursor: pointer;
  border: ${props => props.shouldSelect ? '1px solid var(--nord15)' : ''}
`

const ImageWrapper = styled.div`
  pointer-events: none;

  img {
    border-radius: 20%;
    width: 32px;
    height: 32px;
  }
`

const ContentWrapper = styled.div`
  pointer-events: none;
  flex-grow: 1;
  padding: 0px 0px 0px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
`

const UserInfo = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
  div strong {
    font-weight: bold;
  }
`
const Content = styled.div`
`
const Iteractions = styled.div`
  div {
    display: flex;
    flex: 0 1 10px;
    /* flex-basis: 10px; */
    justify-content: space-between;
  }
`
const IterationsSpacing = styled.span`
  
`

const Tweet = ({
  created_at = '',
  favorite_count = '',
  favorited = '',
  id = '',
  id_str = '',
  in_reply_to_screen_name = '',
  in_reply_to_status_id = '',
  in_reply_to_status_id_str = '',
  in_reply_to_user_id = '',
  in_reply_to_user_id_str = '',
  is_quote_status = '',
  retweet_count = '',
  retweeted = '',
  text = '',
  truncated = '',
  user = {},
  handleClick,
  isSelected = false
}) => {
  const DateSinceCreation = () => {
    const d = moment(created_at).twitterShort()
    return (
      <div>{d}</div>
    )
  }

  return (
    <TweetWrapper id={id_str} onClick={handleClick} shouldSelect={isSelected} data-testid={isSelected ? id_str.toString : ''}>
      <ImageWrapper>
        <img src={user.profile_image_url} alt='' />
      </ImageWrapper>
      <ContentWrapper>
        <UserInfo>
          <div>
            <strong>{user.name}</strong>
            <DateSinceCreation />
          </div>
          <p>@{user.screen_name}</p>
        </UserInfo>
        <Content>{text}</Content>
        <Iteractions>
          <div>
            <div>
              <Message />{' '}
            </div>
            <div>
              <Repeat />{retweet_count}
            </div>
            <div>
              <Heart />{favorite_count}
            </div>
          </div>
        </Iteractions>
      </ContentWrapper>
    </TweetWrapper>
  )
}

export default Tweet
