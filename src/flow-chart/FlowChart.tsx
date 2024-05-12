import { useEffect, useRef } from "react"

import "./flow-chart.css"

type Props = {
  highlight?: string
  done?: string
}

export function FlowChart({ highlight, done }: Props) {
  const thisChart = useRef<SVGSVGElement>(null)
  useEffect(() => {
    if (highlight) {
      highlight.split(",").forEach((el) => {
        thisChart.current?.querySelector(`#${el}`)?.classList.add("highlight")
      })
    }

    if (done) {
      done.split(",").forEach((el) => {
        thisChart.current
          ?.querySelector(`#${el}`)
          ?.classList.add("highlight", "done")
      })
    }
  }, [highlight, done])

  return (
    <svg
      ref={thisChart}
      viewBox="0 0 800 400"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      style={{ fontSize: "0.6em" }}
      className="r-stretch"
    >
      <g transform="translate(320, 10)">
        <g id="table">
          <ellipse cx="50" cy="20" rx="50" ry="20" />
          <text x="17" y="27">
            table?
          </text>
        </g>

        <g id="table-yes">
          <text x="-50" y="35" className="arrow-label">
            yes
          </text>
          <line x1="5" y1="30" x2="-102" y2="60" />
        </g>

        <g
          transform="translate(-185, 30)"
          id="table-layout"
          className="leaf-node"
        >
          <rect width="80" height="60" />
          <text x="5" y="25">
            table
          </text>
          <text x="5" y="50">
            layout
          </text>
        </g>

        <g id="table-no">
          <text x="125" y="30" className="arrow-label">
            no
          </text>
          <line x1="95" y1="30" x2="182" y2="45" markerEnd="url(#arrowhead)" />
        </g>

        <g id="text-based" transform="translate(185, 20)">
          <ellipse cx="50" cy="35" rx="50" ry="35" />
          <g transform="translate(14, 30)">
            <text x="10">text-</text>
            <text y="20">based?</text>
          </g>
        </g>

        <g id="text-based-no">
          <text x="294" y="55" className="arrow-label">
            no
          </text>
          <line x1="285" y1="55" x2="335" y2="69" markerEnd="url(#arrowhead)" />
        </g>

        <g id="flex" className="leaf-node" transform="translate(285, 220)">
          <rect width="48" height="30" />
          <text x="5" y="23">
            flex
          </text>
        </g>

        <g id="two-d" transform="translate(340, 55)">
          <ellipse cx="25" cy="17" rx="25" ry="17" />
          <text x="7" y="25">
            2d?
          </text>
        </g>

        <g id="two-d-yes">
          <text x="295" y="94" className="arrow-label">
            yes
          </text>
          <line
            x1="347"
            y1="85"
            x2="218"
            y2="135"
            markerEnd="url(#arrowhead)"
          />
        </g>

        <g id="single-row-no">
          <text x="400" y="113" className="arrow-label">
            no
          </text>
          <line
            x1="390"
            y1="98"
            x2="415"
            y2="147"
            markerEnd="url(#arrowhead)"
          />
        </g>

        <g id="grid" className="leaf-node" transform="translate(165, 120)">
          <rect width="48" height="30" />
          <text x="3" y="22">
            grid
          </text>
        </g>

        <g id="single-row" transform="translate(400, 150)">
          <ellipse cx="40" cy="29" rx="40" ry="29" />
          <g transform="translate(10, 26)">
            <text>single</text>
            <text x="5" y="20">
              row?
            </text>
          </g>
        </g>

        <g id="text-based-yes">
          <text x="150" y="80" className="arrow-label">
            yes
          </text>
          <line
            x1="195"
            y1="75"
            x2="120"
            y2="100"
            markerEnd="url(#arrowhead)"
          />
        </g>

        <g transform="translate(-40, 80)" id="newspaper-columns">
          <ellipse cx="80" cy="30" rx="80" ry="30" />
          <g transform="translate(19, 27)">
            <text>newspaper</text>
            <text x="5" y="20">
              columns?
            </text>
          </g>
        </g>

        <g id="newspaper-columns-no">
          <text x="27" y="160" className="arrow-label">
            no
          </text>
          <line x1="30" y1="140" x2="0" y2="187" markerEnd="url(#arrowhead)" />
        </g>

        <g id="flowing" transform="translate(-120, 190)">
          <ellipse cx="100" cy="35" rx="100" ry="35" />
          <g transform="translate(19, 35)">
            <text>flowing around</text>
            <text x="17" y="20">
              something?
            </text>
          </g>
        </g>

        <g id="flowing-no">
          <text x="5" y="275" className="arrow-label">
            no
          </text>
          <line x1="0" y1="260" x2="15" y2="320" markerEnd="url(#arrowhead)" />
        </g>

        <g
          id="normal-flow"
          className="leaf-node"
          transform="translate(-25, 325)"
        >
          <rect width="85" height="50" />
          <g transform="translate(5, 22)">
            <text>normal</text>
            <text y="20" x="10">
              flow
            </text>
          </g>
        </g>

        <g transform="translate(80, 290)">
          <ellipse cx="65" cy="29" rx="65" ry="29" />
          <g transform="translate(15, 26)">
            <text x="10">how to</text>
            <text y="20">overflow?</text>
          </g>
        </g>

        <g transform="translate(220, 300)">
          <ellipse cx="55" cy="25" rx="55" ry="25" />
          <text x="8" y="31">
            centred?
          </text>
        </g>

        <g transform="translate(350, 200)">
          <ellipse cx="55" cy="25" rx="55" ry="25" />
          <text x="7" y="33">
            stretchy?
          </text>
        </g>

        <g id="flowing-yes">
          <text x="-155" y="245" className="arrow-label">
            yes
          </text>
          <line
            x1="-110"
            y1="240"
            x2="-185"
            y2="266"
            markerEnd="url(#arrowhead)"
          />
        </g>

        <g id="float" className="leaf-node" transform="translate(-250, 250)">
          <rect width="60" height="32" />
          <text x="5" y="25">
            float
          </text>
        </g>

        <g id="newspaper-columns-yes">
          <text x="-70" y="135" className="arrow-label">
            yep
          </text>
          <line
            x1="-20"
            y1="130"
            x2="-130"
            y2="165"
            markerEnd="url(#arrowhead)"
          />
        </g>

        <g
          id="multi-column-layout"
          transform="translate(-290, 140)"
          className="leaf-node"
        >
          <rect width="155" height="52" />
          <g transform="translate(7, 23)">
            <text>multi-column</text>
            <text y="20">layout</text>
          </g>
        </g>
      </g>
    </svg>
  )
}
