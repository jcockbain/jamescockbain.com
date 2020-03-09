import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import Tags from "../components/tags"
import { MarkdownRemark } from "../graphql-types"

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const [categories, setCategories] = useState<string[]>([])

  const updateCategories = (newCategories: string[]) => {
    setCategories(newCategories)
  }

  const filterPosts = (unfilteredPosts: Array<{ node: MarkdownRemark }>) =>
    unfilteredPosts.filter(
      ({ node }: { node: MarkdownRemark }) =>
        node.frontmatter!.tags &&
        categories.every(cat => node.frontmatter!.tags!.includes(cat))
    )

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              template
              tags
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges
  const filteredPosts = filterPosts(posts)

  return (
    <Layout location={props.location} title="Blog Posts">
      <SEO title="Blog" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h2>Filters</h2>
      <Tags
        updateCategories={updateCategories}
        currentCategories={categories}
      />
      {filteredPosts.map(({ node }: { node: MarkdownRemark }) => {
        const frontmatter = node!.frontmatter!
        if (frontmatter.template! !== "post") {
          return
        }
        const fields = node!.fields!
        const slug = fields.slug!
        const excerpt = node!.excerpt!

        const title = frontmatter.title || fields.slug
        return (
          <FadeLink key={slug} className="blog-title" to={slug}>
            <div className="blog-summary">
              <h3>{title}</h3>
              <small className="date">{frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: frontmatter.description || excerpt,
                }}
              />
              <div className="blog-tags">
                {frontmatter!.tags!.map((tag: string) => (
                  <div className="blog-tag" key="tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </FadeLink>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
