import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { graphql, useStaticQuery } from "gatsby"
import { FadeLink } from "./link"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Moon from "../assets/svg/moon.svg"
import Sun from "../assets/svg/sun.svg"

import React, { useState } from "react"

interface Link {
  name: string
  link: string
}

interface Props {
  changeTheme: () => void
  isDark: boolean
}

const Navigation = ({ changeTheme, isDark }: Props) => {
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

  const links = data.site.siteMetadata.menuLinks.map((link: Link) => (
    <Nav.Link key={link.name}>
      <FadeLink to={link.link} key={link.name} className="link">
        {link.name}
      </FadeLink>
    </Nav.Link>
  ))

  const themeIcon = isDark ? (
    <img src={Sun} className="theme-icon" alt="Dark mode" />
  ) : (
    <img src={Moon} className="theme-icon" alt="Light mode" />
  )

  return (
    <Navbar
      fixed="top"
      bg={isDark ? "dark" : "light"}
      variant={isDark ? "dark" : "light"}
      className={isScrolledDown ? "nav scroll" : "nav"}
    >
      <Navbar.Brand>
        <FadeLink to="/">&#x1f3e0;Home</FadeLink>
      </Navbar.Brand>
      <Nav className="ml-lg-auto">{links}</Nav>
      <div className="theme-toggle">
        <button onClick={changeTheme} className="theme-switcher">
          {themeIcon}
        </button>
      </div>
    </Navbar>
  )
}

export default Navigation
