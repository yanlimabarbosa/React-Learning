import { useState } from "react"

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    hobby: "play videogames",
  })

  const displayPerson = () => {
    setPerson({ name: "Peter", age: "40", hobby: "listen to musics" })
  }

  const { name, age, hobby } = person
  return (
    <>
      <h1 style={{ marginBottom: "4rem" }}>UseState Object Example</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>Enjoys: {hobby}</h2>
      <button
        style={{ marginTop: "2rem" }}
        className="btn"
        type="button"
        onClick={displayPerson}
      >
        Show other person
      </button>
    </>
  )
}

export default UseStateObject
