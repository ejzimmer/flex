import React, {
  PropsWithChildren,
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
import Reveal, { Api } from "reveal.js";
import { options } from "./revealOptions";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

import "reveal.js/plugin/highlight/monokai.css";
import { Fragment, Slide } from "./helpers/Slide";
import { FlexVsGrid } from "./FlexVsGrid";
import { Episodes } from "./Episodes";
import { TVShows } from "./TVShows";
import { RedditButtons, RedditPost } from "./RedditPost";
import { TimeRangePicker } from "./TimeRangePicker";
import { RavelryTags } from "./RavelryTags";
import { Resizable } from "./helpers/Container";
import { Connections } from "./Connections";
import { DashboardGadgetModal } from "./DashboardGadgetModal";
import { Menu } from "./Menu";
import { GadgetTitle } from "./GadgetTitle";

const DeckContext = createContext<Api | null>(null);

function DeckProvider({ deck, children }: PropsWithChildren<{ deck?: Api }>) {
  return (
    <DeckContext.Provider value={deck ?? null}>{children}</DeckContext.Provider>
  );
}

export function useDeck() {
  return useContext(DeckContext);
}

export default function Deck() {
  const [deck, setDeck] = useState<Api>();

  useEffect(() => {
    const deck = new Reveal({
      ...options,
      plugins: [RevealHighlight],
    });
    deck.initialize();
    setDeck(deck);
  }, []);

  return (
    <DeckProvider deck={deck}>
      <div className="reveal">
        <div className="slides">
          <AllSlides />
        </div>
      </div>
    </DeckProvider>
  );
}

const AllSlides = memo(() => (
  <>
    <Slide>
      <h1>Do we even need flex anymore?</h1>
    </Slide>

    <Slide>
      <div style={{ width: "max-content", margin: "auto", display: "grid" }}>
        <div>Erin Zimmer</div>
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
        <li>Float</li>
        <li>Multi-column layout</li>
        <li>Table layout</li>
        <li>Flexible box layout</li>
        <li>Grid layout</li>
      </ul>
      <cite className="footnote">
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction">
          Introduction to CSS layout on MDN
        </a>
      </cite>
    </Slide>

    <Slide>
      <h1>Normal flow</h1>
      <div className="notes">Normal flow is for laying out text.</div>
    </Slide>
    <Slide>
      <img className="r-stretch" alt="boiled eggs recips" src="boil-eggs.png" />
      <cite>https://www.recipetineats.com/how-to-boil-eggs/</cite>
      <div className="notes">pages that are mostly text-based</div>
    </Slide>
    <Slide>
      <img alt="excerpt from Le Petit Prince" src="mouton.png" />
      <cite>https://gutenberg.net.au/ebooks03/0300771h.html#ppchap2 </cite>
      <div className="notes">or pages that include text & images</div>
    </Slide>
    <Slide>
      <RedditPost />
      <div className="notes">
        And it doesn't have to be the whole page - text bit in the middle of
        this reddit post is normal flow
      </div>
    </Slide>

    <Slide>
      <h1>float</h1>
      <div className="notes">
        we can also jazz up normal flow a little float, which gives us a way to
        combine images and text a little more dynamically.
      </div>
    </Slide>
    <Slide className="text">
      <h2
        style={{ fontFamily: "inherit", textShadow: "none", color: "inherit" }}
      >
        CHAPITRE III
      </h2>
      <img alt="" src="prince.jpg" style={{ marginInlineStart: "40px" }} />
      <p>
        Il me fallut longtemps pour comprendre d'où il venait. Le petit prince,
        qui me posait beaucoup de questions, ne semblait jamais entendre les
        miennes. Ce sont des mots prononcés par hasard qui, peu à peu, m'ont
        tout révélé. Ainsi, quand il aperçu pour la première fois mon avion (je
        ne dessinerai pas mon avion, c'est un dessin beaucoup trop compliqué
        pour moi) il me demanda:
      </p>
      <p>-Qu'est ce que c'est que cette chose-là?</p>
      <p>-Ce n'est pas une chose. Ça vole. C'est un avion. C'est mon avion.</p>
      <p>Et j'étais fier de lui apprendre que je volais. Alors il s'écria:</p>
      <p>-Comment! tu es tombé du ciel!</p>
      <p>-Oui, fis-je modestement.</p>
    </Slide>
    <Slide className="text">
      <h2
        style={{ fontFamily: "inherit", textShadow: "none", color: "inherit" }}
      >
        CHAPITRE III
      </h2>
      <img
        alt=""
        src="prince.jpg"
        style={{
          clipPath:
            "path('M 135 0 a 50 50 0 0 0 -50 50 l 0 130 a35 35 0 0 0 -35 35 l 0 50 l -40 0 a10 10 0 0 0 -10 10 L 0,380 270,380 270,0')",
          shapeOutside: "url(shape.svg)",
          float: "inline-end",
        }}
      />
      <p>
        Il me fallut longtemps pour comprendre d'où il venait. Le petit prince,
        qui me posait beaucoup de questions, ne semblait jamais entendre les
        miennes. Ce sont des mots prononcés par hasard qui, peu à peu, m'ont
        tout révélé. Ainsi, quand il aperçu pour la première fois mon avion (je
        ne dessinerai pas mon avion, c'est un dessin beaucoup trop compliqué
        pour moi) il me demanda:
      </p>
      <p>-Qu'est ce que c'est que cette chose-là?</p>
      <p>-Ce n'est pas une chose. Ça vole. C'est un avion. C'est mon avion.</p>
      <p>Et j'étais fier de lui apprendre que je volais. Alors il s'écria:</p>
      <p>-Comment! tu es tombé du ciel!</p>
      <p>-Oui, fis-je modestement.</p>
      <Fragment
        as="pre"
        style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          height: "200px",
        }}
      >
        <code className="css">
          {`img.avion {
  clip-path: path('...');
  shape-outside: url(shape.svg);
  float: inline-end;
}`}
        </code>
      </Fragment>
    </Slide>

    <Slide>
      <h1>columns</h1>
    </Slide>
    <Slide>
      <div
        style={{
          columnCount: 3,
          background: "white",
          color: "black",
          fontFamily: "serif",
          fontSize: "20px",
          textAlign: "justify",
          padding: "40px",
        }}
      >
        <h4 style={{ fontFamily: "serif", color: "inherit" }}>
          IT IS THE COLDEST WINTER IN LIVING MEMORY, AND THAT'S OFFICIAL
        </h4>
        <p>
          Dr Fettle Dodgast (132) of Unfeen University, told the <i>Times</i>:
          "It if as cold as I can remember. Mind you, we don't get the winter
          thefe days that we had when I was young.'
        </p>
        <p>
          Isicles as long as a man's arm have been seen on gutters about the
          city and many pumps have frozen.
        </p>
        <p>
          Dr Dodgast (132) says the winter is worse than the one in 1902 when
          wolves invaded the city. He added 'and we were glad of that, because
          we hadn't seen fresh meat for a fortnight'
        </p>
        <p className="break">...</p>
        <p>
          Mr Josia Wintler (45) of 12b Martlebury Street has a Humerous
          Vegetable that he will exhibit to all comers upon payment of a small
          sum. It is most droll.
        </p>
        <p className="break">...</p>
        <p>
          Mr Clarence Harry (39) begs to inform the public that he has lost a
          valuable watch, probably in the area of Dolly Sisters. Reward to
          finder. Please report to <i>Times</i> office.
        </p>
        <p className="break">...</p>
        <p>
          A iconographer with thier own equpptment vanted by this publication.
          Apply at the <i>Times</i> office, The sign of the Bucket.
        </p>
        <p className="break">...</p>
      </div>
      <cite style={{ color: "var(--primary-colour)" }}>
        Terry Pratchett, <i>The Truth</i> (2000)
      </cite>
      <div className="notes">
        limited use on the web, as the entire content needs to fit the viewport
      </div>
    </Slide>
    <Slide>
      <div
        style={{
          columnCount: 3,
          columnRule: "2px dashed black",
          columnGap: "60px",
          background: "white",
          color: "black",
          fontFamily: "serif",
          fontSize: "20px",
          textAlign: "justify",
          padding: "40px",
        }}
      >
        <h4 style={{ fontFamily: "serif", color: "inherit" }}>
          IT IS THE COLDEST WINTER IN LIVING MEMORY, AND THAT'S OFFICIAL
        </h4>
        <p>
          Dr Fettle Dodgast (132) of Unfeen University, told the <i>Times</i>:
          "It if as cold as I can remember. Mind you, we don't get the winter
          thefe days that we had when I was young.'
        </p>
        <p>
          Isicles as long as a man's arm have been seen on gutters about the
          city and many pumps have frozen.
        </p>
        <div
          style={{
            columnSpan: "all",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            alt="The Ankh-Morpork Times: the truth shall make ye free"
            src="ankh-morpork-times.png"
          />
        </div>
        <p>
          Dr Dodgast (132) says the winter is worse than the one in 1902 when
          wolves invaded the city. He added 'and we were glad of that, because
          we hadn't seen fresh meat for a fortnight'
        </p>
        <p className="break">...</p>
        <p>
          Mr Josia Wintler (45) of 12b Martlebury Street has a Humerous
          Vegetable that he will exhibit to all comers upon payment of a small
          sum. It is most droll.
        </p>
        <p className="break">...</p>
        <p>
          Mr Clarence Harry (39) begs to inform the public that he has lost a
          valuable watch, probably in the area of Dolly Sisters. Reward to
          finder. Please report to <i>Times</i> office.
        </p>
        <p className="break">...</p>
        <p>
          A iconographer with thier own equpptment vanted by this publication.
          Apply at the <i>Times</i> office, The sign of the Bucket.
        </p>
        <p className="break">...</p>
      </div>
      <cite style={{ color: "var(--primary-colour)" }}>
        Terry Pratchett, <i>The Truth</i> (2000)
      </cite>
      s example of columns using fancy stuff like column dividers
      <div className="notes">
        do allow for doing some cool stuff though with very simple css. probably
        more useful for print layouts
      </div>
    </Slide>
    <Slide data-background-image="lower-decks.jpg">
      <div
        style={{
          background: "linear-gradient(45deg, black, hsl(0 0% 0%/.2))",
          paddingInline: "80px",
          minHeight: "50vh",
          paddingBlockEnd: "40px",
          textAlign: "start",
          display: "grid",
          alignContent: "end",
          width: "unset",
        }}
      >
        <h2
          style={{
            fontFamily: "sans-serif",
            color: "white",
            fontSize: "1.3em",
            textAlign: "start",
            textShadow: "none",
          }}
        >
          Star Trek: Lower Decks
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridGap: "40px",
            textTransform: "uppercase",
            fontSize: ".5em",
          }}
        >
          <div>2020</div>
          <div>4 seasons</div>
        </div>
        <div
          style={{ columns: "250px", fontSize: ".5em", marginBlock: "20px" }}
        >
          <p style={{ marginTop: 0 }}>
            Star Trek: Lower Decks, a new half-hour animated comedy series,
            focuses on the support crew serving on one of Starfleet's least
            important ships, the U.S.S. Cerritos, in 2380.
          </p>
          <p>
            Starring Tawny Newsome, Jack Quaid, Noël Wells, and Eugene Cordero.
          </p>
        </div>
        <button
          style={{
            border: "none",
            background: "linear-gradient(-225deg,#0037c5,#0064ff)",
            color: "white",
            padding: "16px 40px 14px",
            textTransform: "uppercase",
            justifySelf: "start",
          }}
        >
          Watch now
        </button>
      </div>
    </Slide>
    <Slide>
      <h1>table</h1>
    </Slide>
    <Slide>
      <img src="cronometer.png" alt="cronometer daily food record" />
      <cite>https://cronometer.com/#diary</cite>
      <div className="notes">this is a table - explanation</div>
    </Slide>
    <Slide>
      <img alt="stan pricing table" src="stan-pricing-table.png" />
      <cite>
        https://help.stan.com.au/hc/en-us/articles/115005777028-Stan-subscription-plans
      </cite>
      <div className="notes">also a table</div>
    </Slide>
    <Slide>
      <img
        alt="ikea table search results"
        src="ikea-tables.png"
        className="r-stretch"
      />
      <cite>https://www.ikea.com/au/en/cat/living-room-tables-10705/</cite>
      <div className="notes">not a table - explanation</div>
    </Slide>
    <Slide>
      <img alt="a gmail inbox" src="gmail-table.png" />
      <cite>mail.google.com</cite>
      <div className="notes">is this a table?</div>
    </Slide>
    <Slide>
      <img alt="connections game grid" src="connections-grid.png" />
      <cite>https://www.nytimes.com/games/connections</cite>
      <div className="notes">is this a table?</div>
    </Slide>
    <Slide>
      <img
        alt="a yarn weight conversion table"
        src="yarn-weight-conversion-table.png"
        className="r-stretch"
      />
      <cite>https://www.laughinghens.com/yarn-conversion-chart</cite>
      <div className="notes">is this a table?</div>
    </Slide>
    <Slide>
      <code className="r-fit-text">&lt;table&gt;</code>
    </Slide>
    <Slide>
      <div
        className="r-stretch"
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <code className="r-fit-text">display: table</code>
        <Fragment
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -35%)",
            fontSize: "6em",
            "--outline-color": "hsl(360 75% 60%)",
            "--shadow-colour": "hsl(360 98% 39%/0.6)",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            stroke="white"
            width="300px"
            filter="drop-shadow(0 0 7px var(--outline-color)) drop-shadow(0 0 10px var(--outline-color)) drop-shadow(0 0 42px var(--shadow-colour)) drop-shadow(0 0 82px var(--shadow-colour))"
          >
            <path
              d="M 35 83
               A 10 10 0 0 0 75 25
               l -50 50
               A 10 10 0 0 1 67 17"
              stroke="white"
              fill="transparent"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Fragment>
      </div>
    </Slide>
    <Slide>
      <img
        alt="Firefox user agent styling for table element"
        src="firefox-user-agent.png"
      />
      <img
        alt="Chrome user agent styling for table element"
        src="chrome-user-agent.png"
      />
    </Slide>

    <Slide>
      <h1>grid & flex</h1>
      <div className="notes">
        some cases, only flex or grid will work, but those cases are boring and
        easy to work out. what we really want to know is, for all the
        overlapping cases, what's the easiest way to do it, without having to
        try both and see
      </div>
    </Slide>
    <Slide>
      <FlexVsGrid />
    </Slide>

    <Slide>
      <div
        style={{
          width: "80%",
          outline: "2px dashed",
          padding: "20px",
          marginInline: "auto",
        }}
      >
        <RedditButtons />
      </div>
    </Slide>
    <Slide>
      <FlexVsGrid browser={1} parent={1} />
      <div className="notes">strongly suggests we should use flex</div>
    </Slide>
    <Slide>
      <pre className="flex">
        <code className="css">{`.container {
  display: flex; 
}`}</code>
      </pre>
      <pre>
        <code className="css">
          {`.container {
  display: grid; 
  grid-auto-flow: column;
}`}
        </code>
      </pre>
      <div className="notes">
        and if we look at how we could implement this in CSS, it bears out that
        conclusion. grid works, but it's weird. use flex
      </div>
    </Slide>
    <Slide>
      <div
        style={{ resize: "horizontal", overflow: "hidden", padding: "60px" }}
      >
        <TimeRangePicker />
      </div>
      <div className="notes">
        even vertically, flex is shorter, but easier to understand
      </div>
    </Slide>
    <Slide>
      <pre className="flex">
        <code className="css">
          {`.container {
  display: flex;
  flex-direction: column;
}`}
        </code>
      </pre>
      <pre>
        <code className="css">{`.container {
  display: grid;
}`}</code>
      </pre>
      <div className="notes">
        the grid code is shorter, but it's still weird, and the flex is easier
        to understand
      </div>
    </Slide>

    <Slide>
      <GadgetTitle />
    </Slide>
    <Slide>
      <FlexVsGrid browser={0.8} parent={1} />
    </Slide>
    <Slide>
      <pre className="flex">
        <code className="css">{`.container {
  display: flex;
}

.container > :first-child {
  flex-grow: 1;
}`}</code>
      </pre>
      <pre>
        <code className="css">{`.container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
}`}</code>
      </pre>
      <div className="notes">
        so flex is obviously a bit nicer here. but also, this is a bit of an odd
        situation - normally you want a specific element to stretch out,
        regardless of position
      </div>
    </Slide>
    <Slide>
      <GadgetTitle inEditMode />
    </Slide>
    <Slide>
      <FlexVsGrid browser={0.8} parent={1} />
    </Slide>
    <Slide>
      <pre className="flex">
        <code className="css">
          {`.container {
  display: flex;
}

.title {
  flex-grow: 1;
}`}
        </code>
      </pre>
    </Slide>
    <Slide>
      <Menu />
    </Slide>
    <Slide>
      <FlexVsGrid browser={0.3} parent={0.3} />
    </Slide>
    <Slide>
      <pre>
        <code className="css">
          {`.container {
  display: grid;
  grid-template-columns: 40px 1fr repeat(4, auto);
  grid-template-areas: 'drag search . . .';
}

.drag-icon {
  grid-area: drag;
}

.search {
  grid-area: search;
}`}
        </code>
      </pre>
      <div className="notes">
        this one actually only works in grid, which kind of forces the sliders.
        dev must know the max number of elements that can occur before the
        search bar, layout must come from parent, etc
      </div>
    </Slide>

    <Slide>I think we need an intro slide here or something maybe</Slide>

    <Slide>
      <Resizable maxWidth="600px">
        <RavelryTags />
      </Resizable>
      <Fragment>
        <img alt="a knitted chicken" src="emotional-support-chicken.jpg" />
      </Fragment>
    </Slide>
    <Slide>
      <FlexVsGrid browser={1} parent={0.9} />
    </Slide>
    <Slide>
      <pre>
        <code>{`.container {
  display: flex;
  flex-wrap: wrap;
}        
        `}</code>
      </pre>
    </Slide>

    <Slide>
      <Episodes />
    </Slide>
    <Slide>
      <FlexVsGrid browser={0.7} parent={-1} />
    </Slide>
    <Slide>
      <pre>
        <code>{`.container {
  display: flex;
  flex-wrap: wrap;
}
.container > * {
  width: var(--width);
}
      `}</code>
      </pre>
      <pre>
        <code>{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--width))
}
        `}</code>
      </pre>
      <div className="notes">could go either way</div>
    </Slide>

    <Slide>
      <TVShows />
      <div className="notes">
        but what if we want more than one size? like we want to show whether tv
        series are shot in standard or hi def? well, we can still do it with
        either grid or flex, assuming we can make all the sizes out of a single
        multiple.
      </div>
    </Slide>
    <Slide>
      <pre>
        <code>{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--width))
}
.container > .sd {
  grid-column: span 3
}
.container > .hd {
  grid-column: span 4
}`}</code>
      </pre>
      <div className="notes">
        we can still do this with grid in this case, because the hd ratio is
        about 4/3 the width of the sd one, so we can do a little finagling with
        column spans and make it work. but it kind of relies on there being a
        simple ratio between the two sizes
      </div>
    </Slide>
    <Slide>
      <pre>
        <code>{`.container {
  display: flex;
  flex-wrap: wrap;
}
.container > .sd {
  width: var(--sd-width);
}
.container > .hd {
  width: calc(var(--hd-width) * 1.33);
}`}</code>
      </pre>
      <div className="notes">
        whereas with the flex version, we can just make the sizes whatever we
        want. and it's a bit easier to understand what's going on. so use the
        grid version if you want to maintain that ratio, the flex version if
        it's not important
      </div>
    </Slide>

    <Slide>
      <Connections />
      <div className="notes">
        super basic example of this is the game from before
      </div>
    </Slide>
    <Slide>
      <FlexVsGrid browser={0.3} parent={0} />
    </Slide>
    <Slide>
      <pre>
        <code className="css">{`.container {
  display: grid;
  grid-template-columns: repeat(var(--num-columns), 1fr);
}`}</code>
      </pre>
    </Slide>
    <Slide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <pre>
          <code className="html">{`<board>
  <row>
    <tile /><tile /><tile /><tile />
  <row>
  <row>
    <tile /><tile /><tile /><tile />  
  <row>  
  <row>
    <tile /><tile /><tile /><tile />
  <row>
  <row>
    <tile /><tile /><tile /><tile />
  <row>
</board>`}</code>
        </pre>
        <pre>
          <code className="html">{`<board>
    <tile /><tile /><tile /><tile />
    <tile /><tile /><tile /><tile />  
    <tile /><tile /><tile /><tile />
    <tile /><tile /><tile /><tile />
</board>`}</code>
        </pre>
      </div>
      <div className="notes">
        flex requires introduction of html elements purely for layout. row is
        not a concept that matters in this application. grid lets us keep the
        layout purely in css
      </div>
    </Slide>

    <Slide>
      <div>2d layout?</div>
      <Fragment>just use grid</Fragment>
      <div className="notes">
        and this is generally true in any situation where we need to layout
        multiple rows of things, and there's some relationship between the rows.
        grid lets us do it in CSS, flex requires additional markup
      </div>
    </Slide>

    <Slide>
      <FlexVsGrid browser={0.1} parent={0} />
    </Slide>
    <Slide>
      <DashboardGadgetModal />
    </Slide>
    <Slide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <pre>
          <code className="html modal-highlights">
            {`<modal>
  <header />
  <main>
    <gadget-list>
    <right-panel>
      <gadget-preview />
      <footer />
    </right-panel>
  </main>
</modal>`}
          </code>
        </pre>
        <Fragment as="pre">
          <code className="css">{`.main {
  display: flex;
}

.right-panel {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.gadget-preview {
  flex-grow: 1;
}
        `}</code>
        </Fragment>
      </div>
    </Slide>
    <Slide>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
        <pre>
          <code className="html">
            {`<modal>
  <header />
  <gadgets />
  <preview />
  <footer />
</modal>`}
          </code>
        </pre>
        <Fragment as="pre">
          <code className="css">{`.modal {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas: 
    "header header"
    "gadgets preview"
    "gadgets footer";
}

.header {
  grid-area: header;
}
.gadgets {
  grid-area: gadgets;
}
.preview {
  grid-area: preview;
}
.footer {
  grid-area: footer;
}`}</code>
        </Fragment>
      </div>
    </Slide>

    <Slide>
      <FlexVsGrid />
      <Fragment
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "var(--purple)",
        }}
      >
        <div>high level</div>
        <div>low level</div>
      </Fragment>
    </Slide>

    <Slide>thank</Slide>
  </>
));
