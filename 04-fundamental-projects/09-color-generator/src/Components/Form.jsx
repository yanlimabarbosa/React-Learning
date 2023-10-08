import { useState } from "react"

const Form = ({ addColor, colors }) => {
  const [color, setColor] = useState("#f15025")
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className="container">
      <h3>Color Generator</h3>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          style={({ backgroundColor: color }, { color: color })}
          value={color}
          onChange={(e) => {
            setColor(e.target.value)
          }}
        />
        <input
          type="text"
          value={color}
          placeholder="#f15025"
          onChange={(e) => {
            setColor(e.target.value)
          }}
        />

        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}
export default Form
