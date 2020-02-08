import { Home } from "@material-ui/icons"
import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import Footer from "../components/footer"
import { rhythm, styledScale } from "../utils/typography"
import { FadeLink } from "./link"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

interface Link {
  name: string
  link: string
}

const StyledH1 = styled.h1`
  ${styledScale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

const StyledH3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

const StyledLink = styled(FadeLink)`
  display: inline-block;
  box-shadow: none;
  color: inherit;
  text-decoration: none;
  margin-right: 1rem;
`

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(36)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`

const StyledList = styled.div`
  float: right;
`

export const Layout = (props: Props) => {
  const { children } = props
  const data = useStaticQuery(graphql`
    query LayoutQuery {
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
    <StyledList>
      {data.site.siteMetadata.menuLinks.map((link: Link) => (
        <StyledLink
          key={link.name}
          style={{
            textShadow: `none`,
            backgroundImage: `none`,
            fontSize: `22px`,
          }}
          to={link.link}
        >
          {" "}
          {link.name}
        </StyledLink>
      ))}
    </StyledList>
  )

  return (
    <Content>
      <header>
        <Home />
        <FadeLink
          to="/"
          style={{
            textShadow: `none`,
            backgroundImage: `none`,
            fontSize: `24px`,
          }}
        >
          <h3 style={{ display: `inline` }}>jcockbain.dev</h3>
        </FadeLink>
        {links}
        <div />
      </header>
      <main>{children}</main>
      <Footer />
    </Content>
  )
}
