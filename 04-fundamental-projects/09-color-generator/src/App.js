import React, { useState } from "react"
import Form from "./Components/Form"
import ColorList from "./Components/ColorList"
import Values from "values.js"
import { ToastContainer, toast } from "react-toastify"

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(5))

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(5)
      setColors(newColors)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      <Form addColor={addColor} colors={colors} />
      <ColorList colors={colors} />
      <ToastContainer />
    </div>
  )
}

export default App
