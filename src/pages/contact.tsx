import { PageRendererProps } from "gatsby"
import React, { useState } from "react"
import ContactForm from "../components/contactForm"
import ErrorPanel from "../components/contactFormErrorPanel"
import LoadingPanel from "../components/contactFormLoadingPanel"
import FormSubmittedPanel from "../components/contactFormSubmittedPanel"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { ContactFormInputs } from "../types"

import axios from "axios"

type Props = PageRendererProps

const Contact = (props: Props) => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const signUp = (inputs: ContactFormInputs) => {
    setLoading(true)
    // axios
    //   .post("https://getform.io/f/2184f9ff-4f69-489d-88d5-95e3d5fcbd5d", inputs)
    //   .then(response => {
    //     setLoading(false)
    //     if (response.status === 200) {
    //       setSubmitted(true)
    //     } else {
    //       setError(true)
    //     }
    //   })
    //   .catch(() => {
    //     setError(true)
    //   })
    console.log(inputs)
    setSubmitted(true);
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
      <div className="">{mainPanel}</div>
    </Layout>
  )
}

export default Contact
