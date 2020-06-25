import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.twitter.com/1.1/statuses/',
  timeout: 10000
})

export function getTimeline() {
  return api
    .get('home_timeline.json', {
      headers: {
        'consumer-key': process.env.CONSUMER_KEY,
        'consumer-secret': process.env.CONSUMER_SECRET,
        'token': process.env.TOKEN,
        'token-secret': process.env.TOKEN_SECRET
      }
    })
    .then(result => result.data)
}

export function getGithub() {
  return api
    .get('https://api.github.com/users/devmozao')
    .then(result => result.data)
}
