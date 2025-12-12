import { useState } from "react";

export default function StateEffectPanel() {
  // Syntax: const [varname, setterFunction] = useState(initialValue);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <div style={{ marginTop: "1rem" }}>
        <label>
            Name:{" "}
            <input 
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Type your name here..."
                />
        </label>
      </div>
    </div>
  );
}
