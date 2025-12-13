import { useReducer } from "react";

const initialForm = {
    title: "", body: "",
};

function formReducer(state, action) {
    switch (action.type) {
        case "change_field":
            return {
                ...state,
                [action.field]: action.value
            };
        case "reset":
            return initialForm;
        default:
            return state;
    }
}

export default function ReducerPanel() {

    const [form, dispatch] = useReducer(formReducer, initialForm);

    const handleChange = (event) => {
        const {name, value} = event.target;
        dispatch({  
            type: "change_field",
            field: name,
            value,
        });
    };

    const handleReset = () => {
        dispatch({
            type: "reset"
        });
    }
  
  // Return JSX
  return (
    <div>
      <h3>Dev Note (useReducer)</h3>

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
