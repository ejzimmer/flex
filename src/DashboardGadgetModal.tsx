export function DashboardGadgetModal() {
  return (
    <div className="modal">
      <div className="header">Select Gadget</div>
      <ul className="gadgets">
        <li>
          <button>one</button>
        </li>
        <li>
          <button>two</button>
        </li>
        <li>
          <button>three</button>
        </li>
        <li>
          <button>four</button>
        </li>
        <li>
          <button>five</button>
        </li>
      </ul>
      <div className="gadget-preview">hello</div>
      <div className="footer">
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}
