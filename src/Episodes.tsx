const episodes = [
  { title: "Second Contact", releaseDate: "06/08/20" },
  { title: "Envoys", releaseDate: "13/08/20" },
  { title: "Temporal Edict", releaseDate: "20/08/20" },
  { title: "Moist Vessel", releaseDate: "27/08/20" },
  { title: "Cupid's Errant Arrow", releaseDate: "03/09/20" },
  { title: "Terminal Provocations", releaseDate: "10/09/20" },
  { title: "Much Ado About Boimler", releaseDate: "17/09/20" },
  { title: "Veritas", releaseDate: "24/09/20" },
  { title: "Crisis Point", releaseDate: "01/10/20" },
  { title: "No Small Parts", releaseDate: "08/10/20" },
]

export function Episodes() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 200px)",
        gap: "24px 10px",
        resize: "horizontal",
        overflow: "hidden",
      }}
    >
      {episodes.map((episode, index) => (
        <Episode key={index} episodeNumber={index + 1} {...episode} />
      ))}
    </div>
  )
}

function Episode({
  episodeNumber,
  title,
  releaseDate,
}: {
  episodeNumber: number
  title: string
  releaseDate: string
}) {
  return (
    <div style={{ fontSize: ".3em", textAlign: "start" }}>
      <img
        src={`lower-decks-episode-${episodeNumber}.jpg`}
        alt=""
        style={{ margin: 0, marginBlockEnd: "8px", maxWidth: "100%" }}
      />
      <div>
        S1 E{episodeNumber} <span style={{ opacity: 0.6 }}>{releaseDate}</span>
      </div>
      <div style={{ fontSize: "1.2em" }}>{title}</div>
    </div>
  )
}
