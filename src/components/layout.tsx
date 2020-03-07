import { PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import { rhythm } from "../utils/typography"

interface Props extends PageRendererProps {
  children: ReactNode
  title?: string
}

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(36)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`

export const Layout = (props: Props) => {
  const { children, title } = props

  return (
    <Content>
      <Navigation />
      <main id="main-content">
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </Content>
  )
}
