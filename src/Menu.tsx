const foodItems = [
  { veg: "vego", name: "samosa", description: "delicious", price: 8 },
] as const

export function Menu() {
  return (
    <>
      {foodItems.map((item) => (
        <FoodItem key={item.name} {...item} />
      ))}
    </>
  )
}

type Props = {
  veg?: keyof typeof icons
  name: string
  description: string
  price: number
}

const icons = {
  vego: VegetarianIcon,
  vegan: VeganIcon,
}

function FoodItem({ veg, name, description, price }: Props) {
  const Icon = veg ? icons[veg] : null
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "400px max-content 1fr max-content",
        gridTemplateAreas: "'veg name description price'",
      }}
    >
      <div style={{ gridArea: "veg" }}>{Icon && <Icon />}</div>
      <div style={{ gridArea: "name" }}>{name}</div>
      <div style={{ gridArea: "description" }}>{description}</div>
      <div style={{ gridArea: "price" }}>${price}</div>
    </div>
  )
}

function VegetarianIcon() {
  return (
    <svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="35" fill="limegreen" />
      <path d="m50,80 a200,80 0 0 1 0,-50 a200,80 0 0 1 0,50" fill="white" />
      <circle id="curve" cx="50" cy="50" r="40" fill="none" />
      <path
        d="m50,75 l0,-35"
        strokeLinecap="round"
        stroke="limegreen"
        strokeWidth="2"
      />
      <path
        d="m50,60 l-7,-7"
        strokeLinecap="round"
        stroke="limegreen"
        strokeWidth="2"
      />
      <path
        d="m50,53 l5,-5"
        strokeLinecap="round"
        stroke="limegreen"
        strokeWidth="2"
      />
      <path
        d="m50,67 l7,-7"
        strokeLinecap="round"
        stroke="limegreen"
        strokeWidth="2"
      />

      <g transform="rotate(-90, 50, 50)">
        <text fontSize="20">
          <textPath href="#curve" fill="limegreen">
            vegetarian
          </textPath>
        </text>
      </g>
    </svg>
  )
}

function VeganIcon() {
  return (
    <svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="limegreen" />
      <path id="curve" fill="none" d="M50,10 a40 40 0 1 0 0,0" />

      <text
        font-size="5"
        fill="#000000"
        letter-spacing="2"
        font-family="sans-serif"
        font-weight="bold"
      >
        <textPath href="#curve" startOffset="5">
          vegan
        </textPath>
      </text>
    </svg>
  )
}
