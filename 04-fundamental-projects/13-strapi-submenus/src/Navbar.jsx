import { useGlobalContext } from "./Context"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const { openSideBar, closeSideBar } = useGlobalContext()

  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button onClick={openSideBar} className="toggle-btn">
          <FaBars />
        </button>
        {/* nav links here later */}
      </div>
    </nav>
  )
}
export default Navbar
