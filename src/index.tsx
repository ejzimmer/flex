import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Deck from "./Deck"
import reportWebVitals from "./reportWebVitals"

import "reveal.js/dist/reveal.css"
import "reveal.js/dist/theme/black.css"
import "./overrides.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  // strict mode makes everything fire twice, so slide transitions
  // don't work properly
  // <React.StrictMode>
  <Deck />
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
