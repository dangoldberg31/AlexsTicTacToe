// import {useState} from 'react';
import alex from '../alexsunglasses.jpg';
import david from '../david.jpg';
import jess from '../jess.jpg';
import background from '../background.jpg';
import './boxComponent.css';

export const Box1B = ({status, playerTurn}) => {
    if (status === 'free') {
        return (
            <div className="boxComponentContainer">
                <img className="boxComponent" src={background} alt="free" />
            </div>
        )
    } else if (status === 'Alex') { 
        return (
            <div className="boxComponentContainer">
                <img className="boxComponent" src={alex} alt="Alex" />
            </div>
        )
    } else if (status === 'Jess') { 
        return (
            <div className="boxComponentContainer">
                <img className="boxComponent" src={jess} alt="Alex" />
            </div>
        )
    } else if (status === 'David') { 
        return (
            <div className="boxComponentContainer">
                <img className="boxComponent" src={david} alt="Alex" />
            </div>
    )
    }
}