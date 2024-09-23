import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable to track if dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Toggle between dark and light mode
  function handleClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Use the state variable to determine the class name
  const appClass = isDarkMode ? "App dark" : "App light";
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{appClass ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
