import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">Mixmaster</span>
        <div className="nav-links">
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
          <NavLink to="/newsletter" className="navlink">
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
