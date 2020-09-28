import React, { ReactNode } from "react"
import styled from "styled-components"

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`

interface Props {
  children: ReactNode
}

const flex = ({ children }: Props) => {
  return <FlexDiv>{children}</FlexDiv>
}

export default flex
