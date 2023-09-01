import { socialLinks } from "../data"

const socialList = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((item) => {
        const { id, href, icon } = item
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={itemClass}
            >
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default socialList
