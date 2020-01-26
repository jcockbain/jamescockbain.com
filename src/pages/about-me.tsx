import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

type Props = PageRendererProps

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
      <Bio />
    </Layout>
  )
}

export default AboutMe
