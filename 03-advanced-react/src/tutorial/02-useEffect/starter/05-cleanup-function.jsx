import { useEffect, useState } from "react"

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log("render")
  return (
    <h2>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </h2>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // anything
    }
    window.addEventListener("scroll", someFunc)
    return () => window.removeEventListener("scroll", someFunc)
  }, [])

  return (
    <div>
      <h2>Test</h2>
    </div>
  )
}

export default CleanupFunction
