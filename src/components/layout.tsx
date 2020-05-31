import { PageRendererProps } from "gatsby"
import React, { ReactNode, useContext } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Footer from "../components/footer"
import Navigation from "../components/navigation"

import { ThemeContext } from "../context/themeProvider"
import { rhythm } from "../utils/typography"

interface Props extends PageRendererProps {
  children: ReactNode
  title?: string | null
  titleEmoji?: string | null
}

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(36)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`

export const Layout = (props: Props) => {
  const { children, title, titleEmoji } = props
  const { isDark, toggleTheme } = useContext(ThemeContext)

  const themeClass = isDark ? "content darkTheme" : "content lightTheme"
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: `theme ${themeClass}`,
        }}
      />
      <Content>
        <Navigation changeTheme={toggleTheme} isDark={isDark} />
        <main id="main-content">
          <h1 className="page-title pb-3">
            {title} {titleEmoji}
          </h1>
          {children}
        </main>
        <Footer />
      </Content>
    </>
  )
}
