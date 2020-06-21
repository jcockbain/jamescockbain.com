import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import { Layout } from "../containers/layout"
import { SEO } from "../elements/seo"

type Props = PageRendererProps

export const NotFoundPage = (props: Props) => {
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
    <Layout location={props.location}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... </p>
    </Layout>
  )
}

export default NotFoundPage
