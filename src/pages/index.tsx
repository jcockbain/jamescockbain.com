import { PageRendererProps } from "gatsby"
import React from "react"
import ProfilePic from "../assets/profile-picture.jpg"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import Card from "react-bootstrap/Card"
type Props = PageRendererProps

const HomePage = (props: Props) => {
  return (
    <Layout location={props.location} title="Home">
      <SEO title="home" />
      <Card>
        <Card.Header>
          <h3>Hi, I'm James &#x1f44b; </h3>
        </Card.Header>
        <Card.Img src={ProfilePic} alt="A picture of me!" />
        <p>I'm a software developer, working for IBM.</p>
        <p>
          You can read more about me, and why I started this site,{" "}
          <FadeLink to="/pages/about-me">here</FadeLink>.
        </p>
      </Card>
    </Layout>
  )
}

export default HomePage
