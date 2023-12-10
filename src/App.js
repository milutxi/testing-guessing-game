import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import CorrectGuessesInARow from './components/CorrectGuessesInARow';
import ColorToGuess from './components/ColorToGuess';
import ColorOptions from './components/ColorOptions';
import WrongGuess from './components/WrongGuess';

import './App.scss';

function App() {
    
    // const colors = [    
    //     {
    //         name: "hot pink",
    //         code: "FF69B4"
    //     },
    //     {
    //         name: "firebrick",
    //         code: "B22222"
    //     },
    //     {
    //         name: "light coral",
    //         code: "F08080"
    //     },
    //     {
    //         name: "orange",
    //         code: "FFA500"
    //     },
    //     {
    //         name: "pale golden rod",
    //         code: "EEE8AA"
    //     },
    //     {
    //         name: "dark olive green",
    //         code: "556B2F"
    //     },
    //     {
    //         name: "aqua marine",
    //         code: "7FFFD4"
    //     },
    //     {
    //         name: "medium orchid",
    //         code: "BA55D3"
    //     },
    //     {
    //         name: "royal blue",
    //         code: "4169E1"
    //     }
    //     ];

    const generateRandomHexColor = () => {
        const randomColors = Array.from({length: 3}, ()=> {

            const randomColorNumber = Math.floor(Math.random()*16777215);
            const hexColor = randomColorNumber.toString(16);
            return ("000000" + hexColor).slice(-6).toUpperCase();
        })
            return randomColors;
    };

    console.log(generateRandomHexColor());

    const[chosenColors, setChosenColors]= useState([]);
    const[wrongGuess, setWrongGuess] = useState(false);
    const [correctColor, setCorrectColor] = useState();
    const [correctGuessesInARow, setCorrectGuessesInARow] = useState(0);

    const startGame = () => {
        const randomColors = generateRandomHexColor();
        setChosenColors(randomColors);

        const randomColorIndex = Math.floor(Math.random()*randomColors.length);
        setCorrectColor(randomColors[randomColorIndex]);
    }

    useEffect(() => {
        startGame();
    },[]);

    const guessColorClick = (guessedColor) => {
        if (guessedColor === correctColor) {

            setWrongGuess(false);
            const rightOne = correctGuessesInARow + 1
            setCorrectGuessesInARow(rightOne);

            if (rightOne === 3) {
                console.log("Congratulations 3 in a row!!!");
            }

        } else {
            setWrongGuess(true);
            setCorrectGuessesInARow(0)
           
        }
       
        startGame();
    };

    return (

        <div className="App" data-testid='app'>
            <Header />
            <CorrectGuessesInARow correctGuessesInARow={correctGuessesInARow} />
            <ColorToGuess correctColor ={correctColor} />  
            <ColorOptions colors ={chosenColors} guessColorClick={guessColorClick} /> 
            {wrongGuess &&
                <WrongGuess />
            }
        </div>
    )
}

export default App;
