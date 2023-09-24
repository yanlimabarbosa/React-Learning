import { useEffect, useState } from "react"
import JobInfo from "../Components/JobInfo"
import BtnContainer from "../Components/BtnContainer"

const url = "https://course-api.com/react-tabs-project"

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState([0])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setIsLoading(false)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  const buttonClick = (index) => {
    setCurrentItem(index)
  }

  return (
    <section className="jobs-center">
      <BtnContainer data={data} buttonClick={buttonClick} />
      <JobInfo data={data} currentItem={currentItem} />
    </section>
  )
}
export default App
