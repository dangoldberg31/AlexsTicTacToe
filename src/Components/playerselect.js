import {useState} from 'react';
import './playerselect.css';
import {GameBoard} from './gameboard';
import {Photo1} from './photo1'
import {Photo2} from './photo2'
// import david from '../david.jpg';

export const PlayerSelect = () => {
    const [player1, setPlayer1] = useState('Select Player 1');
    const [player2, setPlayer2] = useState('Select Player 2');
    const [gameState, setGameState] = useState('Pick Players');
    const [playerPrompt, setPlayerPrompt] = useState('');

    const startGame = event => {
        if (player1 !=='Select Player 1' && player2 !=='Select Player 2' && player1 !== player2) {
            setGameState('Playing');
        } else if (player1 === 'Select Player 1' || player2 === 'Select Player 2') {
            setPlayerPrompt("Choose both players!");
        } else if (player1 === player2) {
            setPlayerPrompt("Choose different players!");
    }}

    const handlePlayer1Submit = event => {
        setPlayer1(event.target.value);
    }

    const handlePlayer2Submit = event => {
        setPlayer2(event.target.value);
    }

    if (gameState === 'Pick Players' ) {
        return (
            <div id="playerselect">
                <div className="playerchoicecontainer">
                    <h3>{player1}</h3>
                    <Photo1 id="photo1" player1={player1}/>
                    <form className="playerRadio">
                        <input id="Alex1" name="player1" type="radio" value="Alex" onChange={handlePlayer1Submit}></input>
                        <label>Alex</label><br/>
                        <input id="David1" name="player1" type="radio" value="David" onChange={handlePlayer1Submit}></input>
                        <label>David</label><br/>
                        <input id="Jess1" name="player1" type="radio" value="Jess" onChange={handlePlayer1Submit}></input>
                        <label>Jess</label><br/>

                    </form>
                </div>
                <div className="playerchoicecontainer">
                    <h3>{player2}</h3>
                    <Photo2 id="photo2" player2={player2}/>
                    <form className="playerRadio">
                        <input id="Alex2" name="player2" type="radio" value="Alex" onChange={handlePlayer2Submit}></input>
                        <label>Alex</label><br/>
                        <input id="David2" name="player2" type="radio" value="David" onChange={handlePlayer2Submit}></input>
                        <label>David</label><br/>
                        <input id="Jess2" name="player2" type="radio" value="Jess" onChange={handlePlayer2Submit}></input>
                        <label>Jess</label><br/>
                    </form>

                </div> <br />
                <p className="warning">{playerPrompt}</p>
                <form className="start" onSubmit={startGame}>
                    <input className="submit" type="submit" value="Start" ></input>
                </form>
            </div>
           
        
            )
        } else {
            return (
                <GameBoard player1={player1} player2={player2} />
            )
        }


}