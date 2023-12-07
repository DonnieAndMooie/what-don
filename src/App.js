import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Wordle from './components/Wordle';
import { useState, useEffect } from 'react';

function App() {
  const [playerData, setPlayerData] = useState(null)
  const [gameWon, setGameWon] = useState(false)
  const [currentGuess, setCurrentGuess] = useState(1)
    useEffect(() => {
      async function fetchPlayer(){
        const response = await fetch(process.env.REACT_APP_API_URL)
        const playerData = await response.json()
        setPlayerData(playerData)
        console.log(playerData)
      }
      fetchPlayer()
    }, [])

    if (playerData === null){
      return(
        <div>
          <Header/>
          <div className="main">
            <h3 className="loading">Loading...</h3>
          </div>
        </div>
        
      )
    }

  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Player playerData={playerData} gameWon={gameWon} currentGuess={currentGuess}/>
        <Wordle playerName={playerData.name} gameWon={gameWon} setGameWon={setGameWon} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
      </div>
    </div>
  );
}

export default App;
