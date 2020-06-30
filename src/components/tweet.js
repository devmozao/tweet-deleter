import React from 'react'

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
  console.log('p', text)
  return (
    <div>
      <p>{user.name}{user.screen_name}</p>
      <p>{text}</p>
      <p>{retweet_count}{retweeted}{favorite_count}{favorited}</p>
      <p>{created_at}</p>
    </div>
  )
}

export default Tweet
