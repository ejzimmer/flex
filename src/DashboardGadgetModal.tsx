import { useRef } from "react"

export function DashboardGadgetModal({
  fullWidthFooter,
}: {
  fullWidthFooter?: boolean
}) {
  const imgRef = useRef<HTMLImageElement>(null)

  const selectGadget = (event: React.MouseEvent<HTMLButtonElement>) => {
    document
      .querySelector(".gadgets button[aria-selected]")
      ?.removeAttribute("aria-selected")

    const clicked = event.currentTarget
    clicked.setAttribute("aria-selected", "true")
    const chart = clicked.innerText.toLowerCase().replaceAll(" ", "-") + ".png"
    console.log(chart)
    imgRef.current!.src = chart
  }

  return (
    <div
      className={`modal custom ${
        fullWidthFooter ? "full-width-footer fragment" : ""
      }`}
    >
      <div className="header">Create dashboard gadget</div>
      <ul className="gadgets">
        <li>
          <button onClick={selectGadget}>Filter Results</button>
        </li>
        <li>
          <button onClick={selectGadget}>Average Age Chart</button>
        </li>
        <li>
          <button onClick={selectGadget}>Created vs Resolved Chart</button>
        </li>
        <li>
          <button onClick={selectGadget}>Pie Chart</button>
        </li>
        <li>
          <button onClick={selectGadget}>Recently Created Chart</button>
        </li>
      </ul>
      <div className="gadget-preview">
        <img ref={imgRef} src="filter-results.png" alt="Filter Results" />
      </div>
      <div className="footer">
        <label htmlFor="select-dashboard">Select dashboard</label>
        <select id="select-dashboard">
          <option>Search...</option>
          <option>Current Sprint</option>
          <option>Boimler's Dashboard</option>
        </select>
        <div className="buttons">
          <button>Cancel</button>
          <button className="primary">Add gadget</button>
        </div>
      </div>
    </div>
  )
}
