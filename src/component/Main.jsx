import React from 'react';
import './Main.css';
import './Navigation'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';

export default function Main() {

    return (
        <div>
            <Navigation />
            <div className = "outer-card">
                <div className = "inner-card">
                    <Card style={{ width: '28rem' }}>
                    <Card.Img className = "graph-margin" variant="top" src={require('./image/rules.png')} />
                    <Card.Body>
                        <Card.Title>Game Rules</Card.Title>
                        <Card.Text>
                        Click to know the detailed rules.
                        </Card.Text>
                        <Button variant="outline-info" href="/intro">Show Me The Rules :)</Button>
                    </Card.Body>
                    </Card>
                </div>

                <div className = "inner-card">
                <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={require('./image/mode.png')} />
                <Card.Body>
                    <Card.Title>Game Difficulity</Card.Title>
                    <Card.Text>
                    Now try to choose a suitable difficult level.
                    </Card.Text>
                    <div className = "button">
                    <Button variant="outline-success" href="/easy">Easy Mode</Button> <span>&nbsp;</span>
                    <Button variant="outline-warning" href="/medium">Medium Mode</Button> <span>&nbsp;</span>
                    <Button variant="outline-danger" href="/hard">Hard Mode</Button>
                    </div>
                </Card.Body>
                </Card>
                </div>
            </div>
        </div>
        
    )
}