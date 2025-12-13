import { useEffect, useState } from "react";

export default function StateEffectPanel() {
  // Syntax: const [varname, setterFunction] = useState(initialValue);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //   Syntax for useEffect hook: useEffect(arrow function, dependency array);
  // Example of Lifecycle method: componentDidUpdate
  useEffect(() => {
    document.title = `Count: ${count}, Name: ${name || 'Dev'}`;
  }, [count, name]);

  // Lifecycle method: componentDidMount
  useEffect(() => {
    console.log("StateEffectPanel Component is loaded!!");
  }, []);

  // Example of Lifecycle method: componentDidUpdate
  useEffect(() => {
    console.log("Name changed to: ", name);
  }, [name]);

  // componentWillUnmount will execute when you return something from the arrow function

  const handleIncrement = () => {
    setCount((prev) => ++prev);
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
