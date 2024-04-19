import { useEffect, useReducer } from "react";
import Loader from "./loader";
import Error from "./Error";
import Questiuns from "./Questiuns";
import QuastionBox from "./QuastionBox";
import HeaderMenu from "./HeaderMenu";
import ResultAsk from "./ResultAsk";

const initialstate = {
  status: "loading",
  quastion: null,
  index: 0,
  answer: null,
  points: 0,
  seconde: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataresive":
      return {
        ...state,
        quastion: state.quastion === null ? action.payload : state.quastion,
        answer: null,
        status: "ready",
        points: 0,
        index: 0,
        seconde: 600,
      };
    case "datafair":
      return { ...state, status: "error" };
    case "startAsk":
      return { ...state, status: "start" };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === state.quastion[state.index].correctOption
            ? state.points + state.quastion[state.index].points
            : state.points,
      };
    case "newAsk":
      return {
        ...state,
        status: "start",
        index: state.index + 1,
        answer: action.payload,
      };
    case "end":
      return { ...state, status: "end" };
    case "time":
      return {
        ...state,
        seconde: state.seconde - 1,
        status: state.seconde === 0 ? "end" : state.status,
      };
    default:
      throw new Error("non action");
  }
}

function Main() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  useEffect(function () {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataresive", payload: data }))
      .catch((err) => dispatch({ type: "datafair" }));
  }, []);

  return (
    <main>
      {state.status === "loading" && <Loader />}
      {state.status === "error" && <Error />}
      {state.status === "ready" && (
        <Questiuns quastion={state.quastion} dispatch={dispatch} />
      )}
      {state.status === "start" && <HeaderMenu state={state} />}
      {state.status === "start" && (
        <QuastionBox
          answer={state.answer}
          quastion={state.quastion[state.index]}
          dispatch={dispatch}
          index={state.index}
          seconde={state.seconde}
        />
      )}
      {state.status === "end" && (
        <ResultAsk dispatch={dispatch} points={state.points} />
      )}
    </main>
  );
}

export default Main;
