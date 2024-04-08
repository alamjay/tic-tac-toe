function ResetButton({handleReset}) {

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