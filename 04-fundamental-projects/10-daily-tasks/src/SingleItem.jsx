import { useState } from "react"

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
          color: item.completed ? "hsl(210, 22%, 49%)" : "inherit",
        }}
      >
        {item.name}
      </p>
      <button
        onClick={() => removeItem(item.id)}
        type="button"
        className="btn remove-btn"
      >
        Delete
      </button>
    </div>
  )
}
export default SingleItem
