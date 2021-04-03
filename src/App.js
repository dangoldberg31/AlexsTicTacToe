import logo from './logo.svg';
import './App.css';
import {Header} from './Components/header'
import {Footer} from './Components/footer'
import {GameBoard} from './Components/gameboard'

function App() {
  return (
    <div className="App">
      <Header />
        <p>Some text from the app component</p>
      <GameBoard />
      <Footer />
    </div>
  );
}

export default App;
