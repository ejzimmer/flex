type MetaData = {
  name: string
  numberOfSeasons: number
  image: string
  ratio: "sd" | "hd"
}

const shows: MetaData[] = [
  {
    name: "Lower Decks",
    numberOfSeasons: 4,
    image: "lower-decks.jpg",
    ratio: "hd",
  },
  {
    name: "Discovery",
    numberOfSeasons: 5,
    image: "USS-Discovery-NCC-1031.avif",
    ratio: "hd",
  },
  {
    name: "The Original Series",
    numberOfSeasons: 3,
    image: "TOSopeninglogo.png",
    ratio: "sd",
  },
  {
    name: "The Next Generation",
    numberOfSeasons: 7,
    image: "star-trek-next-generation-cast.webp",
    ratio: "sd",
  },
  {
    name: "Deep Space Nine",
    numberOfSeasons: 7,
    image: "stds9_sp_hero_landscape.jpg",
    ratio: "sd",
  },
  {
    name: "Voyager",
    numberOfSeasons: 7,
    image: "voyager.jpg",
    ratio: "sd",
  },
  {
    name: "Enterprise",
    numberOfSeasons: 4,
    image: "Enterprise.webp",
    ratio: "hd",
  },
  {
    name: "Short Treks",
    numberOfSeasons: 2,
    image: "og-star-trek-short-treks.jpg",
    ratio: "hd",
  },
  {
    name: "Picard",
    numberOfSeasons: 3,
    image: "picard.jpeg",
    ratio: "hd",
  },
  {
    name: "The Animated Series",
    numberOfSeasons: 2,
    image: "ST-The_AS.jpg",
    ratio: "sd",
  },

  {
    name: "Prodigy",
    numberOfSeasons: 1,
    image: "prodigy.jpg",
    ratio: "hd",
  },
  {
    name: "Strange New Worlds",
    numberOfSeasons: 2,
    image: "strange-new-worlds.jpg",
    ratio: "hd",
  },
]

export function TVShows() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 50px)",
        gap: "24px 10px",
        resize: "horizontal",
        overflow: "hidden",
      }}
    >
      {shows.map((show, index) => (
        <Show key={index} {...show} />
      ))}
    </div>
  )
}

function Show({ name, numberOfSeasons, image, ratio }: MetaData) {
  return (
    <div
      style={{
        fontSize: ".3em",
        textAlign: "start",
        gridColumn: `span ${ratio === "hd" ? 4 : 3}`,
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          margin: 0,
          marginBlockEnd: "8px",
          width: "100%",
          height: "100px",
          objectFit: "cover",
          objectPosition: "center 10%",
        }}
      />
      <div>{name}</div>
      <div style={{ opacity: 0.6 }}>{numberOfSeasons} seasons</div>
    </div>
  )
}
