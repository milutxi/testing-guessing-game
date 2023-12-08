import Color from '../Color';

const ColorOptions = ({colors, guessColorClick}) => {
       return(
        <div data-testid="color-options">
            {colors && (
            colors.map((color, index) =>  
            <Color color={color} key={index} guessColorClick={guessColorClick} /> )
            )}
        </div>
    )
};

export default ColorOptions;

