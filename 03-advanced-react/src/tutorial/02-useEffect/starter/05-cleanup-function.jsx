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
    console.log("rendered")
    const intId = setInterval(() => {
      console.log("hello from interval")
    }, 1000)
    return () => {
      clearInterval(intId)
      console.log("cleanup")
    }
  }, [])

  return (
    <div>
      <h2>Test</h2>
    </div>
  )
}

export default CleanupFunction
