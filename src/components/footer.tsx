import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { rhythm } from "../utils/typography"

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
    <footer className="footer">
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
    </footer>
  )
}

export default Footer
