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
import { Fragment, Slide } from "./helpers/Slide"
import { FlexVsGrid } from "./FlexVsGrid"
import { Episodes } from "./Episodes"
import { TVShows } from "./TVShows"
import { RedditButtons, RedditPost } from "./RedditPost"
import { TimeRangePicker } from "./TimeRangePicker"
import { RavelryTag, RavelryTags } from "./RavelryTags"
import { Connections } from "./Connections"
import { DashboardGadgetModal } from "./DashboardGadgetModal"
import { Menu } from "./Menu"
import { GadgetTitle } from "./GadgetTitle"
import { Resize } from "./helpers/Resize"

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
      <div style={{ textAlign: "end", marginInlineEnd: "80px" }}>
        <img
          src="zoidberg-knitting.gif"
          alt="dr zoidberg from futurama, knitting a scarf"
          style={{
            borderRadius: 1000,
            float: "inline-end",
            clipPath: "circle(150px)",
            shapeOutside: "circle(150px)",
            shapeMargin: "40px",
          }}
        />
        <h2 className="blue" style={{ fontSize: "2em", display: "inline" }}>
          Erin Zimmer
        </h2>
        <img
          alt="Atlassian"
          src="/Atlassian-horizontal-blue-rgb.svg"
          style={{ borderRadius: 0, width: "60%", marginInlineEnd: "30px" }}
        />
        <a
          style={{ fontSize: "1.4em", textDecoration: "underline" }}
          href="https://hooks.ez.codes"
        >
          flex.ez.codes
        </a>
      </div>
    </Slide>

    <Slide>
      <h2>Layout mode</h2>
      <ul>
        <li>Controls how children are positioned</li>
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
      <h1>normal flow</h1>
      <div className="notes">Normal flow is for laying out text.</div>
    </Slide>
    <Slide>
      <img className="r-stretch" alt="boiled eggs recips" src="boil-eggs.png" />
      <cite>
        <a href="https://www.recipetineats.com/how-to-boil-eggs/">
          recipetineats
        </a>
      </cite>
      <div className="notes">pages that are mostly text-based</div>
    </Slide>
    <Slide>
      <img alt="excerpt from Le Petit Prince" src="mouton.png" />
      <cite>
        <a href="https://gutenberg.net.au/ebooks03/0300771h.html#ppchap2">
          Le Petit Prince - Gutenberg
        </a>
      </cite>
      <div className="notes">or pages that include text & images</div>
    </Slide>
    <Slide>
      <RedditPost />
      <cite>
        <a href="https://www.reddit.com/r/discworld/comments/d4qg9u/entry_for_the_humorously_shaped_vegetables/">
          Reddit
        </a>
      </cite>

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
      <img alt="" src="prince.jpg" style={{ marginInlineEnd: "40px" }} />
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
        CHAPITRE IV
      </h2>

      <p>
        J'avais ainsi appris une seconde chose très importante: C'est que sa
        planète d'origine était à peine plus grande qu'une maison!
      </p>
      <img
        src="asteroid-b612.jpg"
        alt="the little prince standing on his asteroid"
        style={{
          float: "inline-end",
          clipPath: "circle(300px at 100% 80%)",
          shapeOutside: "circle(300px at 100% 80%)",
          shapeMargin: "40px",
        }}
      />
      <p>
        Ça ne pouvait pas m'étonner beaucoup. Je savais bien qu'en dehors des
        grosses planètes comme la Terre, Jupiter, Mars, Vénus, auxquelles on a
        donné des noms, il y en a des centaines d'autres qui sont quelque-fois
        si petites qu'on a beaucoup de mal à les apercevoir au télescope. Quand
        un astronome découvre l'une d'elles, il lui donne pour nom un numéro. Il
        l'appelle par exemple: "l'astéroïde 3251."
      </p>
      <p>
        J'ai de sérieuses raisons de croire que la planète d'ou venait le petit
        prince est l'astéroïde B 612.
      </p>
      <p>
        Cet astéroïde n'a été aperçu qu'une fois au télescope, en 1909, par un
        astronome turc.
      </p>
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
          {`img.asteroidb612 {
  clip-path: circle(...);
  shape-outside: circle(...);
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
          columns: 3,
          background: "white",
          color: "black",
          fontFamily: "serif",
          fontSize: "20px",
          textAlign: "justify",
          padding: "40px",
          borderRadius: "20px",
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
          fontSize: "15px",
          textAlign: "justify",
          padding: "40px",
          borderRadius: "20px",
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
          borderRadius: "20px",
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
            fontWeight: "bold",
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
      <img alt="stan pricing table" src="stan-pricing-table.png" />
      <cite>
        <a href="https://help.stan.com.au/hc/en-us/articles/115005777028-Stan-subscription-plans">
          Stan
        </a>
      </cite>
    </Slide>
    <Slide>
      <img alt="a gmail inbox" src="gmail-table.png" />
      <cite>
        <a href="https://mail.google.com">gmail</a>
      </cite>
    </Slide>
    <Slide>
      <img
        alt="ikea table search results"
        src="ikea-tables.png"
        className="r-stretch"
      />
      <cite>
        <a href="https://www.ikea.com/au/en/cat/living-room-tables-10705/">
          Ikea
        </a>
      </cite>
    </Slide>
    <Slide>
      <code className="r-fit-text">&lt;table&gt;</code>
    </Slide>

    <Slide>
      <h1 className="multi">
        <span className="grid">grid</span>
        <span> & </span>
        <span className="flex">flex</span>
      </h1>
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
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}
      >
        <div>
          <div>parent</div>
          <div className="linebox-container grid" style={{ height: "300px" }}>
            <div className="grid-container fragment" data-fragment-index="1">
              <div>
                <div className="element fragment" data-fragment-index="2"></div>
              </div>
              <div>
                <div className="element fragment" data-fragment-index="3"></div>
              </div>
              <div>
                <div className="element fragment" data-fragment-index="4"></div>
              </div>
              <div>
                <div
                  className="element fragment overflower"
                  data-fragment-index="5"
                ></div>
              </div>
              <div>
                <div
                  className="element fragment overflowee"
                  data-fragment-index="6"
                ></div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div>children</div>
          <div
            className="linebox-container flexbox-container"
            style={{ height: "300px" }}
          >
            <div className="element fragment" data-fragment-index="7"></div>
            <div className="element fragment" data-fragment-index="8">
              <div
                className="stretcher fragment"
                data-fragment-index="11"
              ></div>
            </div>
            <div className="element fragment" data-fragment-index="9"></div>
            <div className="element fragment" data-fragment-index="10"></div>
          </div>
        </div>
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
          background: "#0b1416",
          borderRadius: "20px",
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
      <Fragment as="pre" className="flex neon">
        <code className="css">{`.container {
  display: flex; 
}`}</code>
      </Fragment>
      <Fragment as="pre" className="grid neon">
        <code className="css" data-line-numbers="0|3">
          {`.container {
  display: grid; 
  grid-auto-flow: column;
}`}
        </code>
      </Fragment>
      <div className="notes">
        and if we look at how we could implement this in CSS, it bears out that
        conclusion. grid works, but it's weird. use flex
      </div>
    </Slide>
    <Slide>
      <Resize>
        <TimeRangePicker />
      </Resize>
      <div className="notes">
        even vertically, flex is shorter, but easier to understand
      </div>
    </Slide>
    <Slide>
      <Fragment as="pre" className="flex neon">
        <code className="css">
          {`.container {
  display: flex;
  flex-direction: column;
}`}
        </code>
      </Fragment>
      <Fragment as="pre" className="grid neon">
        <code className="css">{`.container {
  display: grid;
}`}</code>
      </Fragment>
      <div className="notes">
        the grid code is shorter, but it's still weird, and the flex is easier
        to understand
      </div>
    </Slide>

    <Slide>
      <Resize>
        <GadgetTitle />
      </Resize>
    </Slide>
    <Slide>
      <FlexVsGrid browser={0.8} parent={1} />
    </Slide>
    <Slide data-transition="fade-out">
      <Fragment as="pre" className="flex neon">
        <code className="css">{`.container {
  display: flex;
}

.container > :first-child {
  flex-grow: 1;
}`}</code>
      </Fragment>
      <pre className="grid neon unlit">
        <code className="css">{`.container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
}`}</code>
      </pre>
    </Slide>
    <Slide data-transition="fade">
      <pre className="flex neon">
        <code className="css" data-line-numbers="1-3|5-7">{`.container {
  display: flex;
}

