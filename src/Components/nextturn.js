import './nextturn.css';
import {useEffect} from 'react';

export const NextTurn = ({playerTurn}) => {
    // let nextPlayerLine = `${playerTurn} wins the coin toss!`;
    
    // const changeLine = () => {
    // let nextPlayerLine = `It's ${playerTurn}'s turn to move.`;
    
    useEffect(() => {
        return (
            <div>
                <p id="cointoss">It's {playerTurn}'s turn to move.</p> 
            </div>
        )
        }, [playerTurn])
}