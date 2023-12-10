import styles from './correctGuesses.module.scss';

const CorrectGuessesInARow = ({correctGuessesInARow}) => {
    return (
        <div className={styles.correct}>
            <h2 data-testid='correct-guesses-in-a-row-text'
                className={styles["correct__title"]}>
                Correct guesses in a row: <span data-testid='correct-guesses-in-a-row-value'
                    className={styles["correct__value"]}>
                     {correctGuessesInARow}
                </span>    
            </h2>
            
        </div>
    )

}

export default CorrectGuessesInARow;