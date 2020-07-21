import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
`
const InfoContainer = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--nord1);
  padding: 1vh 0;
`
const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
`
const StyledButton = styled.button`
  height: 5vh;
  width: 30%;
  border: ${({ bgColor }) => `1.5px solid ${bgColor}` || ''} ;
  border-radius: 10px;
  background-color: var(--nord1);
  color: ${({ bgColor }) => bgColor || ''} ;
  outline: none;

  : hover {
    color: var(--nord4);
    background-color: ${({ bgColor }) => `${bgColor}` || ''} ;
    cursor: pointer;
  }
`
function setColor(color = '') {
  if (color) {
    return window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(color)
  }
}

const InfoLabel = ({
  remaining = '',
  handleFunctionUpdateTimeline,
  handleFunctionDeleteTweet,
  handleFunctionSelectAll
}) => {
  return (
    <Wrapper>
      <InfoContainer>
        <WrapperButtons>
          <StyledButton
            children='Refresh'
            onClick={handleFunctionUpdateTimeline}
            bgColor={setColor('--nord14')}
          />
          <StyledButton
            onClick={handleFunctionSelectAll}
            bgColor={setColor('--nord10')}
            children='Select all'
          />
          <StyledButton
            onClick={handleFunctionDeleteTweet}
            children='Delete tweets'
            bgColor={setColor('--nord11')}
          />
        </WrapperButtons>
      </InfoContainer>
    </Wrapper>
  )
}

export default InfoLabel
