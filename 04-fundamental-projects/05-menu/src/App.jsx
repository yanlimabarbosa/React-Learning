import { useState } from "react"
import Title from "./Components/Title"
import menu from "./data"
import Menu from "./Menu"
import Categories from "./Components/Categories"

const allCategories = ["all", ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setmenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category == "all") {
      setmenuItems(menu)
      return
    }
    setmenuItems(menu.filter((item) => item.category === category))
  }
  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App

// id, title, category, price, img, desc
