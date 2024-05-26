type Props = {
  flexible?: number
  browser?: number
  parent?: number
}

const sliderHeight = 80

export function FlexVsGrid({ flexible, browser, parent }: Props) {
  const validValues = [flexible, browser, parent]
    .map((val) => (val === -1 ? undefined : val))
    .filter(Boolean) as number[]
  const position =
    validValues.reduce((sum, val) => sum + val, 0) / validValues.length
  const showPosition = [flexible, browser, parent].every((val) => !!val)

  return (
    <div
      style={{
        borderWidth: `${sliderHeight}px`,
        borderTopStyle: "solid",
        borderImage:
          "linear-gradient(to left, var(--blue), var(--purple)) 1 0%",
        paddingTop: "20px",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Grid</h2>
        <h2>Flex</h2>
      </div>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "auto 1fr auto",
        }}
      >
        <Range
          startLabel="less flexible"
          endLabel="more flexible"
          value={flexible}
        />
        <Range
          startLabel="developer control"
          endLabel="browser control"
          value={browser}
        />
        <Range startLabel="parent down" endLabel="children up" value={parent} />
      </div>
      {showPosition && <Marker position={position} />}
    </div>
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
        top: `${sliderHeight * -1.14}px`,
        left: `min(${position * 100}%, calc(100% - ${sliderWidth * 1.2}px)`,
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
      }}
    />
  )
}
