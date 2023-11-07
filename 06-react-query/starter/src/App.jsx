import { ToastContainer } from "react-toastify"
import { nanoid } from "nanoid"
import Form from "./Form"
import Items from "./Items"
import { useState } from "react"

const App = () => {
  return (
    <section className="section-center">
      <ToastContainer position="top-right" />
      <Form />
      <Items />
    </section>
  )
}
export default App
