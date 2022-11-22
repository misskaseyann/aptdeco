import { useEffect, useState } from "react";
import { Furniture } from "../../types/shared-types";

type Props = {
  setFurniture: (furnitureList: Furniture[]) => void;
};

const FurnitureControls: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [baseFurniture, setBaseFurniture] = useState<Furniture[]>([]);

  useEffect(() => {
    fetch("/data/furniture.json").then(async (v) => {
      const furnitureList: Furniture[] = await v.json();
      props.setFurniture(furnitureList);
      setBaseFurniture(furnitureList);
      setCount(furnitureList.length);
    });
    // Only run the use effect once to ensure we made the request.
    // I wanted to "simulate" making a request a request for data.
    // Realistically this would live in a hook using Apollo.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNumberChanged = (val: string) => {
    if (isNaN(+val)) {
      throw new Error("Should not have gotten here!");
    }

    const num = Number.parseInt(val);
    setCount(num);
    props.setFurniture(
      Array.from(Array(num)).map(
        (_v, i) => baseFurniture[i % baseFurniture.length]
      )
    );
  };

  return (
    <label className="Input Space-Between">
      <span>Set Furniture Count:</span>
      <input
        type="number"
        min={0}
        value={count}
        onChange={(e) => onNumberChanged(e.target.value)}
      />
    </label>
  );
};

export default FurnitureControls;
