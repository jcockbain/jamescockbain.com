import path from "path"
import { MarkdownRemark } from "../graphql-types"
import { GatsbyCreatePages } from "../types"

interface Post {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      template: string
      date: string
    }
  }
}

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
}) => {
  const { createPage } = boundActionCreators

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              template
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    throw allMarkdown.errors
  }

  // Create blog posts pages.
  const edges = allMarkdown.data.allMarkdownRemark.edges

  const blogPosts = edges.filter(
    ({ node }: { node: MarkdownRemark }) =>
      node.frontmatter!.template === "post"
  )

  const pages = edges.filter(
    ({ node }: { node: MarkdownRemark }) =>
      node.frontmatter!.template === "page"
  )

  blogPosts.forEach((post: Post, index: number) => {
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      // tslint:disable-next-line:object-literal-sort-keys
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        next,
        previous,
        slug: post.node.fields.slug,
      },
    })
  })

  pages.forEach((post: Post) => {
    createPage({
      path: post.node.fields.slug,
      // tslint:disable-next-line:object-literal-sort-keys
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        slug: post.node.fields.slug,
      },
    })
  })

  return null
}
