function ResetButton({setSquares, setStatus, setIsCounterX, setEndGame}) {

    const handleReset = () => {
        setSquares(Array(9).fill(null))
        setStatus("Next player: X")
        setIsCounterX(true)
        setEndGame(false)
    }

    return (
        <button
            className="reset button pointer bg-gray-700 text-white px-4 py-2 rounded-md"
            onClick={handleReset}
        >
            Reset
        </button>
    )
}

export default ResetButton;