import {useEffect} from "react";
import {CalculateWinner} from "../hooks/CalculateWinner";

function Status ({status, isCounterX, squares, setEndGame, setStatus}) {

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

    return (
        <div className="status p-4 w-[232px] border-2 border-gray-500 rounded-md">
            <h3 className="text-3xl font-semibold font-sans">{status}</h3>
        </div>
    )
}

export default Status;