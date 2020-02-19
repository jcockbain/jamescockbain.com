import React from "react"

const Contact = () => {
  return (
    <div className="form-container">
      <form
        method="post"
        action="https://getform.io/f/e5e0893d-bc5d-4a10-9450-3de72bc87cbf"
        className="contact-form"
      >
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows={5} />
        </label>
        <button type="submit">Submit</button>
        <input type="reset" value="Clear" />
      </form>
    </div>
  )
}

export default Contact
