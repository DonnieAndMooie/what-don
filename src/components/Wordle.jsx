import React, { useEffect, useState } from 'react'
import Guess from './Guess'
import Keyboard from './Keyboard'
import Key from './Key'

export default function Wordle({playerName, gameWon, setGameWon, currentGuess, setCurrentGuess}) {
  const [submitted1, setSubmitted1] = useState(false)
  const [submitted2, setSubmitted2] = useState(false)
  const [submitted3, setSubmitted3] = useState(false)
  const [submitted4, setSubmitted4] = useState(false)
  const [submitted5, setSubmitted5] = useState(false)
  const [guess1, setGuess1] = useState("")
  const [guess2, setGuess2] = useState("")
  const [guess3, setGuess3] = useState("")
  const [guess4, setGuess4] = useState("")
  const [guess5, setGuess5] = useState("")

  
  if (currentGuess === 1 && submitted1 === true){
    setCurrentGuess(2)
  }
  if (currentGuess === 2 && submitted2 === true){
    setCurrentGuess(3)
  }
  if (currentGuess === 3 && submitted3 === true){
    setCurrentGuess(4)
  }
  if (currentGuess === 4 && submitted4 === true){
    setCurrentGuess(5)
  }
  if (currentGuess === 5 && submitted5 === true){
    setCurrentGuess(6)
  }

  if (gameWon){
    return(
      <div className="wordle">
        <Guess playerName={playerName} disabled={true} guess={guess1} submitted={submitted1}/>
        <Guess playerName={playerName} disabled={true} guess={guess2} submitted={submitted2}/>
        <Guess playerName={playerName} disabled={true} guess={guess3} submitted={submitted3}/>
        <Guess playerName={playerName} disabled={true} guess={guess4} submitted={submitted4}/>
        <Guess playerName={playerName} disabled={true} guess={guess5} submitted={submitted5}/>
        <h2 className='win'>You Win! The player was {playerName}</h2>
      </div>
    )
  }

  if (currentGuess === 6){
    return(
      <div className="wordle">
        <Guess playerName={playerName} disabled={true} guess={guess1} submitted={submitted1}/>
        <Guess playerName={playerName} disabled={true} guess={guess2} submitted={submitted2}/>
        <Guess playerName={playerName} disabled={true} guess={guess3} submitted={submitted3}/>
        <Guess playerName={playerName} disabled={true} guess={guess4} submitted={submitted4}/>
        <Guess playerName={playerName} disabled={true} guess={guess5} submitted={submitted5}/>
        <h2 className='lose'>You Lose! The player was {playerName}</h2>
      </div>
    )
  }

  if (currentGuess === 1){
    return(
      <div className="wordle">
        <Guess playerName={playerName} disabled={false} submitted={submitted1} setSubmitted={setSubmitted1} gameWon={gameWon} setGameWon={setGameWon} guess={guess1} setGuess={setGuess1}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Keyboard guess={guess1} setGuess={setGuess1} playerName={playerName} setSubmitted={setSubmitted1} setGameWon={setGameWon}/>
      </div>
    )
  }

  if (currentGuess === 2){
    return(
      <div className="wordle">
        <Guess playerName={playerName} disabled={true} guess={guess1} submitted={submitted1}/>
        <Guess playerName={playerName} disabled={false} submitted={submitted2} setSubmitted={setSubmitted2} gameWon={gameWon} setGameWon={setGameWon} guess={guess2} setGuess={setGuess2}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Keyboard guess={guess2} setGuess={setGuess2} playerName={playerName} setSubmitted={setSubmitted2} setGameWon={setGameWon}/>
      </div>
    )
  }
  
  if (currentGuess === 3){
    return(
      <div className="wordle">
        <Guess playerName={playerName} disabled={true} guess={guess1} submitted={submitted1}/>
        <Guess playerName={playerName} disabled={true} guess={guess2} submitted={submitted2}/>
        <Guess playerName={playerName} disabled={false} submitted={submitted3} setSubmitted={setSubmitted3} gameWon={gameWon} setGameWon={setGameWon} guess={guess3} setGuess={setGuess3}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Keyboard guess={guess3} setGuess={setGuess3} playerName={playerName} setSubmitted={setSubmitted3} setGameWon={setGameWon}/>
      </div>
    )
  }

    if (currentGuess === 4){
    return(
      <div className="wordle">
        <Guess playerName={playerName} disabled={true} guess={guess1} submitted={submitted1}/>
        <Guess playerName={playerName} disabled={true} guess={guess2} submitted={submitted2}/>
        <Guess playerName={playerName} disabled={true} guess={guess3} submitted={submitted3}/>
        <Guess playerName={playerName} disabled={false} submitted={submitted4} setSubmitted={setSubmitted4} gameWon={gameWon} setGameWon={setGameWon} guess={guess4} setGuess={setGuess4}/>
        <Guess playerName={playerName} disabled={true} guess={""}/>
        <Keyboard guess={guess4} setGuess={setGuess4} playerName={playerName} setSubmitted={setSubmitted4} setGameWon={setGameWon}/>
      </div>
    )
  }

  if (currentGuess === 5){
    return(
      <div className="wordle">
        <Guess playerName={playerName} disabled={true} guess={guess1} submitted={submitted1}/>
        <Guess playerName={playerName} disabled={true} guess={guess2} submitted={submitted2}/>
        <Guess playerName={playerName} disabled={true} guess={guess3} submitted={submitted3}/>
        <Guess playerName={playerName} disabled={true} guess={guess4} submitted={submitted4}/>
        <Guess playerName={playerName} disabled={false} submitted={submitted5} setSubmitted={setSubmitted5} gameWon={gameWon} setGameWon={setGameWon} guess={guess5} setGuess={setGuess5}/>
        <Keyboard guess={guess5} setGuess={setGuess5} playerName={playerName} setSubmitted={setSubmitted5} setGameWon={setGameWon}/>
      </div>
    )
  }

}
