import alex from '../alexsunglasses.jpg';
import david from '../david.jpg';
import jess from '../jess.jpg';
import './photo1.css'
// import {PlayerSelect} from './playerselect';

export const Photo1 = ({player1}) => {
    if (player1 === 'Alex') {
        return (
            <div className="photobox">
                <img className="playerphoto" src={alex} alt="Alex" />
            </div>
        )
    } else if (player1 === 'David') {
        return (
            <div className="photobox">
                <img className="playerphoto"  src={david} alt="David" />
            </div>
        )
    } else if (player1 === 'Jess') {
        return (
            <div className="photobox">
                <img className="playerphoto"  src={jess} alt="Jess" />
            </div>
        )
    } else {
        return (
            <div className="photobox">
                 <div className="playerphoto" ></div>
            </div>
        )
    }
} 