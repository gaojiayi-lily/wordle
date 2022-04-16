import React, {useContext} from 'react';
import {HardContext} from './Hard.jsx';

export default function Key({keyVal, letterLength}) {

    const { board, setBoard, 
        currTry, setCurrTry, 
        setSentense, 
        wordSet, correctWord, 
        gameOver, setGameOver} 
        = useContext(HardContext);
    const maxAttempt = 5;

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            if (currTry.letterPos !== letterLength) {
                setSentense("The Word is too short, honey :)")
                return;
            }
            setSentense("Everything looks good :)");

            let currWord = "";
            for (let i = 0; i < letterLength; i++) {
                currWord += board[currTry.noOfAttempt][i];
            }

            if (wordSet.has(currWord.toLowerCase())) {
                setCurrTry({noOfAttempt: currTry.noOfAttempt + 1, letterPos: 0});
            } else {
                setSentense("Word not exist :(");
                return;
            }

            if (currWord === correctWord.toUpperCase()) {
                setGameOver({
                    gameOver: true,
                    guessSuccess: true,
                })
                return;
            }

            if (currTry.noOfAttempt === maxAttempt - 1) {
                setGameOver({
                    gameOver: true,
                    guessSuccess: false,
                })
                return;
            }

        } else if (keyVal === "DELETE") {
            if (currTry.letterPos === 0) {
                setSentense("You cannot delete empty item.")
                return;
            }
            setSentense("Everything looks good :)");
            const newBoard = [...board];
            newBoard[currTry.noOfAttempt][currTry.letterPos - 1] = "";
            setBoard(newBoard);
            setCurrTry({...currTry, letterPos: currTry.letterPos - 1})

        } else {
            if (currTry.letterPos >= letterLength) {
                setSentense("The Word is too long, honey :)")
                return;
            }
            setSentense("Everything looks good :)");
            const newBoard = [...board];
            newBoard[currTry.noOfAttempt][currTry.letterPos] = keyVal;
            setBoard(newBoard);
            setCurrTry({...currTry, letterPos: currTry.letterPos + 1})

        }
    }

    return (
        <div>
            <div onClick = {selectLetter}>
                {keyVal}
            </div>
        </div>
    )

}
