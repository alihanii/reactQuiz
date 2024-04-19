import { useEffect } from "react";

function Timer({ dispatch, seconde }) {
  useEffect(
    function () {
      const time = setInterval(function () {
        dispatch({ type: "time" });
      }, 1000);
      console.log("hi");
      return () => clearInterval(time);
    },
    [dispatch]
  );
  const sec = seconde % 60;
  const min = Math.floor(seconde / 60);

  return (
    <div>
      <div className="btn">
        {min < 10 ? `0${min}` : min}:{sec}
      </div>
    </div>
  );
}

export default Timer;
