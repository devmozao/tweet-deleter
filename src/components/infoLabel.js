import React from 'react'

import styled from 'styled-components'

import colors from '../services/colors'

const StyledLabel = styled.div`
  padding: 10px 10px 10px 10px;
  text-align: right;
  color: ${colors.pink};
`

const InfoLabel = ({ remaining }) => {
  return (
    <StyledLabel>
      {'Requisições restantes:'}{' '}{remaining}
    </StyledLabel>
  )
}

export default InfoLabel
