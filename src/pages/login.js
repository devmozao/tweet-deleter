import React, { useEffect, useState } from 'react'

import { getAuthAddress } from '../services/api'

const Login = () => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    getOAuth()
  }, [])

  async function getOAuth () {
    try {
      const response = await getAuthAddress()
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

export default Login
