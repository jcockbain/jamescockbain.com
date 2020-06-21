import { graphql, PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../containers/layout"
import { SEO } from "../elements/seo"
import { Query, SitePageContext } from "../graphql-types"

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const PageTemplate = (props: Props) => {
  const data = props.data!
  const post = data.markdownRemark!
  const excerpt = post.excerpt!
  const frontmatter = post.frontmatter!
  const html = post.html!

  return (
    <Layout location={props.location} title={frontmatter.title}>
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
    }
  }
`
