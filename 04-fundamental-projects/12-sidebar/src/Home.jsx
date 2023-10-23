import { useGlobalContext } from "./Context"
import { FaBars } from "react-icons/fa"

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext()
  console.log(openSideBar)
  return (
    <main>
      <button onClick={openSideBar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  )
}
export default Home
