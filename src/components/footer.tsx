import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  color: ${props => props.theme.onBackground};
`

const Footer = () => {
  const query = graphql`
    {
      site {
        siteMetadata {
          social {
            github
            linkedin
            twitter
            medium
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)

  const twitter = `https://www.twitter.com/${data.site.siteMetadata.social.twitter}`
  const github = `https://www.github.com/${data.site.siteMetadata.social.github}`
  const linkedin = `https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`
  const medium = `https://medium.com/${data.site.siteMetadata.social.medium}`

  return (
    <footer>
      <FooterContainer>
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer">
            github
          </a>{" "}
          &bull;{" "}
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            twitter
          </a>{" "}
          &bull;{" "}
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            linkedin
          </a>{" "}
          &bull;{" "}
          <a href={medium} target="_blank" rel="noopener noreferrer">
            medium
          </a>
        </div>
      </FooterContainer>
    </footer>
  )
}

export default Footer
