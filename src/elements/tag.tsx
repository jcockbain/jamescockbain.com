import React from "react"
import styled from "styled-components"
import TagLabel from "./tagLabel"

const Tag = styled.div`
  background-color: ${props => props.theme.tag};
  color: ${props => props.theme.onBackground};
  border-radius: 4px;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`

interface Props {
  text: string
}

const BlogTag = ({ text }: Props) => (
  <Tag>
    <TagLabel text={text} />
  </Tag>
)

export default BlogTag
