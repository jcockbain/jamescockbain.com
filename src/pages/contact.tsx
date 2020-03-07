import { PageRendererProps } from "gatsby"
import React, { useState } from "react"
import ContactForm from "../components/contactForm"
import ErrorPanel from "../components/contactFormErrorPanel"
import LoadingPanel from "../components/contactFormLoadingPanel"
import FormSubmittedPanel from "../components/contactFormSubmittedPanel"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

import axios from "axios"

type Props = PageRendererProps

const Contact = (props: Props) => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const signUp = (inputs: any) => {
    setLoading(true)
    axios
      .post("https://getform.io/f/e5e0893d-bc5d-4a10-9450-3de72bc87", inputs)
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
    <Layout location={props.location} title="Contact Me">
      <SEO title="Contact Me" />
      <div className="form-container">{mainPanel}</div>
    </Layout>
  )
}

export default Contact
