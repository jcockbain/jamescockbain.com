import React, { ReactNode } from "react"
import styled from "styled-components"

const Card = styled.div`
  text-align: left;
  border: 2px solid ${props => props.theme.formBorder};
  border-radius: 4px;
  background-color: ${props => props.theme.surface};
  padding: 1.25rem;
  margin: 1rem 0;
`

interface Props {
  children: ReactNode
}

const CardElement = ({ children }: Props) => <Card>{children}</Card>

export default CardElement
