type Props = {
  inEditMode?: boolean
}
export function GadgetTitle({ inEditMode = false }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "3px",
        borderTop: "4px solid rgb(38, 132, 255)",
        textAlign: "start",
        background: "rgb(34, 39, 43)",
        padding: "16px",
        color: "rgb(182, 194, 207)",
      }}
      className="gadget-title"
    >
      {inEditMode && (
        <div
          style={{
            height: "32px",
            width: "32px",
            display: "flex",
            alignItems: "center",
            cursor: "grab",
          }}
        >
          <svg height="100%" viewBox="0 0 24 24" role="presentation">
            <g fill="currentColor" fillRule="evenodd">
              <circle cx="10" cy="8" r="1"></circle>
              <circle cx="14" cy="8" r="1"></circle>
              <circle cx="10" cy="16" r="1"></circle>
              <circle cx="14" cy="16" r="1"></circle>
              <circle cx="10" cy="12" r="1"></circle>
              <circle cx="14" cy="12" r="1"></circle>
            </g>
          </svg>
        </div>
      )}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          flexGrow: 1,
        }}
      >
        Assigned to Me
      </div>
      <button aria-label="minimize">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
          <path
            d="M16.413 8.997H18A1 1 0 0118 11h-3.9l-.047-.001a.975.975 0 01-.736-.285l-.032-.032A.977.977 0 0113 9.946a1.12 1.12 0 010-.048V6.002a1 1 0 112 0v1.587l3.309-3.308a.977.977 0 011.374.005l.032.032a.976.976 0 01.005 1.374l-3.307 3.305zm-8.826 6.006H6A1 1 0 016 13h3.9l.047.001a.975.975 0 01.736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 11-2 0v-1.587l-3.309 3.308a.977.977 0 01-1.374-.005l-.032-.032a.976.976 0 01-.005-1.374l3.307-3.305z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      <button aria-label="maximize">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
          <path
            d="M6 18h3a1 1 0 010 2H6a2 2 0 01-2-2v-3a1 1 0 012 0v3zm12 2h-3a1 1 0 010-2h3v-3a1 1 0 012 0v3a2 2 0 01-2 2zM6 4h3a1 1 0 110 2H6v3a1 1 0 11-2 0V6a2 2 0 012-2zm12 2h-3a1 1 0 010-2h3a2 2 0 012 2v3a1 1 0 01-2 0V6z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      <button aria-label="refresh">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
          <g fill="currentColor" fillRule="evenodd">
            <path
              d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z"
              fillRule="nonzero"
            ></path>
            <path
              d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z"
              fillRule="nonzero"
            ></path>
            <path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path>
            <path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path>
          </g>
        </svg>
      </button>
      {inEditMode ? (
        <button aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
            <path
              d="M12 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-4.5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      ) : (
        <button aria-label="copy link">
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
            <g fill="currentColor" fillRule="evenodd">
              <path d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"></path>
              <path d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"></path>
            </g>
          </svg>
        </button>
      )}
    </div>
  )
}
