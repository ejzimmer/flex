const foodItems = [
  {
    veg: "vego",
    name: "samosa",
    description:
      "Triangular shaped savoury pastry filled with mashed potatoes.",
    price: 10,
  },
  {
    name: "butter chicken",
    description:
      "Tender pieces of chicken marinated overnight, part-cooked in a clay oven and simmered in a silky tomato sauce.",
    price: 22,
  },
  {
    veg: "vegan",
    name: "aloo gobi",
    description: "Cauliflower, potato tossed with tomato, ginger and spices.",
    price: 18,
  },
] as const

export function Menu() {
  return (
    <div style={{ marginInline: "auto" }}>
      {foodItems.map((item) => (
        <FoodItem key={item.name} {...item} />
      ))}
    </div>
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
        gridTemplateColumns: "60px 1fr max-content",
        gridTemplateAreas: "'veg name price' 'veg description description",
        columnGap: "20px",
        textAlign: "start",
        fontSize: "1.5rem",
        borderBottom: "1px solid",
        paddingBlock: "20px",
      }}
    >
      <div style={{ gridArea: "veg", alignSelf: "center" }}>
        {Icon && <Icon />}
      </div>
      <div style={{ gridArea: "name", fontWeight: "bold" }}>{name}</div>
      <div style={{ gridArea: "description", opacity: 0.6 }}>{description}</div>
      <div style={{ gridArea: "price" }}>${price}</div>
    </div>
  )
}

function VegetarianIcon() {
  return (
    <svg viewBox="0 0 100 100" color="hsl(110 80% 50%)">
      <circle cx="50" cy="50" r="35" fill="currentColor" />
      <path d="m50,80 a200,80 0 0 1 0,-50 a200,80 0 0 1 0,50" fill="white" />
      <circle id="curve" cx="50" cy="50" r="40" fill="none" />
      <path
        d="m50,75 l0,-35"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m50,60 l-7,-7"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m50,53 l5,-5"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m50,67 l7,-7"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
      />

      <g transform="rotate(-90, 50, 50)">
        <text fontSize="20">
          <textPath href="#curve" fill="currentColor">
            vegetarian
          </textPath>
        </text>
      </g>
    </svg>
  )
}

function VeganIcon() {
  return (
    <svg viewBox="0 0 100 100" color="hsl(110 80% 30%)">
      <circle cx="50" cy="50" r="35" fill="currentColor" />
      <circle id="curve" cx="50" cy="50" r="40" fill="none" />

      <g transform="rotate(-25, 40, 80)">
        <path d="m50,80 a200,80 0 0 1 0,-50 a200,80 0 0 1 0,50" fill="white" />
        <path
          d="m50,75 l0,-35"
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m50,60 l-7,-7"
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m50,53 l5,-5"
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m50,67 l7,-7"
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>
      <g transform="rotate(25, 40, 80)">
        <path d="m50,75 a200,80 0 0 1 0,-50 a200,80 0 0 1 0,50" fill="white" />
        <path
          d="m50,75 l0,-35"
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m50,60 l-7,-7"
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m50,53 l5,-5"
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m50,67 l7,-7"
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>

      <g transform="rotate(-75, 50, 50)">
        <text fontSize="20">
          <textPath href="#curve" fill="currentColor">
            vegan
          </textPath>
        </text>
      </g>
    </svg>
  )
}
