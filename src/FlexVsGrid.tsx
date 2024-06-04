type Props = {
  browser?: number
  parent?: number
}

const sliderHeight = 80

export function FlexVsGrid({ browser, parent }: Props) {
  const validValues = [browser, parent]
    .map((val) => (val === -1 ? undefined : val))
    .filter((val) => val !== undefined) as number[]
  const position =
    validValues.reduce((sum, val) => sum + val, 0) / validValues.length
  const showPosition = [browser, parent].every((val) => val !== undefined)

  return (
    <>
      <div
        style={{
          height: `${sliderHeight}px`,
          backgroundImage:
            "linear-gradient(to left, var(--primary-colour), var(--red))",
          borderRadius: "1000px",
          width: "104%",
          marginInlineStart: "-2%",
        }}
      />
      <div
        style={{
          paddingTop: "20px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="grid">Grid</h2>
          <h2 className="blue">Flex</h2>
        </div>
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "auto 1fr auto",
          }}
        >
          <Range startLabel="developer" endLabel="browser" value={browser} />
          <Range startLabel="parent" endLabel="children" value={parent} />
        </div>
        {showPosition && <Marker position={position} />}
      </div>
    </>
  )
}

const sliderWidth = sliderHeight / 2
function Marker({ position }: { position: number }) {
  return (
    <div
      style={{
        width: `${sliderWidth}px`,
        height: `${sliderHeight * 1.2}px`,
        border: "4px solid white",
        position: "absolute",
        top: `${sliderHeight * -1.1}px`,
        left: `min(${position * 100}%, calc(100% - ${sliderWidth * 1.2}px)`,
        borderRadius: "10px",
        boxShadow: "0 0 10px 4px hsl(0 0 0/.6)",
        backdropFilter: "blur(10px)",
      }}
    />
  )
}

type RangeProps = {
  startLabel: string
  endLabel: string
  value?: number
}

const tickWidth = "16px"
function Range({ startLabel, endLabel, value }: RangeProps) {
  return (
    <>
      <div style={{ textAlign: "end" }}>{startLabel}</div>
      <div
        style={{
          width: "100%",
          height: "2px",
          background: "white",
          alignSelf: "center",
          position: "relative",
        }}
      >
        {value !== undefined && <RangeTick value={value} />}
      </div>
      <div style={{ textAlign: "start" }}>{endLabel}</div>
    </>
  )
}

function RangeTick({ value }: { value: number }) {
  return value === -1 ? (
    <div
      style={{
        height: "20px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "10%",
        right: "10%",
        border: "2px dashed",
      }}
    />
  ) : (
    <div
      style={{
        width: tickWidth,
        height: "16px",
        background: "white",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: `min(${value * 100}%, calc(100% - ${tickWidth}))`,
        borderRadius: "100px",
        boxShadow:
          "0 0 20px 3px hsl(0 0 0 /.6), inset -1.5px -1.5px var(--blue)",
      }}
    />
  )
}
