import Color from '../Color';

const ColorOptions = ({colors, guessColorClick}) => {
       return(
        <div data-testid="color-options">
            {colors && (
            colors.map((colors, index) =>  
            <Color color={colors} key={index} guessColorClick={guessColorClick} /> )
            )}
        </div>
    )
};

export default ColorOptions;

