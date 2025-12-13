import { useState } from "react";

export default function ReducerPanelState() {
  // Initialise form state object
  // form = {title: string, body: string}
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  // Handle Input Changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset the form back to the original state
  const handleReset = () => {
    setForm({ title: "", body: "" });
  };

  // Return JSX
  return (
    <div>
      <h3>Dev Note (useState)</h3>

      {/* Title input, controlled by form.title */}
      <div>
        <label>
          Title:{" "}
          <input
            name="title"
            type="string"
            value={form.title}
            onChange={handleChange}
            placeholder="Note title"
          />
        </label>
      </div>
      <div>
        <label>
          Body:{" "}
          <textarea
            name="body"
            value={form.body}
            onChange={handleChange}
            placeholder="Write something..."
            rows={3}
          />
        </label>
      </div>

      <button onClick={handleReset}>Reset</button>

      <pre style={{
        marginTop: "1rem",
        background: "#b4b3b3ff",
        padding: "1rem"
      }}>
        {JSON.stringify(form, null, 2)}
      </pre>
    </div>
  );
}
