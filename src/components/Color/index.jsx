
const Color = ({ color, guessColorClick }) => {
    
    return (
        <div>
            <button onClick={() => guessColorClick(color)}>
                {color}
            </button> 
        </div>
    )
}

export default Color;

