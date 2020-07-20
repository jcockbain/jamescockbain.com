import { PageRendererProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Layout } from "../containers/layout"
import Card from "../elements/card"
import Flex from "../elements/flex"
import ProjectIcons from "../elements/projectIcons"
import { SEO } from "../elements/seo"
import Tag from "../elements/tag"

const CardP = styled.p`
  margin: 1rem 0;
`

const projects = [
  {
    name: "Project Reunite",
    summary:
      "A submission which placed 1st in the IBM UK Call for Code competition and was then selected in the final 5, out of 132 projects in the global contest.",
    technologies: ["React", "Mineral-UI", "Express", "Socket.io"],
    codeLink: "https://github.com/project-reunite/reunite",
    deploymentLink: "http://project-reunite.eu-gb.cf.appdomain.cloud/#/",
  },
  {
    name: "MERN TODO App",
    summary:
      "A MongoDB based app I use to track daily tasks. The Next.js client offers pages for CRUD operations on todays tasks, for managing all tasks through a calendar, and a graphical summary of tasks completed.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Next.js",
      "Heroku",
    ],
    codeLink: "https://github.com/project-reunite/reunite",
    deploymentLink: "",
  },
  {
    name: "jamescockbain.com",
    summary:
      "This website! Starting from a basic Gatsby Typescript starter, with custom styled-components styles. Deployed with Netlify.",
    technologies: ["Gatsby", "Typescript", "Styled-Components", "Netlify"],
    codeLink: "https://github.com/project-reunite/reunite",
    deploymentLink: "https://jamescockbain.com",
  },
]

const ProjectsPage = (props: PageRendererProps) => {
  return (
    <Layout location={props.location} title="Projects">
      <SEO title="Projects" />
      {projects.map(project => (
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
