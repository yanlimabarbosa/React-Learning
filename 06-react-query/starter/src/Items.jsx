import SingleItem from "./SingleItem"
import { useFetchTasks } from "./reactQueryCustomHooks"

const Items = () => {
  const { data, error, isError, isLoading } = useFetchTasks()

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>
  }

  if (isError) {
    return <p style={{ marginTop: "1rem" }}>There was an error...</p>
  }

  if (error) {
    console.log(error.response.data)
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        //{data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
