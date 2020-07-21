import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333/',
  timeout: 10000
})

export function getTimeline () {
  return api
    .get('getTimeline')
    .then(result => result.data)
}

export function deleteTweets (data) {
  return api
    .post('deleteTweets', { data })
    .then(result => result.data)
}
