import React, { useState } from "react";
import "./style/App.css";
function App() {
  const [count, setCount] = useState(1);
  const [word, setWord] = useState("asd");
  const [bcg, setBcg] = useState("counter");

  // function Uslovie() {
  //   if (count < 0) {
  //     false;
  //   } else if (count == 0) {
  //     setCount(0);
  //     setWord("0");
  //     setBcg("");
  //     console.log("==0");
  //   } else if (count % 2 !== 0) {
  //     setWord("Четное");
  //     setBcg("odd");
  //   } else if (count % 2 == 0) {
  //     setWord("Не четное");
  //     setBcg("even");
  //   }
  // }
  function logica() {
    if (count < 1) {
      setCount(0);
      setWord("0");
    } else if (count % 2 !== 0 && count !== 0) {
      setWord("чётное");
      setBcg("counter odd");
    } else {
      setWord("не чётное");
      setBcg("counter even");
    }
  }

  function Incr() {
    logica();
    setCount(count + 1);
  }
  function Dicr() {
    setCount(count - 1);
    logica();
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
        <div className="box-text">
          Введено {word} число - {count}
        </div>
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
