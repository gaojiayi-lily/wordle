import React from 'react';
import './Main.css';
import './Navigation'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Navigation from './Navigation';

export default function Main() {

    return (
        <div>
            <Navigation />
            <p></p>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-10"
                    src={require('./image/intro2.png')}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 class = "black font margin-left">Wordle, the Card Game</h3>
                        <p class = "black font margin-left">
                        Wordle is a word game that challenges to figure out a word within only a certain number of guesses.
                        </p>
                        <p class = "black font margin-left">
                        In Wordle, the game secretly chooses a random word that user will try to guess within a certain number of attempts.
                        </p>
                        <p class = "black font margin-left">
                        Both the length of the word and the number of attempts are based on the difficulty selected.
                        </p>
                        <p class = "black font margin-left">
                        There are possible hints during the game in the pop-up window.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-10"
                    src={require('./image/intro1.png')}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 class = "black font margin-left">Difficulity Level</h3>
                        <p class = "black font margin-left">
                        An easy game should only use 5 letter words and give 7 possible solutions.
                        </p>
                        <p class = "black font margin-left">
                        In a medium game, the user will have to find 6 letter words and be given only 6 opportunities.
                        </p>
                        <p class = "black font margin-left">
                        A hard game will use 7 letter words and only have 5 opportunities to answer.
                        </p>
                        <p class = "black font margin-left">
                        if refreshing the page or sharing the link, that same difficulty will be selected.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-10"
                    src={require('./image/color.png')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 class = "black font margin-left">Color of Hints</h3>
                        <p class = "black font margin-left">
                        Yellow: The letter is in the word but not in the correct spot.
                        </p>
                        <p class = "black font margin-left">
                        Green: The letter is in the word AND in the correct spot.
                        </p>
                        <p class = "black font margin-left">
                        Grey: The letter is not in the word.
                        </p>
                        <p class = "black font margin-left">
                        Duplicate letters (appears more than actual appears) are marked as missing.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}