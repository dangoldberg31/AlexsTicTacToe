import {useEffect, useState} from 'react';
import './gameboard.css';
import { Photo1 } from './photo1';
import { Photo2 } from './photo2';
import {Box1A} from './box1A';
import {Box1B} from './box1B';
import {NextTurn} from './nextturn';

export const GameBoard = ({player1, player2}) => {
    const [box1A, setBox1A] = useState('free');
    const [box1B, setBox1B] = useState('free');
    const [box1C, setBox1C] = useState('free');
    const [box2A, setBox2A] = useState('free');
    const [box2B, setBox2B] = useState('free');
    const [box2C, setBox2C] = useState('free');
    const [box3A, setBox3A] = useState('free');
    const [box3B, setBox3B] = useState('free');
    const [box3C, setBox3C] = useState('free');
    const [playerTurn, setPlayerTurn] = useState('Flipping coin...');
    const [turnOrder, setTurnOrder] = useState();
    const [turnCount, setTurnCount] = useState(Math.floor(Math.random()*2));

    useEffect(() => {
        let turnList = []
        for (let i = 5; i>0; i--) {
            turnOrder.push(player1);
            turnOrder.push(player2);
        }
        setTurnOrder(turnList)
        setPlayerTurn(turnOrder[turnCount])
    }, [])

    useEffect(() => {
            setPlayerTurn(turnOrder[turnCount])
            setTurnCount((prev) => prev+1)
        },[box1A, box1B, box1C, box2A, box2B, box2C, box3A, box3B, box3C])

    const handleClick1A = (event) => {
        document.getElementbyId = event.target.id;
        setBox1A(playerTurn);
    }

    const handleClick1B = (event) => {
        document.getElementbyId = event.target.id;
        setBox1B(playerTurn);
    }

    return (
        <div>
            <NextTurn playerTurn={playerTurn} />
            <br />
            <div id="boardcontainer" className="section">
                <div classname="gameboardplayercontainer">
                    <Photo1 id="photo1" className="playerphoto" player1={player1} />
                    <span className="name">{player1}</span>
                </div>
                <div id="exterior">
                    <div id="board">
                        <div onClick={handleClick1A} >
                            <Box1A className="box" id="box1A" value="box1A" player1={player1} player2={player2} status={box1A} />
                        </div>
                        <div onClick={handleClick1B}>
                            <Box1B className="box" id="box1B" value="box1B" status={box1B} />
                        </div>
                        <Box1A className="box" id="box1C" value="box1C" status={box1C} />
                        <Box1A className="box" id="box2A" value="box2A" status={box2A} />
                        <Box1A className="box" id="box2B" value="box2B" status={box2B} />
                        <Box1A className="box" id="box2C" value="box2C" status={box2C} />
                        <Box1A className="box" id="box3A" value="box3A" status={box3A} />
                        <Box1A className="box" id="box3B" value="box3B" status={box3B} />
                        <Box1A className="box" id="box3C" value="box3C" status={box3C} />
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