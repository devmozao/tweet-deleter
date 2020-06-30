import React from 'react'
import ReactDOM from 'react-dom'

import { Reset } from 'styled-reset'
import 'victormono'

import styled from 'styled-components'

import colors from './services/colors'

import Routes from './routes'

const IndexWrapper = styled.div`
  background-color: ${colors.gray};
`

const Container = styled.div`
  max-width: 1280px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-left: 10%;
  margin-right: 10%;
  background-color: ${colors.darkGray};
  color: #fefefe;
  font-family: 'JetBrains Mono';
  font-size: 16px;
`

ReactDOM.render(
  <React.StrictMode>
    <IndexWrapper>
      <Reset />
      <Container>
        <Routes />
      </Container>
    </IndexWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)
