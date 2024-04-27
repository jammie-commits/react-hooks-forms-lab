
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, onSearchChange }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce"); // Initial value

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);
  };

  const handleInputChange = (event) => {
    setItemName(event.target.value);
    // Check if onSearchChange prop exists before calling it
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label htmlFor="name">Item Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={itemName}
        onChange={handleInputChange} // Use handleInputChange
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        name="category"
        value={itemCategory}
        onChange={(event) => setItemCategory(event.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
