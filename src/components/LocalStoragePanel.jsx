import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LocalStoragePanel() {
  const [nickname, setNickname] = useLocalStorage("username", "");
  const [darkMode, setDarkMode] = useLocalStorage("darkmode", false);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <h3>Local Storage Hook</h3>
      <div>
        <label>
          Nickname:{" "}
          <input
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="Who are you?"
          />
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />{" "}
          Dark Mode Preference
        </label>
      </div>

      <p>Stored Nickname: {nickname || "(none yet)"}</p>
      <p>Stored Dark Mode flag: {darkMode ? "true" : "false"}</p>
      <p style={{ fontSize: "0.75rem", color: "#9c0000ff" }}>
        Try reloading the page, the values should persist
      </p>
    </div>
  );
}
