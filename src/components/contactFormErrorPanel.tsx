import React from "react"

interface Props {
  reset: () => void
}

const contactFormErrorPanel = (props: Props) => {
  const { reset } = props
  return (
    <div className="response-panel">
      <h2>Error submitting form. &#128546;</h2>
      <p>Try again later, or get in touch elsewhere.</p>
      <button type="submit" onClick={reset}>
        Back
      </button>
    </div>
  )
}

export default contactFormErrorPanel
