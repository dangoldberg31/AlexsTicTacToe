import './header.css';
import logo from '../logo2.jpg'

export const Header = () => {
    return (
        <div>
            <div id="company">
                <nav>
                    <h5><a href="#mission">Mission</a></h5>
                    <h5><a href="#history">History</a></h5>
                    <h5><a href="#products">Products</a></h5>
                    <h5><a href="#leadership">Leadership</a></h5>
                    <h5><a href="#contact">Contact</a></h5>
                </nav>
            <header>
                <h1 id="title"><span id="goldberg">Goldberg</span><br />Global Industries</h1>
                <img id="logo" src={logo} alt="founder" />
                <div id="emptyspace"></div>
            </header>
            </div>
        </div>
    )
}