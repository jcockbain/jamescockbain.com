import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { graphql, useStaticQuery } from "gatsby"
import Moon from "../assets/svg/moon.svg"
import Sun from "../assets/svg/sun.svg"
import { FadeLink } from "./link"

import React, { useState } from "react"

interface Link {
  name: string
  link: string
}

const Navigation = ({ changeTheme, isDark }) => {
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

  const themeIcon = isDark ? (
    <img src={Sun} className="theme-icon" alt="Dark mode" />
  ) : (
    <img src={Moon} className="theme-icon" alt="Light mode" />
  )

  return (
    <nav className={isScrolledDown ? "nav scroll" : "nav"}>
      <div className="nav-container">
        <div className="home">
          <FadeLink to="/">&#x1f3e0; Home</FadeLink>
        </div>
        {links}
        <div className="theme-toggle">
          <button onClick={changeTheme} className="theme-switcher">
            {themeIcon}
          </button>
        </div>
      </div>
      <div />
    </nav>
  )
}

export default Navigation
