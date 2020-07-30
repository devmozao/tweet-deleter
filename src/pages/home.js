import React, { useEffect, useState } from 'react';

import { getAuth } from '../services/api'

const Home = () => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    getOAuth()
  }, [])

  async function getOAuth() {
    try {
      const response = await getAuth()
      console.log('response', response)
      setUrl(response.url)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      {url && (
        <a href={url}>
          Twitter
        </a>
      )}
    </>
  )
}

export default Home;