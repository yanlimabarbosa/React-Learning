import { useGlobalContext } from "./Context"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const { openSidebar, closeSideBar } = useGlobalContext()

  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button onClick={openSidebar} className="toggle-btn">
          <FaBars />
        </button>
        {/* nav links here later */}
      </div>
    </nav>
  )
}
export default Navbar
