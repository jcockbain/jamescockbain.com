import { PageRendererProps } from "gatsby"
import React from "react"
import ContactForm from "../components/contactForm"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

type Props = PageRendererProps

const Contact = (props: Props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Contact Me" />
      <ContactForm />
    </Layout>
  )
}

export default Contact
