import React from "react"

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
    <div className="recaptcha-wrapper">
      <ReCAPTCHA
        sitekey={recaptchaKey}
        style={{ display: "inline-block" }}
        onChange={submitTrue}
        onExpired={submitFalse}
      />
    </div>
  )
}

export default recaptcha
