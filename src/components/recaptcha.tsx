import React, { useState } from "react"

import ReCAPTCHA from "react-google-recaptcha"

const recaptcha = (props: any) => {
  const { size, onSubmit } = props
  const recaptchaKey = process.env.GATSBY_RECAPTCHA_KEY || "no_key"

  console.log(recaptchaKey)
  const submitTrue = () => {
    onSubmit(true)
  }

  const submitFalse = () => {
    onSubmit(true)
  }

  return (
    <div className="recaptcha">
      <ReCAPTCHA
        style={{ display: "block", margin: "auto", width: "35%" }}
        size={size}
        sitekey={recaptchaKey}
        onChange={submitTrue}
        onExpired={submitFalse}
      />
    </div>
  )
}

export default recaptcha
