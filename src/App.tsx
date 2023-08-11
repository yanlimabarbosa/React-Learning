import { useState } from "react"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"

function App() {
  const [cartItems, SetCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ])

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => SetCartItems([])}></Cart>
    </div>
  )
}

export default App
