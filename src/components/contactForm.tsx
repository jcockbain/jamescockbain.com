import React from "react"
import useContactForm from "../hooks/useContactForm"

interface ContactFormProps {
  handleSubmit: (inputs: any) => void
}

const Contact = (props: ContactFormProps) => {
  const { handleSubmit, inputs, handleInputChange } = useContactForm(() =>
    props.handleSubmit(inputs)
  )

  return (
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
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contact
