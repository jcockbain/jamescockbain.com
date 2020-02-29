import React from "react"

const errorPanel = (props: any) => {
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

export default errorPanel
