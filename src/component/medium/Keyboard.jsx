import React, {useContext, useEffect, useCallback} from 'react';
import Key from './Key.jsx';
import {MediumContext} from './Medium.jsx';
import '../../App.css';

export default function Keyboard() {

    const { board, setBoard, 
        currTry, setCurrTry, 
        setSentense, 
        wordSet, correctWord, 
        gameOver, setGameOver} 
        = useContext(MediumContext);

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    const letterLength = 6;
    const maxAttempt = 6;

    const onSelectLetter = ((keyVal) => {
        if (currTry.letterPos >= letterLength) {
            setSentense("The Word is too long, honey :)")
            return;
        }
        setSentense("Everything looks good :)");
        const newBoard = [...board];
        newBoard[currTry.noOfAttempt][currTry.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrTry({...currTry, letterPos: currTry.letterPos + 1})
    });

    const handleKeyboard = useCallback((event) => {
        if (event.key === "Enter") {
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
                console.log("here!")
                setGameOver({
                    gameOver: true,
                    guessSuccess: false,
                })
                return;
            }

        } else if (event.key === "Backspace") {
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
            keys1.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            })
            keys2.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            })
            keys3.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            })
        }
    }) 

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard])

    return (
        <div className = "keyboard" onKeyDown = {handleKeyboard}> 
            <div className = "line1">
                {keys1.map((key) => {
                    return (
                    <div className = "key"> 
                        <Key keyVal = {key} letterLength = {letterLength}/>
                    </div>)
                })}
            </div>
            <div className = "line2">
                {keys2.map((key) => {
                    return (
                    <div className = "key"> 
                        <Key keyVal = {key} letterLength = {letterLength}/>
                    </div>)
                })}
            </div>
            <div className = "line3">
                <div className = "key" id = "big"> 
                    <Key keyVal = "ENTER" letterLength = {letterLength}/> 
                </div>
                {keys3.map((key) => {
                    return (
                    <div className = "key"> 
                        <Key keyVal = {key} letterLength = {letterLength}/>
                    </div>)
                })}
                <div className = "key" id = "big"> 
                    <Key keyVal = "DELETE" letterLength = {letterLength}/> 
                </div>
            </div>
        </div>
    )

}