import React, { useState } from "react"
import RecaptchaForm from "../components/recaptcha"
import useContactForm from "../hooks/useContactForm"
import { ContactFormInputs } from "../types"

interface ContactFormProps {
  handleSubmit: (inputs: ContactFormInputs) => void
}

const ContactForm = (props: ContactFormProps) => {
  const [recaptchaComplete, setRecaptchaComplete] = useState(false)

  const { handleSubmit, inputs, handleInputChange } = useContactForm(() =>
    props.handleSubmit(inputs)
  )

  const handleRecaptcha = (status: boolean) => {
    setRecaptchaComplete(status)
  }

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
            required={true}
            onChange={handleInputChange}
            value={inputs.name}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            id="email"
            required={true}
            onChange={handleInputChange}
            value={inputs.email}
          />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={handleInputChange}
            value={inputs.subject}
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            id="message"
            required={true}
            rows={5}
            onChange={handleInputChange}
            value={inputs.message}
          />
        </label>
        <RecaptchaForm onSubmit={handleRecaptcha} />
        <button type="submit" disabled={!recaptchaComplete}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
