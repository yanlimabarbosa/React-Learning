import logo from "../images/logo.svg"
import PageLinks from "./PageLinks"
import SocialList from "./SocialList"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="endlessrails" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass={"nav-links"} itemClass={"nav-link"} />

        <SocialList parentClass={"nav-icons"} itemClass={"nav-icon"} />
      </div>
    </nav>
  )
}
export default Navbar
