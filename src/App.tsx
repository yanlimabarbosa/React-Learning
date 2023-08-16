import "bootstrap/dist/css/bootstrap.min.css"
import ExpenseList from "./expense-tracker/components/ExpenseList"
import { useState } from "react"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"
import ExpenseForm from "./expense-tracker/components/ExpenseForm"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Groceries" },
    { id: 4, description: "ddd", amount: 30, category: "Entertainment" },
  ])

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  )
}
export default App
