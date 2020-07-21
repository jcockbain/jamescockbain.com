import React from "react"
import styled from "styled-components"

const StyledTagLabel = styled.div`
  color: ${props => props.theme.onBackground};
  opacity: ${props => props.theme.headerOpacity};
`

interface Props {
  text: string
}

const TagLabel = ({ text }: Props) => <StyledTagLabel>{text}</StyledTagLabel>

export default TagLabel
