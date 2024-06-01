import { useId } from "react"

const words = [
  "ruffle",
  "pan",
  "tease",
  "wise",
  "lay",
  "trim",
  "kettle",
  "set",
  "fringe",
  "place",
  "geeze",
  "pot",
  "put",
  "seize",
  "griddle",
  "frill",
]

export function Connections() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "600px",
        height: "400px",
        marginInline: "auto",
        gap: "10px",
        fontSize: ".7em",
        fontWeight: "bold",
      }}
    >
      {words.map((word) => (
        <Word key={word}>{word}</Word>
      ))}
    </div>
  )
}

function Word({ children }: { children: string }) {
  const id = useId()

  return (
    <div className="connections">
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
