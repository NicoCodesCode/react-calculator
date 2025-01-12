import { evaluate } from "mathjs";

const ACTIONS = {
  DISPLAY_TEXT: "display-text",
  RESOLVE: "resolve",
  CLEAR: "clear",
  BACKSPACE: "backspace",
};

function CalculatorReducer(state, action) {
  switch (action.type) {
    case ACTIONS.DISPLAY_TEXT:
      if (state.textOnScreen === "Syntax Error") {
        return { ...state, textOnScreen: action.payload };
      }

      return { ...state, textOnScreen: state.textOnScreen + action.payload };
    case ACTIONS.RESOLVE:
      if (state.textOnScreen) {
        try {
          const solution = evaluate(state.textOnScreen).toString();

          return {
            ...state,
            textOnScreen: solution || (solution === 0 ? "0" : "Syntax Error"),
          };
        } catch (error) {
          return { ...state, textOnScreen: "Syntax Error" };
        }
      }
    case ACTIONS.CLEAR:
      return { ...state, textOnScreen: "" };
    case ACTIONS.BACKSPACE:
      if (state.textOnScreen) {
        return { ...state, textOnScreen: state.textOnScreen.slice(0, -1) };
      }
    default:
      return state;
  }
}

export { CalculatorReducer, ACTIONS };
