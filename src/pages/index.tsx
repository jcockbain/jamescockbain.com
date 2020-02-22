import { PageRendererProps } from "gatsby"
import React from "react"
import ProfilePic from "../assets/profile-picture.jpg"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
type Props = PageRendererProps

const HomePage = (props: Props) => {
  return (
    <Layout location={props.location}>
      <SEO title="home" />
      <div
        className="container"
        style={{
          textAlign: `center`,
        }}
      >
        <h1>Hi, I'm James</h1>
        <p>I'm a full stack software developer, working for IBM.</p>
        <img
          src={ProfilePic}
          alt="a nice picture of me"
          style={{
            display: "block",
            borderRadius: `10px`,
            margin: `auto`,
            width: `50%`,
            marginBottom: `2em`,
          }}
        />
        <p>
          You can read more about me, and why I started this site,{" "}
          <FadeLink to="/pages/me">here</FadeLink>.
        </p>
      </div>
    </Layout>
  )
}

export default HomePage
