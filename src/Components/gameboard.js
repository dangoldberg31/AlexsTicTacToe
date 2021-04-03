import {useState} from 'react';
import './gameboard.css';
import { Photo1 } from './photo1';
import { Photo2 } from './photo2';

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

    return (
        <div id="boardcontainer" className="section">
            <div classname="gameboardplayercontainer">
                <Photo1 id="photo1" className="playerphoto" player1={player1} />
            </div>
            <div id="board">
                <div id="interior">
                    <div className="box" id="box1A" status={box1A}>*</div>
                    <div className="box" id="box1B" status={box1A}>*</div>
                    <div className="box" id="box1C" status={box1A}>*</div>
                    <div className="box" id="box2A" status={box1A}>*</div>
                    <div className="box" id="box2B" status={box1A}>*</div>
                    <div className="box" id="box2C" status={box1A}>*</div>
                    <div className="box" id="box3A" status={box1A}>*</div>
                    <div className="box" id="box3B" status={box1A}>*</div>
                    <div className="box" id="box3C" status={box1A}>*</div>
                </div>
            </div>
            <div classname="gameboardplayercontainer">
                <Photo2 id="photo2" className="playerphoto" player2={player2} />
            </div>
        </div>
    )
}