import { Furniture } from "../../types/shared-types";
import MapPin from "../vectors/MapPin";

type Props = {
  furniture: Furniture;
};

const formatTruncatedCurrency = (num: number) =>
  num.toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

const FurnitureCard: React.FC<Props> = (props) => (
  <div>
    <div className="Furniture-Image-Container">
      <img
        className="Furniture-Image"
        src={props.furniture.imagePath}
        alt={props.furniture.title}
      />
    </div>
    <div className="Furniture-Content Space-Between">
      <div className="Location-Row">
        <div>{MapPin}</div>
        <div>{props.furniture.region}</div>
      </div>
      <div className="Header">{props.furniture.title}</div>
      <div className="Subheader">
        {formatTruncatedCurrency(props.furniture.price)} &#xB7; Qty{" "}
        {props.furniture.qty}{" "}
        {props.furniture.setQty && (
          <span>&#xB7; Set of {props.furniture.setQty}</span>
        )}
      </div>
      {props.furniture.retailPrice && (
        <div className="Caption">
          Est retail: {formatTruncatedCurrency(props.furniture.retailPrice)}
        </div>
      )}
    </div>
  </div>
);

export default FurnitureCard;
