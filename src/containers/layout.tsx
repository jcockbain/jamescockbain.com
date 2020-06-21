import { PageRendererProps } from "gatsby"
import React, { ReactNode, useContext } from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import Footer from "../components/footer"
import Navigation from "../components/navigation"

import darkTheme from "../themes/dark"
import lightTheme from "../themes/light"

import { ThemeContext } from "../context/themeProvider"
import { device } from "../styles/device"
import { rhythm } from "../utils/typography"

interface Props extends PageRendererProps {
  children: ReactNode
  title?: string | null
  titleEmoji?: string | null
}

const Content = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(36)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`

const PageTitle = styled.h1`
  padding: 0.25rem 0;
  @media ${device.laptop} {
    padding-bottom: 0.5rem 0;
  }
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
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Content>
          <Navigation changeTheme={toggleTheme} isDark={isDark} />
          <main>
            <PageTitle>
              {title} {titleEmoji}
            </PageTitle>
            {children}
          </main>
          <Footer />
        </Content>
      </ThemeProvider>
    </>
  )
}
