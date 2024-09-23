import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // State to track the selected category for filtering
  const [filterBy, setFilterBy] = useState("All");

  // Handler to update the filterBy state when the user selects a different option
  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  // Filter the items based on the selected category
  const itemsToDisplay = items.filter((item) => {
    // Show all items if "All" is selected, otherwise filter by the selected category
    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;