import { useQuery } from "@tanstack/react-query"
import SingleItem from "./SingleItem"
import customFetch from "./utils"

const Items = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
    /*
    Alternative Approach:
    
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/")
      return data
    },
    */
  })

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>
  }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        //{data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
