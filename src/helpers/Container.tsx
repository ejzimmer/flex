import { ReactNode } from "react"

export function Resizable({
  maxWidth = "400px",
  children,
}: {
  maxWidth?: string
  children: ReactNode
}) {
  return (
    <div
      style={{
        resize: "inline",
        overflow: "hidden",
        maxWidth,
        marginInline: "auto",
      }}
    >
      {children}
    </div>
  )
}
