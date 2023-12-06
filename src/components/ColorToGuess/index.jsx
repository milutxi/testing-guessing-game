const ColorToGuess = ({correctColor}) => {
    return (
        <div
            data-testid='color-to-guess'
            style={{backgroundColor: correctColor ? `#${correctColor}` : '#FFFFFF', width: "200px", height: "200px", border: "2px solid black"}}>
              <p>Which color is this?</p> 
              <p>Choose a button to guess it</p>
        </div>
    )
}

export default ColorToGuess;


