import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"

const HomePage = (props: PageRendererProps) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "assets/profile-picture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout location={props.location} title="Home">
      <SEO title="home" />
      <div className="card">
        <div className="card-body">
          <h2>Hi, I'm James &#x1f44b; </h2>
          <p>I'm a software developer, working for IBM.</p>
          <Img fluid={data.file.childImageSharp.fluid} alt="A picture of me!" />
          <p>
            You can read more about me,{" "}
            <FadeLink to="/pages/about-me">here</FadeLink>.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
