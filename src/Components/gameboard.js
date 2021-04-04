import {useEffect, useState} from 'react';
import './gameboard.css';
import { Photo1 } from './photo1';
import { Photo2 } from './photo2';
import alex from '../alexsunglasses.jpg';
import david from '../david.jpg';
import jess from '../jess.jpg';
import background from '../background.jpg';

export const GameBoard = ({player1, player2}) => {
    const [box1A, setBox1A] = useState("free");
    const [box1AImage, setBox1AImage] = useState(background);
    const [box1B, setBox1B] = useState("free");
    const [box1BImage, setBox1BImage] = useState(background);
    const [box1C, setBox1C] = useState("free");
    const [box1CImage, setBox1CImage] = useState(background);
    const [box2A, setBox2A] = useState("free");
    const [box2AImage, setBox2AImage] = useState(background);
    const [box2B, setBox2B] = useState("free");
    const [box2BImage, setBox2BImage] = useState(background);
    const [box2C, setBox2C] = useState("free");
    const [box2CImage, setBox2CImage] = useState(background);
    const [box3A, setBox3A] = useState("free");
    const [box3AImage, setBox3AImage] = useState(background);
    const [box3B, setBox3B] = useState("free");
    const [box3BImage, setBox3BImage] = useState(background);
    const [box3C, setBox3C] = useState("free");
    const [box3CImage, setBox3CImage] = useState(background);
    const [turnOrder] = useState([player1, player2, player1, player2, player1, player2, player1, player1, player2, player1]);
    const [turnCount, setTurnCount] = useState(Math.floor(Math.random()*2));
    // const [firstTurn, setFirstTurn] = useState(true);
    // const [turnOrder[turnCount], setCurrentPlayer] = useState(turnOrder[turnCount]);
    const [gameState, setGameState] = useState('Flipping a coin...');



    const pickPhoto = () => {
        if (turnOrder[turnCount] === "Alex") {
            return alex
        } else if (turnOrder[turnCount] === "Jess") {
            return jess
        } else if (turnOrder[turnCount] === "David") {
            return david
        }
        }

    const handleClick1A = (event) => {
        if (box1A === 'free') {
            let player = pickPhoto();
            setBox1AImage(player);
            setBox1A(turnOrder[turnCount]);
            setTurnCount((prev) => prev+1);
        }
    }

    const handleClick1B = (event) => {
        if (box1B === 'free') {
            let player = pickPhoto();
            setBox1BImage(player);
            setBox1B(turnOrder[turnCount]);
            setTurnCount((prev) => prev+1);
        }
    }

    const handleClick1C = (event) => {
        if (box1C === 'free') {
            let player = pickPhoto();
            setBox1CImage(player);
            setBox1C(turnOrder[turnCount]);
            setTurnCount((prev) => prev+1);
        }
    }

    const handleClick2A = (event) => {
        if (box2A === 'free') {
            let player = pickPhoto();
            setBox2AImage(player);
            setBox2A(turnOrder[turnCount]);
            setTurnCount((prev) => prev+1);
        }
    }

    const handleClick2B = (event) => {
        if (box2B === 'free') {
            let player = pickPhoto();
            setBox2BImage(player);
            setBox2B(turnOrder[turnCount]);
            setTurnCount((prev) => prev+1);
        }
    }

    const handleClick2C = (event) => {
        if (box2C === 'free') {
            let player = pickPhoto();
            setBox2CImage(player);
            setBox2C(turnOrder[turnCount]);
            setTurnCount((prev) => prev+1);
        }
    }

    const handleClick3A = (event) => {
        if (box3A === 'free') {
            let player = pickPhoto();
            setBox3AImage(player);
            setBox3A(turnOrder[turnCount]);
            setTurnCount((prev) => prev+1);
        }
    }

    const handleClick3B = (event) => {
        if (box3B === 'free') {
            let player = pickPhoto();
            setBox3BImage(player);
            setBox3B(turnOrder[turnCount]);
            setTurnCount((prev) => prev+1);
        }
    }

    const handleClick3C = (event) => {
        if (box3C === 'free') {
            let player = pickPhoto();
            setBox3CImage(player);
            setBox3C(turnOrder[turnCount]);
            setTurnCount((prev) => prev+1);
        }
    }

    setTimeout(() => {    
        setGameState(`It's ${turnOrder[turnCount]}'s turn!`);
        }, 2000)
    

 
    return (
        <div>
            <h4>{gameState}</h4>
            <p>*{turnOrder[1]}* Type turnOrder[turnCount] is {typeof turnOrder[turnCount]} *{turnOrder[turnCount]}* Type turnOrder is {typeof turnOrder} *{turnOrder}* Turn count is {typeof turnCount} {turnCount} </p>
            <br />
            <div id="boardcontainer" className="section">
                <div classname="gameboardplayercontainer">
                    <Photo1 id="photo1" className="playerphoto" player1={player1} />
                    <span className="name">{player1}</span>
                </div>
                <div id="exterior">
                    <div id="board">
                        <div className="box" onClick={handleClick1A} state = {box1A} style={{backgroundImage: `url(${box1AImage})`}} ></div>
                        <div className="box" onClick={handleClick1B} state = {box1B} style={{backgroundImage: `url(${box1BImage})`}} ></div>
                        <div className="box" onClick={handleClick1C} state = {box1C} style={{backgroundImage: `url(${box1CImage})`}} ></div>
                        <div className="box" onClick={handleClick2A} state = {box2A} style={{backgroundImage: `url(${box2AImage})`}} ></div>
                        <div className="box" onClick={handleClick2B} state = {box2B} style={{backgroundImage: `url(${box2BImage})`}} ></div>
                        <div className="box" onClick={handleClick2C} state = {box2C} style={{backgroundImage: `url(${box2CImage})`}} ></div>
                        <div className="box" onClick={handleClick3A} state = {box3A} style={{backgroundImage: `url(${box3AImage})`}} ></div>
                        <div className="box" onClick={handleClick3B} state = {box3B} style={{backgroundImage: `url(${box3BImage})`}} ></div>
                        <div className="box" onClick={handleClick3C} state = {box3C} style={{backgroundImage: `url(${box3CImage})`}} ></div>
                    </div>
                </div>
                <div classname="gameboardplayercontainer">
                    <Photo2 id="photo2" className="playerphoto" player2={player2} />
                    <span className="name">{player2}</span>
                </div>
            </div>
        </div>
    )
}