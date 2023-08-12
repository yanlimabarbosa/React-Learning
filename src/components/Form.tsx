import { FormEvent, useRef } from "react"

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const person = { name: "", age: 0 }

  const handleSubmit = (event: FormEvent) => {

    event.preventDefault()
    if (nameRef.current !== null) {
      person.name = nameRef.current.value
      console.log(nameRef.current.value)
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value)
      console.log(ageRef.current.value)
    }

  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" ref={nameRef} type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" ref={ageRef} type="number" className="form-control" />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      
    </form>
  )
}
export default Form
