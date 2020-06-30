import React from 'react'

import styled from 'styled-components'

import colors from '../services/colors'

const ParentWrapper = styled.div`
  padding: 5px 5px 5px 5px;
  background-color: ${colors.gray};
  margin
`

const InnerWrapper = styled.div`
  background-color: ${colors.darkGray};
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
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
  user = {}
}) => {
  return (
    <ParentWrapper>
      <InnerWrapper>
        <UserInfo><strong>{user.name}</strong>{' '}@{user.screen_name}</UserInfo>
        <Text>{text}</Text>
        <Iteractions>Rt: {retweet_count} rt?{retweeted} fv: {favorite_count} fv?{favorited}</Iteractions>
        <CreatedAt>{created_at}</CreatedAt>
      </InnerWrapper>
    </ParentWrapper>
  )
}

export default Tweet
