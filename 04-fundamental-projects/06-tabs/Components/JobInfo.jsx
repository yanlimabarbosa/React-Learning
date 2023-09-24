import JobDuties from "./JobDuties"

const JobInfo = ({ data, currentItem }) => {
  const { company, dates, duties, title } = data[currentItem]
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <JobDuties duties={duties} />
    </article>
  )
}
export default JobInfo

// company, dates, title, and duties, using the Duties component to render the list of duties.
