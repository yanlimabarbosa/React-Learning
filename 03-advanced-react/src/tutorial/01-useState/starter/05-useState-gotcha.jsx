import { useState } from "react"

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked the button")
      setValue((currentState) => currentState + 1)
    }, 3000)
  }

  return (
    <>
      <h2>{value}</h2>
      <button onClick={handleClick}>Increase</button>
    </>
  )
}

export default UseStateGotcha
