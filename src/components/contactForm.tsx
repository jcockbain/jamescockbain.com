import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
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

  console.log(inputs)

  return (
    <div className="p-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required={true}
            type="text"
            placeholder="Enter Name"
            onChange={handleInputChange}
            // value={inputs.name}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required={true}
            type="email"
            placeholder="Enter Email"
            onChange={handleInputChange}
            // value={inputs.email}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            required={false}
            type="text"
            placeholder="Enter Subject"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" onChange={handleInputChange} rows="5" />
        </Form.Group>
        <RecaptchaForm onSubmit={handleRecaptcha} />
        <Button
          className="primary btn"
          variant="primary"
          type="submit"
          size="lg"
          // disabled={!recaptchaComplete}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
