import React, { useState } from "react"
import styled from "styled-components"
import RecaptchaForm from "../components/recaptcha"
import useContactForm from "../hooks/useContactForm"
import { ContactFormInputs } from "../types"

const StyledForm = styled.form`
  margin-bottom: 0;

  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid ${props => props.theme.formBorder};
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.onBackground};
    border-radius: 4px;
    margin: 8px 0;
  }

  textarea {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid ${props => props.theme.formBorder};
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.onBackground};
    border-radius: 4px;
    margin: 8px 0;
  }
`

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
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
            required={true}
            placeholder="Enter Name"
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
            placeholder="Enter Email"
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
            placeholder="Enter Subject"
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
            placeholder="Enter Message"
            onChange={handleInputChange}
            value={inputs.message}
          />
        </label>
        <RecaptchaForm onSubmit={handleRecaptcha} />
        <button type="submit" disabled={!recaptchaComplete}>
          Submit
        </button>
      </StyledForm>
    </div>
  )
}

export default ContactForm
