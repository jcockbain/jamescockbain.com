import React, { useContext } from "react"
import { ThemeContext } from "../context/themeProvider"

import ReCAPTCHA from "react-google-recaptcha"

interface Props {
  onSubmit: (status: boolean) => void
}

const Recaptcha = ({ onSubmit }: Props) => {
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

export default Recaptcha
