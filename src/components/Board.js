import {useEffect, useState} from "react";

function Board({squares, setSquares, setStatus, isCounterX, setIsCounterX, endGame, setEndGame}) {

    useEffect(() => {
        calculateWin()
        if (squares.every(element => element !== null)) {
            setStatus("Tie")
        }
    }, [squares])

    const renderSquare = (index) => {
        const middleColumn = [1, 4, 7]
        const middleRow = [3, 4, 5]

        return (
            <button
                className={`square w-40 h-40
                    ${middleColumn.includes(index) && "border-x-4 border-gray-500"}
                    ${middleRow.includes(index) && "border-y-4 border-gray-500"}
                `}
                onClick={() => handleClick(index)}
            >
                {squares[index] && (squares[index] === "X" ?
                    "X" :
                    "O")
                }
            </button>
        )
    }

    const handleClick = (index) => {
        const newSquares = [...squares]

        if (!endGame && !squares[index]) {
            newSquares[index] = isCounterX ? "X" : "O"
            setSquares(newSquares)
            setIsCounterX(!isCounterX)
            setStatus(`Next player: ${!isCounterX ? "X" : "O"}`)
        }
    }

    const calculateWin = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setStatus(`Winner: ${squares[a]}`)
                setEndGame(true)
            }
        }
        // setWinner(null) ;
    }

    return (
        <div className="board">
            <div className="flex">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="flex">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="flex">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board