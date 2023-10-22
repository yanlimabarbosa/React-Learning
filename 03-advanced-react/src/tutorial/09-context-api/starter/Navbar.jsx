import { useState, createContext, useContext } from "react"
import NavLinks from "./NavLinks"

export const NavbarContext = createContext()

// custom hook
export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
  const [user, setUser] = useState({ name: "User1" })
  const logout = () => {
    setUser({ name: "" })
  }
  return (
    <NavbarContext.Provider value={{ user, logout, setUser }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar
