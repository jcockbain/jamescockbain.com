import React from "react"
import { FaGithub, FaInfo, FaSignInAlt } from "react-icons/fa"
import styled from "styled-components"
import Flex from "../elements/flex"
import IconLabel from "../elements/iconLabel"

const StyledIcon = styled.div`
  margin: 0 1rem;

  display: inline-block;
`

interface Props {
  codeLink: string
  deploymentLink: string
}

export default function ProjectIcons({ codeLink, deploymentLink }: Props) {
  return (
    <Flex>
      {codeLink && (
        <StyledIcon>
          <a target="_blank" rel="noopener noreferrer" href={codeLink}>
            <IconLabel text="Code" />
            <FaGithub />
          </a>
        </StyledIcon>
      )}
      {deploymentLink && (
        <StyledIcon>
          <a target="_blank" rel="noopener noreferrer" href={deploymentLink}>
            <IconLabel text="Deployment" />
            <FaSignInAlt />
          </a>
        </StyledIcon>
      )}
      {/* <ProjectIcon target="_blank" rel="noopener noreferrer" href={codeLink}>
          More Info
          <FaInfo />
        </ProjectIcon> */}
    </Flex>
  )
}