.container > :first-child {
  flex-grow: 1;
}`}</code>
      </pre>
      <pre className="grid neon unlit">
        <code className="css">{`.container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
}`}</code>
      </pre>
    </Slide>
    <Slide data-transition="fade">
      <pre className="flex neon unlit">
        <code className="css">{`.container {
  display: flex;
}

.container > :first-child {
  flex-grow: 1;
}`}</code>
      </pre>
      <pre className="grid neon">
        <code className="css" data-line-numbers="|2|3|4">{`.container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
}`}</code>
      </pre>
    </Slide>

    <Slide>
      <Resize>
        <GadgetTitle inEditMode />
      </Resize>
    </Slide>
    <Slide>
      <pre className="flex">
        <code className="css" data-line-numbers="|5-7">
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
      <Resize>
        <Menu />
      </Resize>
    </Slide>
    <Slide>
      <FlexVsGrid browser={0.3} parent={0.3} />
    </Slide>
    <Slide>
      <pre className="grid">
        <code className="css" data-line-numbers="|3|4,7-13">
          {`.container {
  display: grid;
  grid-template-columns: 40px 1fr max-content;
  grid-template-areas: 'icon name price'...;
}

.icon {
  grid-area: icon;
}

.name {
  grid-area: name;
}`}
        </code>
      </pre>
      <div className="notes">
        this one actually only works in grid, which kind of forces the sliders.
        dev must know the max number of elements that can occur before the
        search bar, layout must come from parent, etc
      </div>
    </Slide>

    <Slide>
      <Resize>
        <RavelryTags />
      </Resize>
      <cite style={{ marginInlineEnd: "10px" }}>
        <a href="https://www.ravelry.com/patterns/library/emotional-support-chickentm">
          Ravelry
        </a>
      </cite>
    </Slide>
    <Slide>
      <FlexVsGrid browser={1} parent={0.8} />
    </Slide>
    <Slide>
      <pre className="flex">
        <code>{`.container {
  display: flex;
  flex-wrap: wrap;
}        `}</code>
      </pre>
    </Slide>

    <Slide>
      <Resize>
        <Episodes />
      </Resize>
    </Slide>
    <Slide>
      <FlexVsGrid browser={0.5} parent={-1} />
    </Slide>
    <Slide data-transition="fade-out">
      <Fragment as="pre" className="flex neon">
        <code>{`.container {
  display: flex;
  flex-wrap: wrap;
}

