import styles from './wrongGuess.module.scss';

const WrongGuess = () => {
    return (
        <div data-testid='wrong-guess'
        className={styles.wrong}>
            <h3 className={styles["wrong__text"]}>Wrong guess</h3>
        </div>
    )
}

export default WrongGuess;
