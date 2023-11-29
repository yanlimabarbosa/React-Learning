import { Form, redirect } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter"

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const response = await axios.post(newsletterUrl, data)

  toast.success(response.data.msg)
  return redirect("/")
}

const Newsletter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          required
          defaultValue="Test"
        />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          required
          defaultValue="smith"
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        Submit
      </button>
    </Form>
  )
}
export default Newsletter
