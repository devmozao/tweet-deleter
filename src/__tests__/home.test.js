import React from 'react'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { render, fireEvent, waitFor, waitForElement, screen } from '@testing-library/react'

import Home from '../pages/home'

const payload = {
  data: [{
    created_at: 'Thu Jul 09 00:07:09 +0000 2020',
    id: 1281017008608415700,
    id_str: '1281017008608415746',
    text: '@tchublim to te aguardando! chega aí!',
    truncated: false,
    entities: { hashtags: [], symbols: [], user_mentions: [{ screen_name: 'tchublim', name: 'يوشا', id: 3896095762, id_str: '3896095762', indices: [0, 9] }], urls: [] },
    source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
    in_reply_to_status_id: 1281014365169299500,
    in_reply_to_status_id_str: '1281014365169299458',
    in_reply_to_user_id: 3896095762,
    in_reply_to_user_id_str: '3896095762',
    in_reply_to_screen_name: 'tchublim',
    user: { id: 1194770843445989400, id_str: '1194770843445989376', name: 'mozaoJSX', screen_name: 'devMozao', location: 'Osasco/SP', description: '💜 Dev FrontEnd React, JS lover 💚\n🚀 Webmaster no @webmasters_devs ✨\n🛰️ dev streamer no https://t.co/NBjtbpZS74 🌎', url: 'https://t.co/dbzocRaAiO', entities: { url: { urls: [{ url: 'https://t.co/dbzocRaAiO', expanded_url: 'https://github.com/devMozao', display_url: 'github.com/devMozao', indices: [0, 23] }] }, description: { urls: [{ url: 'https://t.co/NBjtbpZS74', expanded_url: 'http://twitch.tv/devmozao', display_url: 'twitch.tv/devmozao', indices: [86, 109] }] } }, protected: false, followers_count: 1671, friends_count: 1138, listed_count: 9, created_at: 'Thu Nov 14 00:15:55 +0000 2019', favourites_count: 12860, utc_offset: null, time_zone: null, geo_enabled: false, verified: false, statuses_count: 6497, lang: null, contributors_enabled: false, is_translator: false, is_translation_enabled: false, profile_background_color: 'F5F8FA', profile_background_image_url: null, profile_background_image_url_https: null, profile_background_tile: false, profile_image_url: 'http://pbs.twimg.com/profile_images/1236773797824548866/DtlQynBU_normal.jpg', profile_image_url_https: 'https://pbs.twimg.com/profile_images/1236773797824548866/DtlQynBU_normal.jpg', profile_banner_url: 'https://pbs.twimg.com/profile_banners/1194770843445989376/1584399228', profile_link_color: '1DA1F2', profile_sidebar_border_color: 'C0DEED', profile_sidebar_fill_color: 'DDEEF6', profile_text_color: '333333', profile_use_background_image: true, has_extended_profile: true, default_profile: true, default_profile_image: false, following: false, follow_request_sent: false, notifications: false, translator_type: 'none' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: 'pt'
  }],
  remaining: '899'
}

const server = setupServer(
  rest.get('/getTimeline', (req, res, ctx) => {
    return res(ctx.json(payload))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should render the tweet', async () => {
  const component = render(<Home />)

  await waitFor(() => expect(component.getByText('@tchublim to te aguardando! chega aí!')))
})
