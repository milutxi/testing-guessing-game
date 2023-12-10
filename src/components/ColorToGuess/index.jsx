import styles from './colorToGuess.module.scss';

const ColorToGuess = ({correctColor}) => {
    return (
        <div className={styles.guess}>
            <div className={styles["guess__text"]}>
              <p>Which color is this?</p> 
              <p>Choose a button to guess it</p>
            </div>
            <div
                data-testid='color-to-guess'
                style={{backgroundColor: correctColor ? `#${correctColor}` : '#FFFFFF'}}
                className={styles["guess__color"]}>
            </div>
        </div>
    )
}

export default ColorToGuess;


