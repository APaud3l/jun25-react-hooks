import { Link, useLocation } from "react-router-dom";

function RouterHooksPanel() {
  // 1. Read current location(pathname + search) using useLocation
  const location = useLocation();

  // Using the values you get from the hook, derive other values
  console.log(location);
  const pathname = location.pathname;
  const search = location.search;

  const searchParams = new URLSearchParams(search);
  const currentTab = searchParams.get("tab") || "(none)";

  // Render the component
  return (
    <div>
      <h3>Router Hooks: useLocation</h3>
      {/* Filled in, in a bit */}
      <p>
        <strong>Pathname: </strong> {pathname}
      </p>
      <p>
        <strong>Query String: </strong> {search}
      </p>
      <p>
        <strong>Current Tab parameter: </strong> {currentTab}
      </p>

      <div style={{ marginTop: "0.8rem" }}>
        <p>Try these links and watch the values change</p>
        <ul>
          <li>
            <Link to="/hooks">/hooks</Link>
          </li>{" "}
          <li>
            <Link to="/hooks?tab=router">/hooks?tab=router</Link>
          </li>{" "}
          <li>
            <Link to="/hooks?tab=state">/hooks?tab=state</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RouterHooksPanel;
