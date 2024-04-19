function Questiuns({ quastion, dispatch = { dispatch } }) {
  return (
    <div className="questions_start">
      <h2>Welcom to react quiz!</h2>
      <h4>{quastion.length} questions to test your react mastery</h4>
      <button
        onClick={() => dispatch({ type: "startAsk" })}
        className="btn btn_start"
      >
        let's start
      </button>
    </div>
  );
}

export default Questiuns;
