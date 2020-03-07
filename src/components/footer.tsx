import { graphql, useStaticQuery } from "gatsby"
import React from "react"

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
      <div className="footer-container">
        <div className="footer-links">
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
        <div className="build-info">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
