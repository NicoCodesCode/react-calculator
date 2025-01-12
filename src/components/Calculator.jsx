import { useReducer } from "react";

import { CalculatorReducer, ACTIONS } from "../CalcReducer";

import CalcScreen from "./CalcScreen";
import CalcButton from "./CalcButton";

import "../index.css";

export default function Calculator() {
  const [state, dispatch] = useReducer(CalculatorReducer, { textOnScreen: "" });

  const handleButtonClick = (character) => {
    switch (character) {
      case "=":
        dispatch({ type: ACTIONS.RESOLVE });
        break;
      case "C":
        dispatch({ type: ACTIONS.CLEAR });
        break;
      case "<-":
        dispatch({ type: ACTIONS.BACKSPACE });
        break;
      default:
        dispatch({
          type: ACTIONS.DISPLAY_TEXT,
          payload: character,
        });
        break;
    }
  };

  const buttons = [
    { text: "C", name: "clear" },
    { text: "<-", name: "backspace" },
    { text: "=", name: "equals" },
    { text: "+", name: "plus" },
    { text: "9", name: "nine" },
    { text: "8", name: "eight" },
    { text: "7", name: "seven" },
    { text: "-", name: "minus" },
    { text: "6", name: "six" },
    { text: "5", name: "five" },
    { text: "4", name: "four" },
    { text: "*", name: "times" },
    { text: "3", name: "three" },
    { text: "2", name: "two" },
    { text: "1", name: "one" },
    { text: "/", name: "div" },
    { text: "0", name: "zero" },
    { text: ".", name: "dot" },
  ];

  return (
    <div className="calc-container">
      <CalcScreen textOnScreen={state.textOnScreen} />
      <div className="buttons-container">
        {buttons.map((button, index) => (
          <CalcButton
            key={index}
            handleButtonClick={() => handleButtonClick(button.text)}
            name={button.name}
          >
            {button.text}
          </CalcButton>
        ))}
      </div>
    </div>
  );
}
