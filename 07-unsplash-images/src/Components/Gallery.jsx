import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "../Context/context"

const url = `https://api.unsplash.com/search/photos?client_id=_0nd42gEyO5tvb-3Lz6g0mANPIokYO6HS4Ra6Za14zE`

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    )
  }

  const results = response.data?.results || []
  if (results.length === 0) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        )
      })}
    </section>
  )
}
export default Gallery
