import Color from '../Color';
import styles from './colorOptions.module.scss';

const ColorOptions = ({colors, guessColorClick}) => {
       return(
        <div data-testid="color-options" className={styles.colors}>
            {colors && (
            colors.map((color, index) =>  
            <Color color={color} key={index} guessColorClick={guessColorClick} /> )
            )}
        </div>
    )
};

export default ColorOptions;

