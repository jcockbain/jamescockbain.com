import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { Layout } from "../containers/layout"
import Card from "../elements/card"
import { FadeLink } from "../elements/link"
import { SEO } from "../elements/seo"

const CardP = styled.p`
  margin: 1rem 0;
`

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
      <SEO title="Home" />
      <Card>
        <h2>Hi, I'm James &#x1f44b; </h2>
        <CardP>
          I'm a software engineer, working for <a href="https://thoughtmachine.net/">Thought Machine</a>{" "}
          on their cloud-native core banking platform.
        </CardP>
        <Img
          className="cardImage"
          fluid={data.file.childImageSharp.fluid}
          alt="A picture of me!"
        />
        <CardP>
          I have a degree in physics and now enjoy building things with Go, Python and JavaScript. You can read more about me{" "}
          <FadeLink to="/pages/cv">here</FadeLink> &#128516;.
        </CardP>
      </Card>
    </Layout>
  )
}

export default HomePage
