# Color guessing game  
 

    Components: App: 
                     Handles game state
                Header:
                        Display game title 
                Colors: 
                        Hex colors for user to guess between
                Color: 
                        A button for each color to click on
                ColorToGuess: 
                        Displaying the color user is trying to guess
                WrongGuess:
                        Tells user if guess was incorrect
                CorrectGuessesInARow:
                        Displaying the number of correct guesses user has made in a row                

    State: colors
           correctColor
           wrongGuess
           correctGuessesInARow 

    Gameplay: Render buttons with colors
              Comparison ( user button clicked & correctColor )

    Result: Correct Guess: 
                           Change the color to guess to a new color
                           Change the Color options to new options
                           Increment correct guesses in a row by 1     
    
            Incorrect Guess: 
                             Tell user they made a wrong guess
                             Set correct guesses in a row to 0  

## SCREENSHOTS

### Initial game
![image](https://github.com/maxhaggmancmedu/testing-guessing-game/assets/116894648/13d8ff50-63f6-438a-bf53-fbe3581078c3)

### User correct guess
![image](https://github.com/maxhaggmancmedu/testing-guessing-game/assets/116894648/c8f38df6-5569-42bc-b634-ae928ca4b04a)

### User incorrect guess
![image](https://github.com/maxhaggmancmedu/testing-guessing-game/assets/116894648/f5ebdecd-66af-4391-8070-75570f636bca)



    




