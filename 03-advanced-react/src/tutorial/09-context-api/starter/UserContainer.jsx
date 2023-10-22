import { useContext, useState } from "react"
import { NavbarContext, useAppContext } from "./Navbar"

const UserContainer = () => {
  const { user, setUser, logout } = useAppContext()

  const [newUserName, setNewUserName] = useState("")
  return (
    <div className="login-container">
      <p>Hello There, {user.name}</p>

      {user.name ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <input
            type="text"
            value={newUserName}
            onChange={(e) => {
              setNewUserName(e.target.value, e.target.value)
            }}
          />
          <button
            onClick={() => {
              setUser({ name: newUserName })
              setNewUserName("")
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  )
}
export default UserContainer
