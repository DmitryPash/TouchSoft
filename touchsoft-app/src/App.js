import React, { useEffect, useState } from "react";
import "./style/App.css";
function App() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("asd");
  const [bcg, setBcg] = useState("counter");

  useEffect(() => {
    logica();
  });

  function logica() {
    if (count % 2 == 0 && count !== 0) {
      setBcg("counter even");
      setWord("четное");
    } else if (count % 2 !== 0 && count !== 0) {
      setBcg("counter odd");
      setWord("не четное");
    } else {
      setWord("0");
    }
  }

  function Incr() {
    setCount(count + 1);
  }
  function Dicr() {
    if (count >= 1) {
      setCount(count - 1);
    }
  }
  function Reset() {
    setCount(count - count);
    setWord("0");
    setBcg("counter");
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className={bcg}>{count}</div>
        <div className="box-text">Введено {word} число</div>
        <div className="btn-group">
          <button onClick={Dicr}>Decriase</button>
          <button onClick={Incr}>Increase</button>
          <button onClick={Reset} className="btn-group-reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
