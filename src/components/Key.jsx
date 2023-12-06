import React from 'react'

export default function Key({char, setGuess, guess, playerName, setSubmitted, setGameWon}) {
  function handleChange(){
    if (char === "⬅"){
      setGuess(prevGuess => prevGuess.slice(0, -1))
    }
    else if (char === "ENTER"){

        if(guess.length === playerName.length){
          setSubmitted(true)
        }
        if (guess.toUpperCase() === playerName.toUpperCase()){
          setGameWon(true)
        }
        

    }
    else if (guess.length === playerName.length){
      return
    }
    else{
      const index = guess.length
      if(playerName[index] === " " || playerName[index] === "'" || playerName[index] === "-"){
        setGuess(prevGuess => prevGuess + playerName[index] + char)
        return
      }
      setGuess(guess + char)
    }
  }
  return (
    <div className='key' onClick={handleChange}>{char}</div>
  )
}
