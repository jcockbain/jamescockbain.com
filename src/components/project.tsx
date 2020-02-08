import { Card } from "@material-ui/core"
import { styled } from "@material-ui/core"
import React from "react"

// const StyledDiv = styled.p`
//   margin: ${rhythm(1)};
// `

const ProjectCard = styled(Card)({
  border: 10,
  borderRadius: 10,
  color: "black",
  margin: "20px",
  padding: "30px",
})

const Project = () => {
  return (
    <ProjectCard>
      <p>I'm a card yay</p>
    </ProjectCard>
  )
}

export default Project
