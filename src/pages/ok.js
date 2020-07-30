import React, { useEffect } from 'react';

import qs from 'qs'
import { login } from '../services/api'

const OK = ({ location, history }) => {
  useEffect(() => {
    const { search } = location
    console.log('s', search)
    if (search) {
      const { oauth_token, oauth_verifier } = qs.parse(search, { ignoreQueryPrefix: true })
      // localStorage.setItem('@tweet-deleter/oatkn', oauth_token) //OAuth Token
      // localStorage.setItem('@tweet-deleter/oavrf', oauth_verifier) //OAuth Verifier

      handleLogin({ oauth_token, oauth_verifier })
    }
  }, [location])

  async function handleLogin({ oauth_token = '', oauth_verifier = '' }) {
    try {
      const r = await login({ oauth_token, oauth_verifier })
      console.log('r', r)
    } catch (error) {
      console.log('Something went wrong. Error:', error)
    }
  }

  return (
    <p>Ok</p>
  );
}

export default OK;