import React from 'react'
import Guess from './Guess'

export default function Wordle({playerName}) {
  return (
    <div className='wordle'>
      <Guess playerName={playerName} index={0}></Guess>
      <Guess playerName={playerName} index={1} disabled={true}></Guess>
      <Guess playerName={playerName} index={2} disabled={true}></Guess>
      <Guess playerName={playerName} index={3} disabled={true}></Guess>
      <Guess playerName={playerName} index={4} disabled={true}></Guess>
    </div>
  )
}
