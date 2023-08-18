import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import userService, { User } from "./services/user-service"

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const { request, cancel } = userService.getAllUsers()
    request
      .then((res) => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })

    return () => cancel()
  }, [])

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter((u) => u.id !== user.id))

    userService.deleteUser(user.id).catch((err) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  const AddUser = () => {
    const originalUsers = [...users]
    const newUser = { id: 0, name: "Mosh" }
    setUsers([newUser, ...users])
    userService
      .createUser(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }

  const updateUser = (user: User) => {
    const originalUsers = [...users]
    const updatedUser = { ...user, name: user.name + "!" }
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)))
    userService.updateUser(updatedUser).catch((err) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={AddUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-3"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
export default App
