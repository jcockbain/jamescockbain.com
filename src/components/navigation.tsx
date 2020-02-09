import { Home } from "@material-ui/icons"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FadeLink } from "./link"

import React from "react"

const StyledLink = styled(FadeLink)`
  display: inline-block;
  box-shadow: none;
  color: inherit;
  text-decoration: none;
  margin-right: 1rem;
`

interface Link {
  name: string
  link: string
}

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
    }
  `)

  const links = (
    <div className="links">
      {data.site.siteMetadata.menuLinks.map((link: Link) => (
        <StyledLink key={link.name} to={link.link}>
          {link.name}
        </StyledLink>
      ))}
    </div>
  )

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="brand">
          <StyledLink to="/">
            <Home />
            jcockbain.dev
          </StyledLink>
        </div>
        {links}
      </div>
      <div />
    </nav>
  )
}

export default Navigation
