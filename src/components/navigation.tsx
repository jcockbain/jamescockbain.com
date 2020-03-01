import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { graphql, useStaticQuery } from "gatsby"
import { FadeLink } from "./link"

import React, { useState } from "react"

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
        <FadeLink key={link.name} to={link.link} activeClassName="active">
          {link.name}
        </FadeLink>
      ))}
    </div>
  )

  return (
    <nav className={isScrolledDown ? "nav scroll" : "nav"}>
      <div className="nav-container">
        <div className="home">
          <FadeLink to="/">&#x1f3e0; Home</FadeLink>
        </div>
        {links}
      </div>
      <div />
    </nav>
  )
}

export default Navigation
