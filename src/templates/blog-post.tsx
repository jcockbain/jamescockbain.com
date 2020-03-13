import { graphql, PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import { Query, SitePageContext } from "../graphql-types"

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const BlogPostTemplate = (props: Props) => {
  const data = props.data!
  const post = data.markdownRemark!
  const excerpt = post.excerpt!
  const frontmatter = post.frontmatter!
  const html = post.html!
  const { previous, next } = props.pageContext
  return (
    <Layout location={props.location}>
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <h1 className="blog-title">{post.frontmatter!.title}</h1>
      <p className="date">{frontmatter.date}</p>
      <div className="blog-tags">
        {frontmatter!.tags!.map((tag: string) => (
          <div className="blog-tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <hr />
      <ul className="post-navigator">
        <li>
          {previous && (
            <FadeLink to={previous.fields!.slug!} rel="prev">
              ← {previous.frontmatter!.title}
            </FadeLink>
          )}
        </li>
        <li>
          {next && (
            <FadeLink to={next.fields!.slug!} rel="next">
              {next.frontmatter!.title} →
            </FadeLink>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
