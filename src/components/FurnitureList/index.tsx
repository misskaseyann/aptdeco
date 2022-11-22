import { Furniture } from "../../types/shared-types";
import FurnitureCard from "../FurnitureCard";

type Props = {
  furnitureList: Furniture[];
};

const FurnitureList: React.FC<Props> = (props) => {
  return (
    <div className="Furniture-List">
      {props.furnitureList.map((f) => (
        <FurnitureCard key={Math.random()} furniture={f} />
      ))}
    </div>
  );
};

export default FurnitureList;
