import { Link } from "gatsby"
// tslint:disable-next-line:no-submodule-imports
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as React from "react"
import { ComponentProps } from "react"
import styled from "styled-components"

const FADE_TIME = 0.3

type Props = Partial<ComponentProps<typeof Link>>

const StyledLink = styled(AniLink)`
  :hover {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.onBackground};
  }
`

export const FadeLink = (props: Props) => {
  const { children, ...linkProps } = props

  return (
    <StyledLink fade={true} duration={FADE_TIME} {...linkProps}>
      {children}
    </StyledLink>
  )
}
