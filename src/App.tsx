import ListGroup from "./components/ListGroup"

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"]
  let fruits = ["Avocado", "Apple", "Banana"]

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup
        items={cities}
        onSelectItem={handleSelectItem}
        heading={"Cities"}
      />
      <ListGroup
        items={fruits}
        onSelectItem={handleSelectItem}
        heading={"Fruits"}
      />
    </div>
  )
}

export default App
