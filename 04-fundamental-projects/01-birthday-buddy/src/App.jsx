import { useState } from "react"
import data from "./data.js"
import List from "./components/List.jsx"

const App = () => {
  const [peopleList, setPeopleList] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>{peopleList.length} birthdays today</h3>
        <List people={peopleList} />
        <button
          type="btn"
          className="btn btn-block"
          onClick={() => setPeopleList([])}
        >
          Clear List
        </button>
      </div>
    </main>
  )
}
export default App
