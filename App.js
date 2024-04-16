import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import Header from "./Header";
import Form from "./Form";
import ItemList1 from "./ItemList1";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  function handleRemove(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems([]);
    }
  };

  const handleToggleChecked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div>
      <Header />
      <Form onAddItem={handleAddItems} />
      <ItemList1
        items={sortedItems}
        onDelete={handleRemove}
        onToggleChecked={handleToggleChecked}
      />
      <div className="text-center d-flex justify-content-center">
        <button onClick={handleClearList} className="btn mx-2 bg-white">
          Clear
        </button>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ backgroundColor: "white", width: "auto " }}
          className="rounded mx2 form-select"
        >
          <option className="text-white" value="input">
            Sort By Input
          </option>
          <option className="text-white" value="name">
            Sort By Name
          </option>
          <option className="text-white" value="checked">
            Sort by Status
          </option>
        </select>
      </div>
      <br />
      <Footer items={sortedItems} />
    </div>
  );
}

export default App;
