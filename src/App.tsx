import { useState } from "react";
import "./App.css";
import FurnitureControls from "./components/FurnitureControls";
import FurnitureList from "./components/FurnitureList";
import { Furniture } from "./types/shared-types";

function App() {
  const [furniture, setFurniture] = useState<Furniture[]>([]);

  return (
    <div>
      <div className="Top-Bar">
        <div className="Logo Space-Between">Apt Deco Technical 🛋</div>
        <FurnitureControls setFurniture={setFurniture} />
      </div>
      <div className="App">
        <FurnitureList furnitureList={furniture} />
      </div>
    </div>
  );
}

export default App;
