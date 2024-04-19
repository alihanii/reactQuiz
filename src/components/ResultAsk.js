function ResultAsk({ points, dispatch = { dispatch } }) {
  const darsad = (points / 280) * 100;

  return (
    <>
      <div className="btn-ResultAsk">
        you scored {points} out of 280 ({darsad.toFixed(0)}%)
      </div>
      <button className="btn" onClick={() => dispatch({ type: "dataresive" })}>
        restart
      </button>
    </>
  );
}

export default ResultAsk;
