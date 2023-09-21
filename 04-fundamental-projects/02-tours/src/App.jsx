import { useEffect, useState } from "react"
import ToursList from "./components/ToursList"
import Loading from "./components/Loading"

const url = "https://course-api.com/react-tours-project"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const toursData = await response.json()
      setTours(toursData)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const removeTour = (id) => {
    // Filter out the tour with the given id from the tours array
    const updatedTours = tours.filter((tour) => tour.id !== id)
    setTours(updatedTours)
  }

  const reset = () => {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => {
              fetchData()
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <ToursList data={tours} removeTour={removeTour} />
      )}
    </main>
  )
}
export default App
