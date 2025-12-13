import { useEffect, useRef, useState } from "react";

export default function StateEffectPanel() {
  // Syntax for useState hook: const [varname, setterFunction] = useState(initialValue);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //   Syntax for useRef hook: const variableName = useRef(initialValue)
  const inputRef = useRef(null);
  const renderCountRef = useRef(0);

  renderCountRef.current += 1;

  //   Syntax for useEffect hook: useEffect(arrow function, dependency array);
  // Example of Lifecycle method: componentDidUpdate
  useEffect(() => {
    document.title = `Count: ${count}, Name: ${name || "Dev"}`;
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

  const handleFocusInput = () => {
    if (inputRef.current) {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleFocusInput}>Focus on input</button>

      <div style={{ marginTop: "1rem" }}>
        <label>
          Name:{" "}
          <input
            ref={inputRef}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Type your name here..."
          />
        </label>
      </div>
      <p>Component has rendered { renderCountRef.current } times</p>
    </div>
  );
}
