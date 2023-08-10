import ListGroup from "./components/ListGroup"
import { BsFillCalendarFill } from "react-icons/bs"

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
      <BsFillCalendarFill color="red" size="40" />
    </div>
  )
}

export default App
