import { useState } from "react"
import { toast } from "react-toastify"

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) {
      toast.error("Please provide a value!")
      return
    }
    addItem(newItemName)
    setNewItemName("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="input-group">
        <h4 className="form-title">Daily Tasks</h4>
        <div className="form-control">
          <input
            type="text"
            className="input"
            value={newItemName}
            placeholder="Clean the house..."
            onChange={(event) => {
              setNewItemName(event.target.value)
            }}
          />
          <button type="submit" className="button--submit">
            Add Item
          </button>
        </div>
      </form>
    </>
  )
}
export default Form
