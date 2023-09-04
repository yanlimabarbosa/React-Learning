import { data } from "../../../data"
import { useState } from "react"

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  function handleRemoveItem(idToRemove) {
    const newPeople = people.filter((people) => people.id !== idToRemove)
    setPeople(newPeople)
  }
  function handleRemoveList(people) {
    setPeople([])
  }

  return (
    <div className="container">
      {people.map((people) => {
        const { id, name } = people
        return (
          <div key={id}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h2>{`${name}\u00a0`} </h2>
              <h2>{id}</h2>
            </div>
            <button
              className="btn"
              style={{ marginBottom: "2rem" }}
              type="button"
              onClick={() => handleRemoveItem(id)}
            >
              Remove Item
            </button>
          </div>
        )
      })}{" "}
      <button
        type="button"
        style={{ marginTop: "2rem", backgroundColor: "red" }}
        className="btn"
        onClick={() => handleRemoveList(people)}
      >
        Remove Entire List
      </button>
    </div>
  )
}

export default UseStateArray
