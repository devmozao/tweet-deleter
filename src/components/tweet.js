import React from 'react'

import styled from 'styled-components'

const TweetWrapper = styled.div`
  background-color: var(--nord0);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  cursor: pointer;
  border: ${props => props.shouldSelect ? '1px solid var(--nord15)' : ''}
`

const ImageWrapper = styled.div`
  pointer-events: none;

  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`

const ContentWrapper = styled.div`
  pointer-events: none;
  flex-grow: 1;
  padding-left: 2px;
    p {
    margin: 4px 4px 4px 4px;
  }
`

const UserInfo = styled.p`

  strong {
    font-weight: bold;
  }
`
const Text = styled.p`
`
const Iteractions = styled.p`
`
const CreatedAt = styled.p`
  font-size: 12px;
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
  return (
    <TweetWrapper id={id} onClick={handleClick} shouldSelect={isSelected}>
      <ImageWrapper>
        <img src={user.profile_image_url} alt='' />
      </ImageWrapper>
      <ContentWrapper>
        <UserInfo>
          <strong>{user.name}</strong>{' '}@{user.screen_name}
        </UserInfo>
        <Text>{text}</Text>
        <Iteractions>Rt: {retweet_count} rt?{retweeted} fv: {favorite_count} fv?{favorited}</Iteractions>
        <CreatedAt>{created_at}</CreatedAt>
      </ContentWrapper>
    </TweetWrapper>
  )
}

export default Tweet
