import { ReactNode, useId } from "react"

export function TimeRangePicker() {
  return (
    <div style={{ container: "time-range / inline-size" }}>
      <ul className="time-range">
        <TimeRange>1 Day</TimeRange>
        <TimeRange>7 Days</TimeRange>
        <TimeRange>4 Weeks</TimeRange>
        <TimeRange>1 Year</TimeRange>
      </ul>
    </div>
  )
}

function TimeRange({ children }: { children: ReactNode }) {
  const id = useId()

  return (
    <li>
      <input id={id} type="radio" name="time-range" />
      <label htmlFor={id}>{children}</label>
    </li>
  )
}
