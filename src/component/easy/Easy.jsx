import React, {useState, createContext, useEffect} from 'react';
import { boardDefault, generateWordSet } from './Words';
import Board from './Board';
import Navigation from '../Navigation';
import Keyboard from './Keyboard';
import GameOver from './GameOver';
import '../../App.css';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

export const EasyContext = createContext();

export default function Easy() {

    const [board, setBoard] = useState(boardDefault);
    const [currTry, setCurrTry] = useState({noOfAttempt: 0, letterPos: 0});
    const [sentense, setSentense] = useState("Everything looks good :)");
    const [correctWord, setCorrectWord] = useState("");
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessSuccess: false,
    });
    
    const [wordSet, setWordSet] = useState(new Set());

    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
            setCorrectWord(words.selectedWord);
        });
    }, []) //only run once with empty depend list

    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    return (
        <div>
            <EasyContext.Provider 
                value = {
                    {board, setBoard, 
                    currTry, setCurrTry, 
                    sentense, setSentense, 
                    gameOver,setGameOver,
                    correctWord,
                    wordSet}
                }
            >
                <Navigation />
                <div className = "row-layout">
                    <Board />
                    <div className = "column-layout">
                        {gameOver.gameOver? <GameOver /> : <Keyboard />}
                        <div className = "margin-left">
                            <Toast show={show} onClose={toggleShow}>
                                <Toast.Header>
                                    <strong className="me-auto">
                                        Here is some suggestions you might need.
                                        Simply close it if you don't need any.
                                    </strong>
                                </Toast.Header>
                                <Toast.Body>{sentense}</Toast.Body>
                            </Toast>

                            <p></p>
                            <Button variant="outline-success" href="/easy" className = "margin-left">
                                Start Game Again
                            </Button>{' '}
                        </div>
                    </div>
                </div>
            </EasyContext.Provider>
        </div>
    )
    
}