import { useEffect, useState } from "react"
import apiClient, { CanceledError } from "./services/api-client"
import "bootstrap/dist/css/bootstrap.min.css"

interface User {
  id: number
  name: string
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter((u) => u.id !== user.id))
    apiClient.delete(`/users/${user.id}`).catch((err) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  const AddUser = () => {
    const originalUsers = [...users]
    const newUser = { id: 0, name: "Mosh" }
    setUsers([newUser, ...users])

    apiClient
      .post("/users", newUser)
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

    apiClient.patch(`/users/${(user.id, updatedUser)}`).catch((err) => {
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
