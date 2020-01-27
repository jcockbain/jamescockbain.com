import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import { rhythm, styledScale } from "../utils/typography"
import { FadeLink } from "./link"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
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
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`

const StyledList = styled.div`
  float: right;
`

export const Layout = (props: Props) => {
  const { location, title, children } = props
  const rootPath = `/`
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

  const HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3

  const links = (
    <StyledList>
      {data.site.siteMetadata.menuLinks.map(link => (
        <StyledLink
          key={link.name}
          style={{ textShadow: `none`, backgroundImage: `none` }}
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
        <FadeLink
          to="/"
          style={{ textShadow: `none`, backgroundImage: `none` }}
        >
          <h3 style={{ display: `inline` }}>jcockbain.dev</h3>
        </FadeLink>
        {links}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Content>
  )
}
