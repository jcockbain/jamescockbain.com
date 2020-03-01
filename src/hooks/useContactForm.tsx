import { useState } from "react"

const useContactForm = (callback: any) => {
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
    name: "",
    subject: "",
  })

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault()
    }
    callback()
  }
  const handleInputChange = (event: any) => {
    event.persist()
    setInputs(currentInputs => ({
      ...currentInputs,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    handleInputChange,
    handleSubmit,
    inputs,
  }
}
export default useContactForm
