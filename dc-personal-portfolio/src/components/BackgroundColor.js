import React from 'react'
import styled from 'styled-components'

function BackgroundColor({ children }) {
  return (
    <StyledBackgroundColor>{children}</StyledBackgroundColor>
  )
}

const StyledBackgroundColor = styled.div`
    background-color: var(--color-bg-default);
`
export default BackgroundColor