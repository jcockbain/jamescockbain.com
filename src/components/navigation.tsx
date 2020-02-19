import { Home } from "@material-ui/icons"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FadeLink } from "./link"

import React, { useState } from "react"

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
  const [isScrolledDown, setIsScrolledDown] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y !== prevPos.y
    if (isShow) {
      const isScrolled = !!(currPos.y < -30)
      setIsScrolledDown(isScrolled)
    }
  }, [])

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
        <StyledLink key={link.name} to={link.link} activeClassName="active">
          {link.name}
        </StyledLink>
      ))}
    </div>
  )

  return (
    <nav className={isScrolledDown ? "nav scroll" : "nav"}>
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
