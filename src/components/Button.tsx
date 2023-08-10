interface buttonProps {
  children: string
  color?: "primary" | "secondary" | "danger"
  onClick: () => void
}

const Button = ({ children, onClick, color = "primary" }: buttonProps) => {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </button>
  )
}
export default Button
