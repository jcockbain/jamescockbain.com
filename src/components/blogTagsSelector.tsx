import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import TagLabel from "../elements/tagLabel"

interface Tag {
  tag: string
  totalCount: number
}

const TagSelector = styled.div`
  background-color: ${props => props.theme.tag};
  color: ${props => props.theme.onBackground};
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  margin: 0.5rem 0.8rem 0.5rem 0;
  font-size: 0.85rem;
  font-weight: bold;
  box-shadow: none;

  &:hover {
    opacity: 0.8;
  }
`

const TagsPanel = styled.div`
  display: flex;
  flex-wrap: wrap;

  .active {
    background-color: ${props => props.theme.selectedTag};
  }
`

interface Props {
  updateCategories: (categories: string[]) => void
  currentCategories: string[]
}

const Tags = ({ updateCategories, currentCategories }: Props) => {
  const pageQuery = graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `

  const modifyCategories = (selected: string) => () => {
    const newCategories = currentCategories.includes(selected)
      ? currentCategories.filter(cat => cat !== selected)
      : currentCategories.concat(currentCategories, selected)
    updateCategories(newCategories)
  }

  const data = useStaticQuery(pageQuery)
  const tags = data.allMarkdownRemark.group
  return (
    <TagsPanel>
      {tags.map((element: Tag) => (
        <TagSelector
          onClick={modifyCategories(element.tag)}
          className={`tag-selector ${
            currentCategories.includes(element.tag) ? "active" : ""
          }`}
          key={element.tag}
        >
          <TagLabel text={element.tag} />
        </TagSelector>
      ))}
    </TagsPanel>
  )
}

export default Tags
