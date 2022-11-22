import { useState } from "react";
import "./App.css";
import FurnitureControls from "./components/Configuration";
import FurnitureList from "./components/FurnitureList";
import { Furniture } from "./types/shared-types";

function App() {
  const [furniture, setFurniture] = useState<Furniture[]>([]);

  return (
    <div className="App Space-Between">
      <FurnitureControls setFurniture={setFurniture} />
      <FurnitureList furnitureList={furniture} />
    </div>
  );
}

export default App;
