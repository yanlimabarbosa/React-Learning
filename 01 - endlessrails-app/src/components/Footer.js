import SocialList from "./SocialList"
import PageLinks from "./PageLinks"

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass={"footer-links"} itemClass={"footer-link"} />

      <SocialList parentClass={"footer-icons"} itemClass={"footer-icon"} />

      <p className="copyright">
        copyright &copy; EndlessRails travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved{" "}
      </p>
    </footer>
  )
}
export default Footer
