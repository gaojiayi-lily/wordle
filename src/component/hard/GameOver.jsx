import React, { useContext } from 'react'
import { HardContext } from './Hard'

function GameOver() {

    const {gameOver, correctWord} = useContext(HardContext);

    return (
        <div className = "margin-left">
            <h3>
                {gameOver.guessSuccess ? "Congrats! You nailed it!" : "You failed :("}
            </h3>
            <h1> Correct World: {correctWord}</h1>
        </div>
    )
}

export default GameOver