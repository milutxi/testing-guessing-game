import styles from './wrongGuess.module.scss';

const WrongGuess = () => {
    return (
        <div data-testid='wrong-guess'
        className={styles.wrong}>
            <p className={styles["wrong__text"]}>Wrong guess</p>
        </div>
    )
}

export default WrongGuess;
