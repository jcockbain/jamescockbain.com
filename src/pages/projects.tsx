import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import Project from "../components/project"
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

  const projects = [1, 2, 3, 4]

  const projectCards = projects.map(p => <Project key={p} />)

  return (
    <Layout location={props.location} title={data.site.siteMetadata.title}>
      <SEO title="Projects" />
      <h1>Projects</h1>
      {projectCards}
    </Layout>
  )
}

export default Projects
