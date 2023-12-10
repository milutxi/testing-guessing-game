import styles from './rightGuess.module.scss';

const RightGuess = () => {
    return (
        <div data-testid='right-guess'
        className={styles.right}>
            <p className={styles["right__text"]}>Right guess, WELL DONE!!!!</p>
        </div>
    )
}

export default RightGuess;