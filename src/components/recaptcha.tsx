import React, { useContext } from "react"
import { ThemeContext } from "../context/themeProvider"

import ReCAPTCHA from "react-google-recaptcha"

const recaptcha = (props: any) => {
  const { onSubmit } = props
  const recaptchaKey = process.env.GATSBY_RECAPTCHA_KEY || "no_key"

  const { isDark } = useContext(ThemeContext)

  const submitTrue = () => {
    onSubmit(true)
  }

  const submitFalse = () => {
    onSubmit(true)
  }

  return (
    <div className="recaptcha-wrapper">
      <ReCAPTCHA
        sitekey={recaptchaKey}
        theme={isDark ? "dark" : "light"}
        style={{ display: "inline-block" }}
        onChange={submitTrue}
        onExpired={submitFalse}
      />
    </div>
  )
}

export default recaptcha
