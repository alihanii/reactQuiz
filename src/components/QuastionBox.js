import Timer from "./Timer";

function QuastionBox({ quastion, dispatch, answer, index, seconde }) {
  const answeIsAnswer = answer !== null;

  return (
    <div className="QuastionBox">
      <h4>{quastion.question}</h4>
      {quastion.options.map((element, i) => {
        return (
          <button
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
            className={`btn btn_answer ${
              answeIsAnswer &&
              (i === quastion.correctOption ? "answerRight" : "answerWrong")
            }`}
            key={element}
            disabled={answeIsAnswer}
          >
            {element}
          </button>
        );
      })}{" "}
      <div className="felx">
        <Timer seconde={seconde} dispatch={dispatch} />
        {answeIsAnswer && (
          <button
            className="btn"
            onClick={() =>
              dispatch({ payload: null, type: index === 14 ? "end" : "newAsk" })
            }
          >
            {index === 14 ? "finish" : "next"}
          </button>
        )}
      </div>
    </div>
  );
}

export default QuastionBox;
