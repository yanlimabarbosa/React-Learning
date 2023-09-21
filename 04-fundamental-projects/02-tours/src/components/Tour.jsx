import { useState } from "react"

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isFullDescriptionVisible, setIsFullDescriptionVisible] =
    useState(false)

  const toggleDescription = () => {
    setIsFullDescriptionVisible(!isFullDescriptionVisible)
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isFullDescriptionVisible ? info : `${info.substring(0, 150)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={toggleDescription}
          >
            {isFullDescriptionVisible ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => {
            removeTour(id)
          }}
        >
          Not interested
        </button>
      </div>
      <span className="tour-price">${price}</span>
    </article>
  )
}
export default Tour
