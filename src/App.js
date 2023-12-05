import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Wordle from './components/Wordle';
import { useState, useEffect } from 'react';

function App() {
  const [playerData, setPlayerData] = useState(null)
  const [gameWon, setGameWon] = useState(false)
    useEffect(() => {
      async function fetchPlayer(){
        const response = await fetch("https://fine-red-lemur-tux.cyclic.app/fetch-player")
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
        <Player playerData={playerData}/>
        <Wordle playerName={playerData.name} gameWon={gameWon} setGameWon={setGameWon}/>
      </div>
    </div>
  );
}

export default App;
