import React, {useContext} from 'react';
import {MediumContext} from './Medium.jsx';
import '../../App.css';

export default function Letter({letterPos, attemptVal}) {

    const { board, correctWord, currTry } = useContext(MediumContext);
    const letter = board[attemptVal][letterPos];

    const checkDuplicate = ((letter) => {
        var currWord = "";
        for (let i = 0; i <= letterPos; i++) {
            currWord += board[attemptVal][i];
        }
        const currLength = currWord.split(letter).length;
        const length = correctWord.toUpperCase().split(letter).length;

        if (currLength > length) {
            return false;
        } else {
            return true;
        }
        // why the following function does not work?
        // const occurance = [...correctWord].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
        // const currOccur = [...currWord].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
        // if (occurance.get(letter) < currOccur.get(letter)) {
        //     return false;
        // } else {
        //     return true;
        // }
    });

    const correct = currTry.noOfAttempt > attemptVal 
        && correctWord.toUpperCase()[letterPos] === letter;

    const almost = currTry.noOfAttempt > attemptVal 
        && !correct && letter !== "" && correctWord.toUpperCase().includes(letter)
        && checkDuplicate(letter);

    const letterState =  currTry.noOfAttempt > attemptVal ?
     (correct ? "correct" : almost ? "almost" : "error") : "normal";

    return (
        <div className = "letter" id = {letterState}>{letter}</div>
    )
    
}