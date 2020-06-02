import { PageRendererProps } from "gatsby"
import React from "react"
import ProfilePic from "../assets/profile-picture.jpg"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
type Props = PageRendererProps

const HomePage = (props: Props) => {
  return (
    <Layout location={props.location} title="Home">
      <SEO title="home" />
      <div className="card">
        <div className="card-body">
          <h2>Hi, I'm James &#x1f44b; </h2>
          <p>I'm a software developer, working for IBM.</p>
          <img
            src={ProfilePic}
            className="profile-picture"
            alt="A picture of me!"
          />
          <p>
            You can read more about me,{" "}
            <FadeLink to="/pages/about-me">here</FadeLink>.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
