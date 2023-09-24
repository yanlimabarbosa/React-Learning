const BtnContainer = ({ data, buttonClick }) => {
  return (
    <div className="btn-container">
      {data.map((item, index) => {
        return (
          <button
            key={item.id}
            className="job-btn"
            onClick={() => buttonClick(index)}
          >
            {item.company}
          </button>
        )
      })}
    </div>
  )
}
export default BtnContainer
