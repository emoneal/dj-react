import React, {useState} from 'react'
import './App.css';
import Squares from './Squares'

function App() {

const [squareColor, setSquareColor] = React.useState(["white", "white", "white", "white"])

  function handleSmallTime() {
    setSquareColor(prevColors => prevColors.map(each => each === "white" ? "black" : "white"))
  }

  function handlePartyDJ() {
    setSquareColor(prevColors => [...prevColors.slice(0, 2).map(each => each === "purple" ? "white" : "purple"), ...prevColors.slice(2, 4)])
  }

  return (
    <div className="App">
      <div className="container">
        <Squares color={squareColor[0]} />
        <Squares color={squareColor[1]} />
        <Squares color={squareColor[2]} />
        <Squares color={squareColor[3]} />
      </div>
    <div className="button" onClick={handleSmallTime}>Small Time DJ</div>
    <div className="button" onClick={handlePartyDJ}>Party DJ</div>
    </div>
  );
}

export default App;
