import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Tags from "../components/tags"
import { Layout } from "../containers/layout"
import { FadeLink } from "../elements/link"
import { SEO } from "../elements/seo"
import BlogTag from "../elements/tag"
import { MarkdownRemark } from "../graphql-types"

type Props = PageRendererProps

const BlogSummary = styled.div`
  padding: 1.25rem;
  background-color: ${props => props.theme.surface};
  border-radius: 4px;
  border: 2px solid ${props => props.theme.formBorder};

  p {
    color: ${props => props.theme.onBackground};
    font-weight: 400;
    margin: 0.5rem 0;
  }

  h3 {
    margin-bottom: 0.75rem;
    color: ${props => props.theme.onBackground};
  }

  .date {
    color: ${props => props.theme.onBackground};
  }
`

const SearchBox = styled.div`
  margin: 0.5rem 0;
`

const Search = styled.input`
  padding: 0.5rem;
  border: 2px solid ${props => props.theme.formBorder};
  background: ${props => props.theme.surface};
  color: ${props => props.theme.onBackground};
  border-radius: 4px;
`

const BlogTags = styled.div`
  display: flex;
`

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
    <Layout location={props.location} title="Blog">
      <SEO title="Blog" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Tags
        updateCategories={updateCategories}
        currentCategories={categories}
      />
      <SearchBox>
        <Search
          type="text"
          name="searchTerm"
          value={searchTerm}
          placeholder="Search posts..."
          onChange={updateSearchTerm}
        />
      </SearchBox>
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
          <BlogSummary key={slug} className="blog-summary">
            <FadeLink to={slug}>
              <h3>{title}</h3>
            </FadeLink>
            <small className="date">
              {`${frontmatter.date} `} &bull;
              {` ${node.timeToRead} min read`}
            </small>
            <p
              dangerouslySetInnerHTML={{
                __html: frontmatter.description || excerpt,
              }}
            />
            <BlogTags>
              {frontmatter!.tags!.map((tag: string) => (
                <BlogTag key={tag} text={tag} />
              ))}
            </BlogTags>
          </BlogSummary>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
