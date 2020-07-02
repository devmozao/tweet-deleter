import React from 'react'
import ReactDOM from 'react-dom'

import { Reset } from 'styled-reset'

import styled from 'styled-components'

import Routes from './routes'
import './static/nord.css'

const BackgroundWrapper = styled.div`
  background-color: var(--nord0);

`

const Container = styled.div`
  max-width: 1280px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-left: 10%;
  margin-right: 10%;
  background-color: var(--nord2);
  color: var(--nord6);
  font-family: 'JetBrains Mono';
  font-size: 16px;
`

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <BackgroundWrapper>
      <Container>
        <Routes />
      </Container>
    </BackgroundWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)
