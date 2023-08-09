import ListGroup from "./components/ListGroup"

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"]
  let fruits = ["Avocado", "Apple", "Banana"]

  return (
    <div>
      <ListGroup items={cities} heading={"Cities"} />
      <ListGroup items={fruits} heading={"Fruits"} />
    </div>
  )
}

export default App
