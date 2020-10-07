import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Moon from "../assets/svg/moon.svg"
import Sun from "../assets/svg/sun.svg"
import { FadeLink } from "../elements/link"
import { device } from "../styles/utils/device"

import React, { useState } from "react"

interface Link {
  name: string
  link: string
}

interface Props {
  changeTheme: () => void
  isDark: boolean
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.theme.navbarColor};
  z-index: 3;
  overflow: hidden;
  ${({ scroll }) => scroll && `box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);`}
`

const NavContainer = styled.div`
  height: 60px;
  padding: 0.2rem 0.3rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: height 0.3s ease;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 100%;
  margin: 0;

  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.onNavbar};
    margin: 0.2rem;
    padding: 0.2rem;
    font-size: 1rem;
    box-shadow: none;
    line-height: 1.2;
    @media ${device.laptop} {
      font-size: 1.2rem;
      padding: 0.8rem;
    }
  }
`

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 0.5rem;
  height: 100%;
`

const ThemeSwitcherButton = styled.button`
  display: flex;
  border: 0;
  margin: 0.2rem;
  padding: 0.5rem 0.5rem;
  background: transparent;
  align-items: center;

  &:hover,
  &.active {
    cursor: pointer;
  }
`

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

  const links = (
    <LinksContainer className="flex-end">
      {data.site.siteMetadata.menuLinks.map((link: Link) => (
        <FadeLink className="nav-link" key={link.name} to={link.link}>
          {link.name}
        </FadeLink>
      ))}
    </LinksContainer>
  )

  const themeIcon = isDark ? (
    <img src={Sun} className="theme-icon" alt="Dark mode" />
  ) : (
    <img src={Moon} className="theme-icon" alt="Light mode" />
  )

  return (
    <StyledNav scroll={isScrolledDown ? "scroll" : ""}>
      <NavContainer>
        <LinksContainer className="justify-start">
          <FadeLink className="nav-link" to="/">
            {/* &#x1f3e0; Home */}
            Home
          </FadeLink>
        </LinksContainer>
        {links}
        <ThemeToggle>
          <ThemeSwitcherButton onClick={changeTheme} className="theme-switcher">
            {themeIcon}
          </ThemeSwitcherButton>
        </ThemeToggle>
      </NavContainer>
      <div />
    </StyledNav>
  )
}

export default Navigation
