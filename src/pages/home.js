import React from 'react'
import './home.css'

import { api, request } from '../utils/handleRequests'

function Home () {
  getTimeline()

  async function getTimeline () {
    const response = await request(api.getTimeline())
    console.log('log', response)
  }

  return (
    <p>Home Page</p>
  )
}

export default Home
