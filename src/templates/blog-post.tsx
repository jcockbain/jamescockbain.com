import { graphql, PageRendererProps } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import { Query, SitePageContext } from "../graphql-types"

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const BlogTag = styled.div`
  background-color: ${props => props.theme.tag};
  color: ${props => props.theme.onBackground};
  border-radius: 4px;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`

const Date = styled.p`
  margin: 0.5rem 0;
`

const PostNavigator = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const BlogTags = styled.div`
  display: flex;
  margin: 0.5rem 0;
`

const BlogContent = styled.div`
  margin-top: 1rem;

  blockquote {
    padding: 20px;
    margin: 20px 0;
    border: 1px solid ${props => props.theme.formBorder};
    border-radius: 3px;

    border-left: 4px solid ${props => props.theme.calloutBorder};
    background-color: ${props => props.theme.surface};
  }

  blockquote h4 {
    margin-top: 0;
    margin-bottom: 5px;
  }

  blockquote p:last-child {
    margin-bottom: 0;
  }

  blockquote code {
    border-radius: 3px;
  }

  blockquote + blockquote {
    margin-top: -5px;
  }
`

const BlogPostTemplate = (props: Props) => {
  const data = props.data!
  const post = data.markdownRemark!
  const excerpt = post.excerpt!
  const frontmatter = post.frontmatter!
  const html = post.html!
  const timeToRead = post.timeToRead
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={post.frontmatter!.title}>
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <Date>
        {`${frontmatter.date} `} &bull;
        {` ${timeToRead} min read`}
      </Date>
      <BlogTags>
        {frontmatter!.tags!.map((tag: string) => (
          <BlogTag key={tag}>{tag}</BlogTag>
        ))}
      </BlogTags>
      <Img fluid={post.frontmatter!.featuredImage!.childImageSharp!.fluid} />
      <BlogContent dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <PostNavigator className="post-navigator">
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
      </PostNavigator>
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
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
