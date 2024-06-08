import { ReactNode } from "react"

export function RavelryTags() {
  return (
    <div
      style={{
        background: "#191c27",
        padding: "50px",
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        alignItems: "start",
        borderRadius: "20px",
        gridTemplateRows: "min-content 1fr",
        gridColumnGap: "20px",
      }}
    >
      <img
        alt="a knitted chicken"
        src="emotional-support-chicken.jpg"
        style={{ gridRow: "span 2", border: "1px solid", borderRadius: 0 }}
      />
      <div
        style={{
          borderTop: "1px solid hsl(0 0% 100% / .6) ",
          display: "flex",
          flexWrap: "wrap",
          gap: "3px",
          paddingBlockStart: "20px",
          marginBlockEnd: "10px",
          marginBlockStart: "50px",
        }}
      >
        <RavelryTag>bottom-up</RavelryTag>
        <RavelryTag>one-piece</RavelryTag>
        <RavelryTag>seamed</RavelryTag>
        <RavelryTag>short-rows</RavelryTag>
        <RavelryTag>stripes-colorwork</RavelryTag>
        <RavelryTag>worked-flat</RavelryTag>
      </div>
      <button
        className="plain"
        style={{
          fontSize: "14px",
          color: "#c6c7c9",
          display: "flex",
          alignItems: "center",
          height: "min-content",
          padding: 0,
          textAlign: "start",
        }}
      >
        <img
          alt="Search"
          style={{ margin: 0 }}
          src="https://style-cdn.ravelrycache.com/images/assets/icons-dark/search-general.svg?v=34"
        />{" "}
        search patterns with these attributes
      </button>
    </div>
  )
}

export function RavelryTag({ children }: { children: ReactNode }) {
  return (
    <div
      className="ravelry-tag"
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
