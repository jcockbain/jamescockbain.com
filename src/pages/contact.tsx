import { PageRendererProps } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import ContactForm from "../components/contactForm"
import ErrorPanel from "../components/contactFormErrorPanel"
import LoadingPanel from "../components/contactFormLoadingPanel"
import FormSubmittedPanel from "../components/contactFormSubmittedPanel"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { device } from "../styles/device"
import { ContactFormInputs } from "../types"

import axios from "axios"

const FormContainer = styled.div`
  border-radius: 4px;
  background-color: ${props => props.theme.surface};
  padding: 20px;
  border: 2px solid ${props => props.theme.formBorder};

  /* @media ${device.laptop} {
    margin-bottom: 20px;
  } */

  .response-panel {
    margin: auto;
    display: block;
    text-align: center;
  }

  button {
    display: block;
    width: 50%;
    margin: 0 auto;
    border: 2px solid ${props => props.theme.formBorder};
    border-radius: 8px;
    padding: 12px 20px;
    color: ${props => props.theme.onPrimary};
    background-color: ${props => props.theme.primary};

    &:enabled {
      cursor: pointer;

      &:hover,
      &:active {
        background: $hover;
        opacity: 0.7;
      }
    }

    :disabled {
      opacity: 0.38;
    }
  }
`

type Props = PageRendererProps

const Contact = (props: Props) => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const signUp = (inputs: ContactFormInputs) => {
    setLoading(true)
    axios
      .post("https://getform.io/f/2184f9ff-4f69-489d-88d5-95e3d5fcbd5d", inputs)
      .then(response => {
        setLoading(false)
        if (response.status === 200) {
          setSubmitted(true)
        } else {
          setError(true)
        }
      })
      .catch(() => {
        setError(true)
      })
  }

  const reset = () => {
    setSubmitted(false)
    setLoading(false)
    setError(false)
  }

  let mainPanel = <ContactForm handleSubmit={signUp} />
  if (submitted) {
    mainPanel = <FormSubmittedPanel reset={reset} />
  } else if (error) {
    mainPanel = <ErrorPanel reset={reset} />
  } else if (loading) {
    mainPanel = <LoadingPanel />
  }

  return (
    <Layout location={props.location} title="Contact">
      <SEO title="Contact Me" />
      <FormContainer>{mainPanel}</FormContainer>
    </Layout>
  )
}

export default Contact