.container > * {
  width: var(--width);
}`}</code>
      </Fragment>
      <pre className="grid neon unlit">
        <code>{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--width));
}`}</code>
      </pre>
      <div className="notes">could go either way</div>
    </Slide>
    <Slide data-transition="fade">
      <pre className="flex neon">
        <code className="css" data-line-numbers="1-4|6-8">{`.container {
  display: flex;
  flex-wrap: wrap;
}

.container > * {
  width: var(--width);
}`}</code>
      </pre>
      <pre className="grid neon unlit">
        <code>{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--width));
}`}</code>
      </pre>
      <div className="notes">could go either way</div>
    </Slide>
    <Slide data-transition="fade">
      <pre className="flex neon unlit">
        <code className="css">{`.container {
  display: flex;
  flex-wrap: wrap;
}

.container > * {
  width: var(--width);
}`}</code>
      </pre>
      <pre className="grid">
        <code data-line-numbers="|2|3">{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--width));
}`}</code>
      </pre>
      <div className="notes">could go either way</div>
    </Slide>

    <Slide>
      <Resize padding="0">
        <TVShows />
      </Resize>
      <div className="notes">
        but what if we want more than one size? like we want to show whether tv
        series are shot in standard or hi def? well, we can still do it with
        either grid or flex, assuming we can make all the sizes out of a single
        multiple.
      </div>
    </Slide>
    <Slide>
      <pre className="grid">
        <code data-line-numbers="|6-12">{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--width));
}

.container > .sd {
  grid-column: span 3;
}

