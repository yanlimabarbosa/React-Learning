import { useState } from "react"

const SearchForm = () => {
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault()
          const searchValue = e.target.elements.search.value
          if (!searchValue) return
          console.log(searchValue)
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  )
}
export default SearchForm
