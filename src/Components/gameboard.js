import react, {useState} from 'react';
import './gameboard.css';

export const GameBoard = () => {
    const [box1A, setBox1A] = useState('free');
    const [box1B, setBox1B] = useState('free');
    const [box1C, setBox1C] = useState('free');
    const [box2A, setBox2A] = useState('free');
    const [box2B, setBox2B] = useState('free');
    const [box2C, setBox2C] = useState('free');
    const [box3A, setBox3A] = useState('free');
    const [box3B, setBox3B] = useState('free');
    const [box3C, setBox3C] = useState('free');
    const [player1, setPlayer1] = useState('unassigned');
    const [player2, setPlayer2] = useState('unassigned');

    return (
        <div id="gameboard">
            <h2>Tic Tac Toe</h2>
            <div id="playerselect">{/* put this in separate component */}
                <div className="playerchoicecontainer">
                    <h3>Select Player 1</h3>
                    <form>
                        <input id="Alex1" name="Alex" type="radio"></input>
                        <label>Alex</label><br/>
                        <input id="David1" name="David" type="radio"></input>
                        <label>David</label><br/>
                        <input id="Jess1" name="Player 3" type="radio"></input>
                        <label>Jess</label><br/>
                        <input type="submit"></input>
                    </form>
                </div>
                <div className="playerchoicecontainer">
                    <h3>Select Player 2</h3>
                    <form>
                    <input id="Alex1" name="Alex" type="radio"></input>
                        <label>Alex</label><br/>
                        <input id="David1" name="David" type="radio"></input>
                        <label>David</label><br/>
                        <input id="Jess1" name="Player 3" type="radio"></input>
                        <label>Jess</label><br/>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
            <br/>
            <div id="board">
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
    )
}