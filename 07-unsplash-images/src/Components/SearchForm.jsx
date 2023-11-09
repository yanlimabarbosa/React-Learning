import { useState } from "react"
import { useGlobalContext } from "../Context/context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault()
          const searchValue = e.target.elements.search.value
          setSearchTerm(`${searchValue}`)
          if (!searchValue) return
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
