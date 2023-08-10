import DismissAlert from "./components/DismissAlert"
import Button from "./components/Button"
import { useState } from "react"

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      {alertVisible && (
        <DismissAlert onClose={() => setAlertVisibility(false)}>
          My Alert
        </DismissAlert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>ButtonNN</Button>
    </div>
  )
}

export default App
