import { ReactNode } from "react"

export function RavelryTags() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
      <RavelryTag>bottom-up</RavelryTag>
      <RavelryTag>one-piece</RavelryTag>
      <RavelryTag>seamed</RavelryTag>
      <RavelryTag>short-rows</RavelryTag>
      <RavelryTag>stripes-colorwork</RavelryTag>
      <RavelryTag>worked-flat</RavelryTag>
    </div>
  )
}

function RavelryTag({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        border: "2px solid white",
        background: "#3852a8",
        borderRadius: "1000px",
        fontSize: "1rem",
        padding: "5px 10px",
      }}
    >
      {children}
    </div>
  )
}
