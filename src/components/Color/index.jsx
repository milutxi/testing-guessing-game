import styles from './color.module.scss'
const Color = ({ color, guessColorClick }) => {
    
    return (
        <div >
            <button onClick={() => guessColorClick(color)} className={styles.button}>
                {color}
            </button> 
        </div>
    )
}

export default Color;