.container > .hd {
  grid-column: span 4;
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
      <TVShows />
    </Slide>
    <Slide>
      <pre className="flex">
        <code data-line-numbers="|6-12">{`.container {
  display: flex;
  flex-wrap: wrap;
}

.container > .sd {
  width: var(--sd-width);
}

.container > .hd {
  width: var(--hd-width);
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
      <cite className="footnote">
        <a href="https://www.nytimes.com/games/connections">
          NY Times - Connections
        </a>
      </cite>
      <div className="notes">
        super basic example of this is the game from before
      </div>
    </Slide>
    <Slide>
      <FlexVsGrid browser={0.5} parent={0} />
    </Slide>
    <Slide>
      <pre className="grid">
        <code className="css">{`.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}`}</code>
      </pre>
    </Slide>

    <Slide>
      <div style={{ fontSize: "3em" }}>2d layout?</div>
      <Fragment as="h2" className="grid" style={{ fontSize: "6em" }}>
        grid
      </Fragment>
      <div className="notes">
        and this is generally true in any situation where we need to layout
        multiple rows of things, and there's some relationship between the rows.
        grid lets us do it in CSS, flex requires additional markup
      </div>
    </Slide>

    <Slide>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <div className="linebox-container">
          <div
            className="fragment"
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <div className="flex-box">
              <div className="fragment flex">
                <RavelryTag>bottom-up</RavelryTag>
                <RavelryTag>one-piece</RavelryTag>
                <RavelryTag>seamed</RavelryTag>
                <RavelryTag>short-rows</RavelryTag>
              </div>
            </div>
            <div className="flex-box">
              <div className="fragment flex">
                <RavelryTag>stripes-colorwork</RavelryTag>
                <RavelryTag>worked-flat</RavelryTag>
              </div>
            </div>
            <div style={{ height: "50px", border: "2px dashed" }} />
          </div>
        </div>
        <div
          className="linebox-container fragment"
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "start",
            flexWrap: "wrap",
          }}
        >
          <RavelryTag>bottom-up</RavelryTag>
          <RavelryTag>one-piece</RavelryTag>
          <RavelryTag>seamed</RavelryTag>
          <RavelryTag>short-rows</RavelryTag>
          <RavelryTag>stripes-colorwork</RavelryTag>
          <RavelryTag>worked-flat</RavelryTag>
        </div>
      </div>
    </Slide>
    <Slide>
      <DashboardGadgetModal />
    </Slide>
    <Slide>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div
          className="neon-border flex"
          style={{
            borderWidth: "8px",
            fontSize: "23.1px",
            marginBlock: "20px",
          }}
        >
          <code className="html modal-highlights fragment custom">
            <div>{`<modal>`}</div>
            <div className="indent-1">{`<header />`}</div>
            <div className="indent-1 box">{`<main>`}</div>
            <div className="indent-2">{`<gadget-list />`}</div>
            <div className="indent-2 box">{`<right-panel>`}</div>
            <div className="indent-3">{`<gadget-preview />`}</div>
            <div className="indent-3">{`<footer />`}</div>
            <div className="indent-2 box">{`</right-panel>`}</div>
            <div className="indent-1 box">{`</main>`}</div>
            <div>{`</modal>`}</div>
          </code>
        </div>
        <Fragment as="pre" className="flex">
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
      <DashboardGadgetModal fullWidthFooter />
    </Slide>
    <Slide>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div
          className="neon-border flex"
          style={{
            borderWidth: "8px",
            fontSize: "23.1px",
            marginBlock: "20px",
          }}
        >
          <code className="html modal-highlights visible custom">
            <div>{`<modal>`}</div>
            <div className="indent-1">{`<header />`}</div>
            <div className="indent-1 box">{`<main>`}</div>
            <div className="indent-2">{`<gadget-list />`}</div>
            <div className="indent-2 box">{`<right-panel>`}</div>
            <div className="indent-3">{`<gadget-preview />`}</div>
            <div className="indent-3">{`<footer />`}</div>
            <div className="indent-2 box">{`</right-panel>`}</div>
            <div className="indent-1 box">{`</main>`}</div>
            <div>{`</modal>`}</div>
          </code>
        </div>
        <pre className="flex">
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
        </pre>
      </div>
    </Slide>

    <Slide data-transition="fade">
      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr" }}>
        <pre className="grid">
          <code className="html">
            {`<modal>
  <header />
  <gadgets />
  <preview />
  <footer />
</modal>`}
          </code>
        </pre>
        <Fragment as="pre" className="grid">
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
    <Slide data-transition="fade">
      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr" }}>
        <pre className="grid">
          <code className="html">
            {`<modal>
  <header />
  <gadgets />
  <preview />
  <footer />
</modal>`}
          </code>
        </pre>
        <pre className="grid">
          <code className="css" data-line-numbers="|2-4|5-8">{`.modal {
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
        </pre>
      </div>
    </Slide>

    <Slide>
      <FlexVsGrid />
      <Fragment
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <h2 className="grid">high level</h2>
        <h2 className="blue">low level</h2>
      </Fragment>
    </Slide>

    <Slide>
      <svg
        viewBox="0 0 400 150"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        className="neon-outline"
        fill="none"
        style={{ position: "absolute", left: 0, right: 0 }}
      >
        <path d="M205,5 A190,70 0 1 1 195,5" />
      </svg>
      <div style={{ position: "absolute", top: "98px", left: "140px" }}>
        <div
          className="neon-text blue"
          style={{
            fontSize: "3em",
            fontWeight: "bold",
          }}
        >
          THANK YOU
        </div>
        <a
          className="fragment tiny-neon-text blue"
          href="https://flex.ez.codes"
          style={{ color: "hsl(201 50% 90%)" }}
        >
          flex.ez.codes
        </a>
      </div>
    </Slide>
  </>
))
