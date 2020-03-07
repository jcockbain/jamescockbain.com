import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import RecaptchaForm from "../components/recaptcha"
import useContactForm from "../hooks/useContactForm"

interface ContactFormProps {
  handleSubmit: (inputs: any) => void
}

const ContactForm = (props: ContactFormProps) => {
  const [recaptchaComplete, setRecaptchaComplete] = useState(false)

  const { handleSubmit, inputs, handleInputChange } = useContactForm(() =>
    props.handleSubmit(inputs)
  )

  const handleRecaptcha = (status: boolean) => {
    setRecaptchaComplete(status)
  }

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
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
            rows={5}
            onChange={handleInputChange}
            value={inputs.message}
          />
        </label>
        <RecaptchaForm
          size={isTabletOrMobile ? "compact" : "mobile"}
          onSubmit={handleRecaptcha}
        />
        <button type="submit" disabled={!recaptchaComplete}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
