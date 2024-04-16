import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form input-group container" style={{ width: "500px" }}>
          <select
            className="bg-white"
            value={quantity}
            onChange={(f) => setQuantity(+f.target.value)}
          >
            {Array.from({ length: 30 }, (_, n) => n + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control text-white"
            style={{ backgroundColor: "#15384B" }}
            placeholder="Add an Item..."
            aria-label="Add an Item..."
            aria-describedby="button-addon2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button
            className="btn btn-outline-secondary text-white"
            style={{ backgroundColor: "#091b23" }}
            type="submit"
            id="button-addon2"
          >
            I Got This!
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
