import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

type Props = PageRendererProps

const StyledDiv = styled.div`
  margin-top: 5%;
  padding: 2%;
`

const AboutMe = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout location={props.location} title={data.site.siteMetadata.title}>
      <SEO title="About me" />
      <StyledDiv>
        <p>
          I'm an IBM Cloud software developer holding a master's degree in
          physics, I enjoy applying my analytical and problem-solving skills in
          the dynamic technology industry. I currently specialise in Node.js and
          have professional experience working with Go, Docker and React. I also
          have experience with Python, Kubernetes and Typescript.
        </p>
      </StyledDiv>
      <Bio />
    </Layout>
  )
}

export default AboutMe
