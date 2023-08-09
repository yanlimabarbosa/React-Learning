import { ReactNode } from "react"

interface Props {
  children: ReactNode // for html
  // children: number // for numbers
  //children: string // for string
  //children: any
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>
}
export default Alert
