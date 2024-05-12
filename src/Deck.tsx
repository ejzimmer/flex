import React, {
  PropsWithChildren,
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from "react"
import Reveal, { Api } from "reveal.js"
import { options } from "./revealOptions"
import RevealHighlight from "reveal.js/plugin/highlight/highlight"

import "reveal.js/plugin/highlight/monokai.css"
import { FlowChart } from "./flow-chart/FlowChart"
import { Fragment, Slide } from "./helpers/Slide"

const DeckContext = createContext<Api | null>(null)

function DeckProvider({ deck, children }: PropsWithChildren<{ deck?: Api }>) {
  return (
    <DeckContext.Provider value={deck ?? null}>{children}</DeckContext.Provider>
  )
}

export function useDeck() {
  return useContext(DeckContext)
}

export default function Deck() {
  const [deck, setDeck] = useState<Api>()

  useEffect(() => {
    const deck = new Reveal({
      ...options,
      plugins: [RevealHighlight],
    })
    deck.initialize()
    setDeck(deck)
  }, [])

  return (
    <DeckProvider deck={deck}>
      <div className="reveal">
        <div className="slides">
          <AllSlides />
        </div>
      </div>
    </DeckProvider>
  )
}

const AllSlides = memo(() => (
  <>
    <Slide>
      <h1>Do we even need flex anymore?</h1>
    </Slide>

    <Slide>
      <div style={{ width: "max-content", margin: "auto", display: "grid" }}>
        <h2>Erin Zimmer</h2>
        <a href="https://www.atlassian.com/" target="blank" rel="noreferrer">
          <img alt="Atlassian" src="/Atlassian-horizontal-blue-rgb.svg" />
        </a>
        <a href="https://hooks.ez.codes">flex.ez.codes</a>
      </div>
    </Slide>

    <Slide>
      <h2>Layout mode</h2>
      <ul>
        <li>Controls how children are positioned</li>
        <li>Changes how some properties work</li>
        <li>Grants access to some properties</li>
      </ul>
    </Slide>

    <Slide>
      <h2>CSS Layout modes</h2>
      <ul>
        <li>Normal flow</li>
        <li>Table layout</li>
        <li>Multi-column layout</li>
        <li>Flexible box layout</li>
        <li>Grid layout</li>
      </ul>
      <cite className="footnote">
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction">
          Introduction to CSS layout on MDN
        </a>
      </cite>
    </Slide>

    <Slide data-transition="slide-in">
      <FlowChart />
    </Slide>
    <Slide data-transition="slide-out">
      <FlowChart highlight="table" />
    </Slide>

    <Slide>examples of tables</Slide>
    <Slide>
      examples of not tables - connections game, youtube videos grid
    </Slide>

    <Slide data-transition="slide-in">
      <FlowChart highlight="table" />
    </Slide>
    <Slide data-transition="slide-out">
      <FlowChart highlight="table,table-yes,table-layout" />
    </Slide>
    <Slide>
      <code className="r-fit-text">&lt;table&gt;</code>
    </Slide>
    <Slide>
      <div style={{ position: "relative" }}>
        <code className="r-fit-text">display: table</code>
        <Fragment
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "6em",
          }}
        >
          ❌
        </Fragment>
      </div>
    </Slide>
    <Slide>picture of user agent style sheet with display: table</Slide>

    <Slide data-transition="slide-in">
      <FlowChart highlight="table,table-yes,table-layout" />
    </Slide>
    <Slide data-transition="none">
      <FlowChart highlight="table,table-no" done="table-yes,table-layout" />
    </Slide>
    <Slide data-transition="slide-out">
      <FlowChart
        highlight="text-based"
        done="table-yes,table-layout,table,table-no"
      />
    </Slide>
    <Slide>
      examples of text-based layouts. Include different levels of page - eg
      entire page vs description box in Jira also variety of different
      text-based layouts descriptions of videos in YouTube list of videos is
      good because it's really pure text
    </Slide>

    <Slide data-transition="slide-in">
      <FlowChart
        highlight="text-based"
        done="table-yes,table-layout,table,table-no"
      />
    </Slide>
    <Slide data-transition="slide-out">
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns"
        done="table-yes,table-layout,table,table-no"
      />
    </Slide>
    <Slide>example of newspaper column layouts</Slide>
    <Slide data-transition="slide-in">
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns"
        done="table-yes,table-layout,table,table-no"
      />
    </Slide>
    <Slide data-transition="slide-out">
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns,newspaper-columns-yes,multi-column-layout"
        done="table-yes,table-layout,table,table-no"
      />
    </Slide>
    <Slide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Fragment>
          <code>columns: 3</code>
          <div style={{ columns: 3 }}>lorem ipsum</div>
        </Fragment>
        <Fragment>
          <code>columns: 100px</code>
          <div style={{ columns: "100px" }}>lorem ipsum</div>
        </Fragment>
      </div>
    </Slide>
    <Slide>
      <ul>
        <li>column-count</li>
        <li>column-width</li>
        <li>column-gap</li>
        <li>column-rule</li>
        <li>break-inside</li>
        <li>column-span</li>
      </ul>
      <cite className="footnote">
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">
          Multiple-column layout on MDN
        </a>
      </cite>
    </Slide>

    <Slide data-transition="slide-in">
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns,newspaper-columns-yes,multi-column-layout"
        done="table-yes,table-layout,table,table-no"
      />
    </Slide>
    <Slide data-transition="slide-out">
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns,newspaper-columns-no,flowing"
        done="table-yes,table-layout,table,table-no,newspaper-columns-yes,multi-column-layout"
      />
    </Slide>
    <Slide>examples of text flowing around a square image</Slide>
    <Slide data-transition="slide-in">
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns,newspaper-columns-no,flowing"
        done="table-yes,table-layout,table,table-no,newspaper-columns-yes,multi-column-layout"
      />
    </Slide>
    <Slide data-transition="slide-out">
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns,newspaper-columns-no,flowing,flowing-yes,float"
        done="table-yes,table-layout,table,table-no,newspaper-columns-yes,multi-column-layout"
      />
      <div className="notes">
        the moment you've all been waiting for... peaked too soon
      </div>
    </Slide>
    <Slide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <pre>
          <code>{`
.container img {
  float: left;
}
          `}</code>
        </pre>
        <div>example of text flowing around an image</div>
      </div>
    </Slide>
    <Slide>actually it's even cooler - float + clip</Slide>

    <Slide data-transition="slide-in">
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns,newspaper-columns-no,flowing,flowing-yes,float"
        done="table-yes,table-layout,table,table-no,newspaper-columns-yes,multi-column-layout"
      />
    </Slide>
    <Slide data-transition="slide-out">
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns,newspaper-columns-no,flowing"
        done="table-yes,table-layout,table,table-no,newspaper-columns-yes,multi-column-layout,flowing-yes,float"
      />
    </Slide>
    <Slide>examples of just normal text with paragraphs and stuff</Slide>
    <Slide>
      <FlowChart
        highlight="text-based,text-based-yes,newspaper-columns,newspaper-columns-no,flowing,flowing-no,normal-flow"
        done="table-yes,table-layout,table,table-no,newspaper-columns-yes,multi-column-layout,flowing-yes,float"
      />
    </Slide>
    <Slide>mastercard style: for everything else, there's normal flow</Slide>
    <Slide>how to do normal flow? do nothing</Slide>
    <Slide>if it was grid/flex whatever, display: initial</Slide>

    <Slide>
      <FlowChart
        highlight="text-based"
        done="table-yes,table-layout,table,table-no,text-based-yes,newspaper-columns-yes,multi-column-layout,flowing-yes,float,newspaper-columns,newspaper-columns-no,flowing,flowing-no,normal-flow"
      />
    </Slide>
    <Slide>examples of non-text-based layouts</Slide>

    <Slide>
      <FlowChart
        highlight="text-based,text-based-no,two-d"
        done="table-yes,table-layout,table,table-no,text-based-yes,newspaper-columns-yes,multi-column-layout,flowing-yes,float,newspaper-columns,newspaper-columns-no,flowing,flowing-no,normal-flow"
      />
    </Slide>
    <Slide>examples of 2d layouts; include repeated row layouts</Slide>
    <Slide>
      <FlowChart
        highlight="text-based,text-based-no,two-d,two-d-yes,grid"
        done="table-yes,table-layout,table,table-no,text-based-yes,newspaper-columns-yes,multi-column-layout,flowing-yes,float,newspaper-columns,newspaper-columns-no,flowing,flowing-no,normal-flow"
      />
    </Slide>
    <Slide>
      <code className="r-fit-text">display: grid</code>
    </Slide>
    <Slide>example of laying something out with grid</Slide>
    <Slide>
      you might be tempted to do this with flex it's usually possible, but that
      way lies pain example of same thing with flex
    </Slide>
    <Slide>
      also, there are some things you just can't do with flex example of
      scrolling not working with flex
    </Slide>
    <Slide>
      2-d layouts. just use grid.
      <FlowChart
        highlight="text-based,text-based-no,two-d,two-d-yes,grid"
        done="table-yes,table-layout,table,table-no,text-based-yes,newspaper-columns-yes,multi-column-layout,flowing-yes,float,newspaper-columns,newspaper-columns-no,flowing,flowing-no,normal-flow"
      />
    </Slide>

    <Slide>
      update flow chart so it goes 2d-no goes to 1d then 1d has flexible or
      fixed flexible = flex, fixed = grid
    </Slide>

    <Slide>
      flex & grid on a continuum flex = layout more flexible, more control to
      browser grid = layout more fixed, more control to dev and make a gradient
      between them
    </Slide>
    <Slide>example: setting the width of things</Slide>
    <Slide>completely flexible: any number, whatever width</Slide>
    <Slide>
      <pre>
        <code>.container &#123; display: flex; &#125;</code>
      </pre>
      <pre>
        <code>
          .container &#123; display: grid; grid-auto-flow: column&#125;
        </code>
      </pre>
      <div className="notes">
        use flex. the grid version works fine, but it's odd.
      </div>
    </Slide>
    <Slide>
      the situation is slightly different if we want to flow vertically. example
      of that.
      <pre>
        <code>
          .container &#123; display: flex; flex-direction: column &#125;
        </code>
      </pre>
      <pre>
        <code>.container &#123; display: grid;&#125;</code>
      </pre>
      <div className="notes">
        i'd still probably use flex, because it's closer to what people are used
        to
      </div>
    </Slide>
    <Slide>
      more fixed. we still don't know how many thing there are, but this time,
      we want the first item to take up as much space as possible. like a header
      with icons beside it.
    </Slide>
    <Slide>
      <pre>
        <code>{`
.container {
  display: flex;
}
.container>:first-child {
  flex-grow: 1;
}
        `}</code>
      </pre>
      <pre>
        <code>{`
.container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
}
      `}</code>
      </pre>
      <div className="notes">
        grid is nice because it has all the layout in a single place, but it's
        still weird. i'd probably go with flex in this instance, but the more
        elements we're setting a size on, the more likely i'd be to switch to
        grid
      </div>
    </Slide>
    <Slide>
      most fixed: we know how many items there are, we want one a specific size.
      same example as before, but with a fixed number of elements
    </Slide>
    <Slide>
      <pre>
        <code>{`
.container {
  display: flex;
}
.container>:first-child {
  flex-grow: 1;
}
        `}</code>
      </pre>
      <pre>
        <code>{`
.container {
  display: grid;
  grid-template-columns: 1fr max-content;
}
      `}</code>
      </pre>
      <div className="notes">
        here, i'd lean to grid. the layout info is all in one place, and it's
        obvious that we know we're only dealing with 2 elements. even in this
        situation we can go either way though.
      </div>
    </Slide>
    <Slide>
      <pre>
        <code>{`
.container {
  display: flex;
}
.search-bar {
  flex-grow: 1;
}
        `}</code>
      </pre>
      <div className="notes">
        if the layout is more variable, because we're not sure exactly what
        number the stretchy element is - flex
      </div>
      <div className="notes">something like the mdn header</div>
    </Slide>
    <Slide>but if the layout got more complex, grid areas</Slide>

    <Slide>example 2: deciding when to wrap</Slide>
    <Slide>
      most flexible: whenever. all elements are as big as they want, wrap when
      they don't fit anymore. list of tags.
    </Slide>
    <Slide>
      <pre>
        <code>{`
.container {
  display: flex;
  flex-wrap: wrap;
}        
        `}</code>
      </pre>
      <div>
        can't do it with grid. we have to decide how many items there are in a
        row OR how big each item is. and the second row of items will always
        align with the first row
      </div>
      <div>example of how a grid wrap thing would look</div>
    </Slide>
    <Slide>
      more fixed: all the elements are the same size. wrap when no more fit.
      example.
    </Slide>
    <Slide>
      <pre>
        <code>{`
.container {
  display: flex;
  flex-wrap: wrap;
}
.container>* {
  width: var(--width);
}
      `}</code>
      </pre>
      <pre>
        <code>{`
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--width))
}
        `}</code>
      </pre>
      <div className="notes">
        i'd go with grid here. however, if you needed more flexibility - like
        multiple sizes, flex would work better.
      </div>
    </Slide>
    <Slide>
      most fixed: wrap after a specific number of elements. an example.
    </Slide>
    <Slide>
      <div>can't do it with flex</div>
      <pre>
        <code>{`
.container {
  display: grid;
  grid-template-columns: repeat(var(--number-of-columns), auto);
}
        `}</code>
      </pre>
    </Slide>

    <Slide>
      mixing flex with grid. making parts of the layout wrap responsively, like
      header + sub-header + buttons
    </Slide>

    <Slide>
      <dl>
        <dt>table layout</dt>
        <dd>tables</dd>
        <dt>multi-column layout</dt>
        <dd>newspaper-style columns</dd>
        <dt>float layout</dt>
        <dd>flowing around an object</dd>
        <dt>normal flow</dt>
        <dd>text layout</dd>
      </dl>
    </Slide>

    <Slide>
      flex-grid continuum. more flexibl to more fixed. more browser control to
      more developer control. use whicher is simplest + easiest to understand.
    </Slide>

    <Slide>thanks</Slide>

    <svg viewBox="0 0 10 10">
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="20"
          markerHeight="20"
          fill="currentColor"
          orient="auto-start-reverse"
        >
          <path d="M4,4 L6,5 4,6z" />
        </marker>
        <marker
          id="arrowhead-blue"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="20"
          markerHeight="20"
          fill="var(--blue)"
          orient="auto-start-reverse"
        >
          <path d="M4,4 L6,5 4,6z" />
        </marker>
      </defs>
    </svg>
  </>
))
