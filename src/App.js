import './App.css';
import Board from "./components/Board";
import Status from "./components/Status";
import ResetButton from "./components/ResetButton";
import React, {createContext, useEffect, useState} from "react";

function App() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [status, setStatus] = useState("")
    const [isCounterX, setIsCounterX] = useState(true);
    const [endGame, setEndGame] = useState(false)

    const handleReset = () => {
        setSquares(Array(9).fill(null))
        setIsCounterX(true)
        setEndGame(false)
    }

  return (
        <div className="App flex flex-col w-full py-4 gap-10 items-center justify-center">
            <Status
                status={status}
                setStatus={setStatus}
                squares={squares}
                isCounterX={isCounterX}
                setEndGame={setEndGame}
            />

            <Board
                squares={squares}
                setSquares={setSquares}
                isCounterX={isCounterX}
                setIsCounterX={setIsCounterX}
                endGame={endGame}
            />

            <ResetButton handleReset={handleReset} />
        </div>
  );
}

export default App;
