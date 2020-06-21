import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/themeProvider"
import { device } from "../styles/device"

import ReCAPTCHA from "react-google-recaptcha"

const RecaptchaWrapper = styled.div`
  text-align: center;
  transform: scale(0.8);
  transform-origin: 0 0;
  -webkit-transform: scale(0.8);
  -webkit-transform-origin: 0 0;

  @media ${device.laptop} {
    transform: scale(1);
    -webkit-transform: scale(1);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
  }
`

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
    <RecaptchaWrapper>
      <ReCAPTCHA
        sitekey={recaptchaKey}
        theme={isDark ? "dark" : "light"}
        style={{ display: "inline-block" }}
        onChange={submitTrue}
        onExpired={submitFalse}
      />
    </RecaptchaWrapper>
  )
}

export default Recaptcha
