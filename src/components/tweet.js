import React from 'react'

import styled from 'styled-components'

const TweetWrapper = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 0px;
  p {
    margin: 2px 2px 2px 2px;
  }
`
const UserInfo = styled.p`
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
  user = {}
}) => {
  return (
    <TweetWrapper>
      <UserInfo><strong>{user.name}</strong>@{user.screen_name}</UserInfo>
      <Text>{text}</Text>
      <Iteractions>Rt: {retweet_count} rt?{retweeted} fv: {favorite_count} fv?{favorited}</Iteractions>
      <CreatedAt>{created_at}</CreatedAt>
    </TweetWrapper>
  )
}

export default Tweet
