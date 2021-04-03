import './App.css';
import {Header} from './Components/header'
import {Footer} from './Components/footer'
// import {GameBoard} from './Components/gameboard'
import { PlayerSelect } from './Components/playerselect';
// import {useState} from 'react';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <h2>Tic Tac Toe</h2>
        <PlayerSelect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
