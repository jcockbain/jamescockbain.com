import { PageRendererProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import projects from "../../content/projects.json"
import { Layout } from "../containers/layout"
import Card from "../elements/card"
import Flex from "../elements/flex"
import ProjectIcons from "../elements/projectIcons"
import { SEO } from "../elements/seo"
import Tag from "../elements/tag"

const CardP = styled.p`
  margin: 1rem 0;
`

const ProjectsPage = (props: PageRendererProps) => {
  return (
    <Layout location={props.location} title="Projects">
      <SEO title="Projects" />
      {projects.content.map(project => (
        <Card key={project.name}>
          <h2>{project.name}</h2>
          <CardP>{project.summary}</CardP>
          <Flex>
            {project.technologies.map(tech => (
              <Tag key={tech} text={tech} />
            ))}
          </Flex>
          <ProjectIcons
            codeLink={project.codeLink}
            deploymentLink={project.deploymentLink}
          />
        </Card>
      ))}
    </Layout>
  )
}

export default ProjectsPage
