import alex from '../alexsunglasses.jpg';
import david from '../david.jpg';
import jess from '../jess.jpg';
import './photo2.css'
// import {PlayerSelect} from './playerselect';

export const Photo2 = ({player2}) => {
    if (player2 === 'Alex') {
        return (
            <div className="photobox">
                <img className="playerphoto" src={alex} alt="Alex" />
            </div>
        )
    } else if (player2 === 'David') {
        return (
            <div className="photobox">
                <img className="playerphoto"  src={david} alt="David" />
            </div>
        )
    } else if (player2 === 'Jess') {
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