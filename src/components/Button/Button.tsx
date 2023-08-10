import styles from "./Button.module.css"

interface buttonProps {
  children: string
  color?: "primary" | "secondary" | "danger"
  onClick: () => void
}

const Button = ({ children, onClick, color = "primary" }: buttonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[styles.btn, styles[`btn-${color}`]].join(" ")}
    >
      {children}
    </button>
  )
}
export default Button
