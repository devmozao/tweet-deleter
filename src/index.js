import React from 'react'
import ReactDOM from 'react-dom'

import { Reset } from 'styled-reset'
import styled from 'styled-components'

import Routes from './routes'

const Container = styled.div`
  /* margin: 20px 20px 20px 20x !important; */
  max-width: 1280px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-left: 10%;
  margin-right: 10%;
  background-color: #1D2227;
  color: #fefefe;
`

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Container id='teste'>
      <Routes />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)
