import React from "react";
import "./BuildControls.css";
import BuildControl from "../BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildControls = props => (
  <div className="BuildControls">
    <p>
      Current price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        ingredientAdd={() => props.addIngredient(ctrl.type)}
        ingredientDeduct={() => props.removeIngredient(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className="OrderButton" disabled={!props.purchaseable} onClick={props.ordered}>
      Order Now
    </button>
  </div>
);

export default buildControls;
