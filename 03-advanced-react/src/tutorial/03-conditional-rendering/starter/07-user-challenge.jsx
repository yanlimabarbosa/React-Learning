import { useState } from "react"

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  function login() {
    setUser({ name: "Yan" })
  }
  function logout() {
    setUser(null)
  }

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>hello there, please login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  )
}

export default UserChallenge
