import React from "react"
import { ClipLoader } from "react-spinners"

const contactFormLoadingPanel = () => (
  <div className="response-panel">
    <ClipLoader />
    <div>Submitting Form</div>
  </div>
)

export default contactFormLoadingPanel
