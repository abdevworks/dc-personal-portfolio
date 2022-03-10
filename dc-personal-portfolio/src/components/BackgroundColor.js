import React from 'react'
import styled from 'styled-components'

function BackgroundColor({ bg, children }) {
  return (
    <StyledBackgroundColor style={{
      '--bgc': bg
    }}>{children}</StyledBackgroundColor>
  )
}

const StyledBackgroundColor = styled.div`
    background-color: var(--bgc, var(--color-bg-default));
`
export default BackgroundColor