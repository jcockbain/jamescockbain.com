import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import Tags from "../components/tags"
import { MarkdownRemark } from "../graphql-types"

import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const [categories, setCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const updateCategories = (newCategories: string[]) => {
    setCategories(newCategories)
  }

  const updateSearchTerm = (e: any) => {
    setSearchTerm(e.target.value)
  }

  const filterPosts = (unfilteredPosts: Array<{ node: MarkdownRemark }>) =>
    unfilteredPosts
      .filter(({ node }: { node: MarkdownRemark }) =>
        node
          .frontmatter!.title!.toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      .filter(
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
            timeToRead
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
      <Tags
        updateCategories={updateCategories}
        currentCategories={categories}
      />
      <div className="search-container">
        <input
          className="search"
          type="text"
          name="searchTerm"
          value={searchTerm}
          placeholder="Search posts..."
          onChange={updateSearchTerm}
        />
      </div>
      <div className="container">
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
            <FadeLink key={slug} className="blog-title m-3" to={slug}>
              <Card className="blog-summary">
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Subtitle className="date">
                    {`${frontmatter.date} `} &bull;
                    {` ${node.timeToRead} min read`}
                  </Card.Subtitle>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: frontmatter.description || excerpt,
                    }}
                  />
                  <div className="blog-tags">
                    {frontmatter!.tags!.map((tag: string) => (
                      <Badge className="blog-tag" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </FadeLink>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex
