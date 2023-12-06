
const Color = ({ color, guessColorClick }) => {
    
    return (
        <div>
            <button onClick={() => guessColorClick(color.code)}>
                {color.code}
            </button> 
        </div>
    )
}

export default Color;

