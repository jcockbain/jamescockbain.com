import React from "react"
import styled from "styled-components"

const StyledIconLabel = styled.span`
  padding-right: 0.2rem;
`

interface Props {
  text: string
}

const IconLabel = ({ text }: Props) => <StyledIconLabel>{text}</StyledIconLabel>

export default IconLabel
