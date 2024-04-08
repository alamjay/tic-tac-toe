import {useEffect} from "react";
import CrossIcon from "./icons/CrossIcon";
import NaughtsIcon from "./icons/NoughtsIcon";
import {CalculateWinner} from "../hooks/CalculateWinner";
function Board({squares, setSquares, setStatus, isCounterX, setIsCounterX, endGame, setEndGame}) {

    useEffect(() => {
        const calcWinner = CalculateWinner(squares)
        if (squares.every(element => element !== null)) {
            setStatus("Tie")
        } else if (calcWinner === "X") {
            setStatus("Winner: X")
            setEndGame(true)
        } else if (calcWinner === "O") {
            setStatus("Winner: O")
            setEndGame(true)
        } else if (squares.every(element => element === null)) {
            setStatus("Next player: X")
        } else {
            isCounterX ? setStatus("Next player: X") : setStatus("Next player: O")
        }
    }, [squares, isCounterX])

    const renderSquare = (index) => {
        const middleColumn = [1, 4, 7]
        const middleRow = [3, 4, 5]

        return (
            <button
                className={`flex items-center justify-center square w-40 h-40
                    ${middleColumn.includes(index) && "border-x-4 border-gray-500"}
                    ${middleRow.includes(index) && "border-y-4 border-gray-500"}
                `}
                onClick={() => handleClick(index)}
            >
                {squares[index] && (squares[index] === "X" ?
                    <CrossIcon /> :
                    <NaughtsIcon />)
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
        }
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