export function RedditPost() {
  return (
    <div style={{ textAlign: "start", marginBottom: "60px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40px 40px 1fr 40px",
          gridTemplateAreas: "'back logo subreddit menu' 'back logo user menu'",
          gap: ".5em",
          alignItems: "center",
          fontSize: ".4em",
          lineHeight: 1,
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            border: "none",
            background: "#dbeaf7",
            borderRadius: "100px",
            color: "black",
            gridArea: "back",
            aspectRatio: 1,
          }}
        >
          <svg
            fill="currentColor"
            height="16"
            viewBox="0 0 20 20"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 9.375H2.51l7.932-7.933-.884-.884-9 9a.625.625 0 0 0 0 .884l9 9 .884-.884-7.933-7.933H19v-1.25Z"></path>
          </svg>
        </button>
        <a
          href="https://www.reddit.com/r/discworld/"
          style={{ gridArea: "logo" }}
        >
          <img
            alt="r/discworld"
            src="rslashdiscworld.png"
            style={{
              borderRadius: "100px",
              aspectRatio: "1",
              width: "100%",
              margin: 0,
            }}
          />
        </a>
        <div style={{ gridArea: "subreddit" }}>
          <a
            href="https://www.reddit.com/r/discworld/"
            style={{ fontWeight: "bold", color: "inherit" }}
          >
            r/discworld
          </a>{" "}
          • <span style={{ color: "#dbeaf7" }}>5 yr. ago</span>
        </div>
        <div style={{ gridArea: "user" }}>
          <a
            href="https://www.reddit.com/user/CodeDinosaur/"
            style={{ color: "inherit" }}
          >
            CodeDinosaur
          </a>{" "}
          <span
            style={{
              borderRadius: "100px",
              background: "#cde2f4",
              color: "black",
              paddingInline: "10px",
            }}
          >
            Bel-Shamharoth
          </span>
        </div>
        <button className="reddit-menu plain" style={{ gridArea: "menu" }}>
          <svg
            fill="currentColor"
            height="16"
            viewBox="0 0 20 20"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
          </svg>
        </button>
      </div>
      <div>
        <h2
          style={{
            color: "inherit",
            fontFamily: "sans-serif",
            fontSize: ".8em",
          }}
        >
          Entry for the humorously shaped vegetables section in the times.{" "}
        </h2>
        <article style={{ fontSize: ".6em" }}>
          <p>Dear mr. de Worde.</p>

          <p>
            Enclosed in this parcel you'll find an{" "}
            <a href="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.awesomeinventions.com%2Fwp-content%2Fuploads%2F2017%2F01%2Foddly-shaped-fruit-vegetables-zucchini-duck.jpg&f=1&nofb=1">
              Vegetable
            </a>{" "}
            I think fits your HSV section.
          </p>

          <p>
            Can't understand why everyone kept remarking "What duck" at the
            postal office though.
          </p>

          <p>With kind regards,</p>

          <p>Josia Wintler.</p>
        </article>
      </div>
      <RedditButtons />
      <cite>
        https://www.reddit.com/r/discworld/comments/d4qg9u/entry_for_the_humorously_shaped_vegetables/
      </cite>
    </div>
  )
}

export function RedditButtons({ fontSize = ".4em" }: { fontSize?: string }) {
  const containerStyle = {
    display: "flex",
    gap: ".5em",
    "--font-size": fontSize,
  }
  return (
    <div style={containerStyle}>
      <span
        style={{
          background: "#dbeaf7",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          className="plain reddit upvote"
          style={{ borderRadius: "100px" }}
        >
          <svg
            fill="currentColor"
            height="16"
            viewBox="0 0 20 20"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>
          </svg>
        </button>
        <span style={{ fontWeight: "bold", fontSize: ".4em", color: "black" }}>
          25
        </span>
        <button
          className="plain reddit downvote"
          style={{ borderRadius: "100px" }}
        >
          <svg
            fill="currentColor"
            height="16"
            viewBox="0 0 20 20"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>
          </svg>
        </button>
      </span>
      <button className="plain reddit">
        <svg
          fill="currentColor"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>
        </svg>
        1
      </button>
      <button className="plain reddit">
        <svg
          fill="currentColor"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m19.742 15.32-3.52-5.09c.46-.93.73-1.97.73-3.07 0-3.83-3.12-6.95-6.95-6.95s-6.95 3.12-6.95 6.95c0 1.1.27 2.14.73 3.07l-3.53 5.09c-.13.19-.15.43-.04.64.1.2.31.34.54.34l3.24.09 1.2 3.01c.09.22.29.37.52.39h.06c.21 0 .41-.1.52-.28l3.56-5.42.15-.23.15.23 3.56 5.42c.12.18.31.28.52.28h.06c.23-.02.43-.17.52-.39l1.2-3.01 3.24-.09c.23 0 .44-.14.54-.34.1-.21.09-.45-.04-.64h-.01Zm-13.84 2.51-.91-2.28a.607.607 0 0 0-.56-.39l-2.5-.07 2.56-3.7a7.017 7.017 0 0 0 3.97 2.55l-2.56 3.9v-.01Zm4.1-4.97c-.24 0-.47-.02-.7-.05-.03 0-.06 0-.09-.01a5.702 5.702 0 0 1-3.96-2.5c-.26-.4-.47-.83-.63-1.28a5.72 5.72 0 0 1-.32-1.86c0-3.14 2.56-5.7 5.7-5.7s5.7 2.56 5.7 5.7c0 .65-.12 1.27-.32 1.86a5.702 5.702 0 0 1-4.59 3.78c-.03 0-.06.01-.09.01-.23.03-.46.05-.7.05Zm5.56 2.3c-.25 0-.47.16-.56.39l-.91 2.28-2.56-3.9c1.61-.36 3-1.28 3.97-2.55l2.56 3.7-2.5.07v.01Z"></path>
        </svg>
      </button>
      <button className="plain reddit">
        <svg
          fill="currentColor"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 11v5.378A2.625 2.625 0 0 1 16.378 19H3.622A2.625 2.625 0 0 1 1 16.378V11h1.25v5.378a1.373 1.373 0 0 0 1.372 1.372h12.756a1.373 1.373 0 0 0 1.372-1.372V11H19ZM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624 0 0 0-.884 0l-4 4 .884.884 2.933-2.933Z"></path>
        </svg>
        Share
      </button>
    </div>
  )
}
