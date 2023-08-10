import ListGroup from "./components/ListGroup"

const handleSelectItem = (item: string) => {
  console.log(item)
}

function App() {
  let cities = ["New York", "San Francisco", "Tokyo"]

  return (
    <div>
      <ListGroup
        onSelectItem={handleSelectItem}
        items={cities}
        heading={"cities"}
      ></ListGroup>
    </div>
  )
}

export default App
