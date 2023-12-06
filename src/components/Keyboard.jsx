import React from 'react'
import Key from './Key'

export default function Keyboard({guess, setGuess, playerName, setSubmitted, setGameWon}) {
  return (
    <div className='keyboard'>
        <div className="row">
            <Key char={"Q"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"W"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"E"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"R"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"T"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"Y"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"U"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"I"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"O"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"P"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"⬅"} setGuess={setGuess} guess={guess} playerName={playerName}/>
        </div>
        <div className="row">
            <Key char={"A"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"S"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"D"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"F"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"G"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"H"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"J"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"K"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"L"}setGuess={setGuess} guess={guess} playerName={playerName}/>
        </div>
        <div className="row">
            <Key char={"Z"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"X"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"C"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"V"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"B"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"N"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"M"} setGuess={setGuess} guess={guess} playerName={playerName}/>
            <Key char={"ENTER"} setGuess={setGuess} guess={guess} playerName={playerName} setSubmitted={setSubmitted} setGameWon={setGameWon}/>
        </div>
    </div>
  )
}
