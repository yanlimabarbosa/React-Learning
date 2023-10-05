import React, { useState } from "react"
import data from "./data"
import { nanoid } from "nanoid"

function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    let generatedText = data.slice(0, amount)

    if (amount > 10) {
      // Calculate how many times you want to repeat the generated text
      const repeatCount = Math.floor(amount / generatedText.length)
      console.log(amount)
      console.log(generatedText.length)
      console.log(repeatCount)
      // Create an array by repeating the generated text
      const repeatedText = Array(repeatCount).fill(generatedText).flat()
      console.log(repeatedText)

      // Calculate how many additional paragraphs are needed
      const remainingCount = amount % generatedText.length
      console.log(remainingCount)

      // Add any additional paragraphs from the beginning of the generated text
      for (let i = 0; i < remainingCount; i++) {
        repeatedText.push(generatedText[i])
      }

      setText(repeatedText)
    } else {
      setText(generatedText)
    }
  }

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          min="1"
          step="1"
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
