import React from 'react'

import styled from 'styled-components'

const StyledLabel = styled.div`
  padding: 10px 10px 10px 10px;
  text-align: right;
  color: var(--nord15);
`

const InfoLabel = ({ remaining }) => {
  return (
    <StyledLabel>
      {'Requisições restantes:'}{' '}{remaining}
    </StyledLabel>
  )
}

export default InfoLabel
