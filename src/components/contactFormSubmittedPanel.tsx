import React from "react"

interface Props {
  reset: () => void
}

const contactFormSubmittedPanel = ({ reset }: Props) => {
  return (
    <div className="response-panel">
      <h2>Form Submitted &#x1F389;</h2>
      <p>Thank you for getting in touch!</p>
      <button type="submit" onClick={reset}>
        Back
      </button>
    </div>
  )
}

export default contactFormSubmittedPanel
