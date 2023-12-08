const CorrectGuessesInARow = ({correctGuessesInARow}) => {
    return (
        <div>
            <h2 data-testid='correct-guesses-in-a-row-text'>
                Correct guesses in a row: 
            <span data-testid='correct-guesses-in-a-row-value'>{correctGuessesInARow}</span>    
            </h2>
            
        </div>
    )

}

export default CorrectGuessesInARow;