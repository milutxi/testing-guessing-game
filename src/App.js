import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import CorrectGuessesInARow from './components/CorrectGuessesInARow';
import ColorToGuess from './components/ColorToGuess';
import ColorOptions from './components/ColorOptions';
import WrongGuess from './components/WrongGuess';


import './App.css';



function App() {
    const colors = [    
        {
            name: "hot pink",
            code: "FF69B4"
        },
        {
            name: "firebrick",
            code: "B22222"
        },
        {
            name: "light coral",
            code: "F08080"
        },
        {
            name: "orange",
            code: "FFA500"
        },
        {
            name: "pale golden rod",
            code: "EEE8AA"
        },
        {
            name: "dark olive green",
            code: "556B2F"
        },
        {
            name: "aqua marine",
            code: "7FFFD4"
        },
        {
            name: "medium orchid",
            code: "BA55D3"
        },
        {
            name: "royal blue",
            code: "4169E1"
        }
        ];

    const[chosenColors, setChosenColors]= useState(colors);
    const[wrongGuess, setWrongGuess] = useState(false);
    const [correctColor, setCorrectColor] = useState();
    const [correctGuessesInARow, setCorrectGuessesInARow] = useState(0);

    const chooseColors = (colors) => {
        let pickColors = [];
        for (let i = 0; i < 3; i++) {
            let newColor;
            do {
                let randomNumber = Math.floor(Math.random() * colors.length);
                newColor = colors[randomNumber];
            } while (pickColors.includes(newColor))
            pickColors.push(newColor);
        }
        setChosenColors(pickColors)
            
        let randomColor = Math.floor(Math.random() * pickColors.length);
            setCorrectColor(pickColors[randomColor].code);
        
        console.log(pickColors)
        console.log(correctColor)
    }

    // useEffect( () => {
    //     chooseColors(colors);
    //      // const xxx = async () => 
    //  }, []
    //  )

    const fetchData = async () => {
        
        await chooseColors(colors);
        console.log(correctColor);
    };

    useEffect(() => {
        fetchData();
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
        //chooseColors();  //reset game for nex round
        fetchData();
    }

    return (

        <div className="App">
            <Header />
            
            <CorrectGuessesInARow correctGuessesInARow={correctGuessesInARow}/>

            <ColorToGuess correctColor ={correctColor} />
            
            <ColorOptions colors ={chosenColors} guessColorClick={guessColorClick}  /> 
            {wrongGuess &&
                <WrongGuess />
            }
        </div>
    )
}

export default App;
