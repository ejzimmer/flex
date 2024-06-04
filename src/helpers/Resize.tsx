import { ReactNode } from "react"

export function Resize({
  children,
  padding = "60px",
}: {
  children: ReactNode
  padding?: string
}) {
  return (
    <div style={{ resize: "horizontal", overflow: "hidden", padding }}>
      {children}
    </div>
  )
}
