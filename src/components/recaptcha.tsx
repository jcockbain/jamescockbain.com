import React from "react"
import { ThemeContext } from "../context/themeProvider"

import ReCAPTCHA from "react-google-recaptcha"

const recaptcha = (props: any) => {
  const { onSubmit } = props
  const recaptchaKey = process.env.GATSBY_RECAPTCHA_KEY || "no_key"

  const submitTrue = () => {
    onSubmit(true)
  }

  const submitFalse = () => {
    onSubmit(true)
  }

  return (
    <ThemeContext.Consumer>
      {context => {
        return (
          <div className="recaptcha-wrapper">
            <ReCAPTCHA
              sitekey={recaptchaKey}
              theme={context.isDark ? "dark" : "light"}
              style={{ display: "inline-block" }}
              onChange={submitTrue}
              onExpired={submitFalse}
            />
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default recaptcha
