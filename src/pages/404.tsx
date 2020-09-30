import { PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../containers/layout"
import { SEO } from "../elements/seo"

type Props = PageRendererProps

export const NotFoundPage = (props: Props) => {
  return (
    <Layout location={props.location} title="404">
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... </p>
    </Layout>
  )
}

export default NotFoundPage
