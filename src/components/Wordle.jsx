import React, { useState } from 'react'
import Guess from './Guess'

export default function Wordle({playerName, gameWon, setGameWon}) {
  const [submitted1, setSubmitted1] = useState(false)
  const [submitted2, setSubmitted2] = useState(false)
  const [submitted3, setSubmitted3] = useState(false)
  const [submitted4, setSubmitted4] = useState(false)
  const [submitted5, setSubmitted5] = useState(false)
  
  return (
    <div className='wordle'>
      <Guess playerName={playerName} index={1} disabled={submitted1 ? true : false} submitted={submitted1} setSubmitted={setSubmitted1} gameWon={gameWon} setGameWon={setGameWon}></Guess>
      <Guess playerName={playerName} index={2} disabled={submitted1 && !submitted2 ? false: true} submitted={submitted1 ? submitted2 : ""} setSubmitted={submitted1 ? setSubmitted2 : ""} gameWon={gameWon} setGameWon={setGameWon}></Guess>
      <Guess playerName={playerName} index={3} disabled={submitted2 && !submitted3 ? false : true} submitted={submitted2 ? submitted3 : ""} setSubmitted={submitted2 ? setSubmitted3 : ""} gameWon={gameWon} setGameWon={setGameWon}></Guess>
      <Guess playerName={playerName} index={4} disabled={submitted3 && !submitted4 ? false: true} submitted={submitted3 ? submitted4 : ""} setSubmitted={submitted3 ? setSubmitted4 : ""} gameWon={gameWon} setGameWon={setGameWon}></Guess>
      <Guess playerName={playerName} index={5} disabled={submitted4 && !submitted5 ? false: true} submitted={submitted4 ? submitted5 : ""} setSubmitted={submitted4 ? setSubmitted5 : ""} gameWon={gameWon} setGameWon={setGameWon}></Guess>
    </div>
  )
}
