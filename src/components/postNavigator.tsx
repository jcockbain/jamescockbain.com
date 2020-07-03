import React from "react"
import styled from "styled-components"
import { FadeLink } from "../elements/link"

interface Props {
  next: any
  previous: any
}

const PostNavigator = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const Navigator = ({ next, previous }: Props) => {
  return (
    <PostNavigator>
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
  )
}

export default Navigator
