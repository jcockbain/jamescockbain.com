import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React, { ComponentProps, forwardRef, Ref } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

type Props = PageRendererProps

const StyledDiv = styled.div`
  margin-top: 5%;
  padding: 2%;
  text-align: center;
`

const GatsbyImage = forwardRef(
  (props: ComponentProps<typeof Image>, ref: Ref<Image>) => (
    <Image {...props} ref={ref} />
  )
)

const Avatar = styled(GatsbyImage)`
  display: inline;
  margin: auto;
`

const AboutMe = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-picture.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <Layout location={props.location} title={data.site.siteMetadata.title}>
      <SEO title="About me" />
      {/* <Bio /> */}
      <StyledDiv>
        <Avatar
          fixed={data.avatar.childImageSharp.fixed}
          alt={data.author}
          imgStyle={{ borderRadius: "20%", padding: "5%" }}
        />
        <p>
          I'm an IBM Cloud software developer holding a master's degree in
          physics, I enjoy applying my analytical and problem-solving skills in
          the dynamic technology industry. I currently specialise in Node.js and
          have professional experience working with Go, Docker and React. I also
          have experience with Python, Kubernetes and Typescript.
        </p>
      </StyledDiv>
    </Layout>
  )
}

export default AboutMe
