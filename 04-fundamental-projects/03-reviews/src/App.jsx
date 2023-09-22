import people from "./data"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const nextBtn = () => {
    setIndex((index) => {
      const newIndex = (index + 1) % people.length
      return newIndex
    })
    // if (index < people.length - 1) {
    //   setIndex(index + 1)
    // } else {
    //   setIndex(0)
    // }
  }

  const prevBtn = () => {
    setIndex((index) => {
      const newIndex = (index - 1 + people.length) % people.length
      return newIndex
    })
    // if (index > 0) {
    //   setIndex(index - 1)
    // } else {
    //   setIndex(people.length - 1)
    // }
  }

  const randomBtn = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    const newIndex = randomNumber % people.length
    setIndex(newIndex)
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h2 className="author">{name}</h2>
        <h2 className="job">{job}</h2>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevBtn}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextBtn}>
            <FaChevronRight />
          </button>
        </div>
        <div>
          <button className="btn btn-hipster" onClick={randomBtn}>
            RANDOM
          </button>
        </div>
      </article>
    </main>
  )
}
export default App
