import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import ContactForm from "../components/contactForm"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

type Props = PageRendererProps

const Projects = (props: Props) => {
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
      <SEO title="Contact Me" />
      <ContactForm />
    </Layout>
  )
}

export default Projects
