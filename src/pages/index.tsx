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
      <SEO title="home" />
      <Card>
        <h2>Hi, I'm James &#x1f44b; </h2>
        <CardP>
          I'm a software engineer, currently working within IBM cloud.
        </CardP>
        <Img
          className="cardImage"
          fluid={data.file.childImageSharp.fluid}
          alt="A picture of me!"
        />
        <CardP>
          You can read more about me <FadeLink to="/pages/about">here</FadeLink>
          .
        </CardP>
      </Card>
    </Layout>
  )
}

export default HomePage
