import React, { useEffect, useState } from 'react'

export default function Guess({playerName, index, disabled}) {
  const [guess, setGuess] = useState("")
  const characters = playerName.split("")

  useEffect(() => {

  function handleChange(e){ 
    console.log(playerName)
    const index = guess.length
    console.log(playerName[index])
    if (e.keyCode >=65 && e.keyCode <=90){
      if(playerName[index] === " " || playerName[index] === "'" || playerName[index] === "-"){
        setGuess(prevGuess => prevGuess + playerName[index] + e.key)
        return
      }
      setGuess(prevGuess => prevGuess + e.key)
    }

    if (e.keyCode === 8){
      setGuess(prevGuess => prevGuess.slice(0, -1))
    }
  }

    if (!disabled){
      window.addEventListener("keyup", handleChange)
    }

    return () => window.removeEventListener("keyup", handleChange)
    
  }, [disabled, playerName, guess.length])

  
  return (
    <div className='guess'>
      {characters.map((char, i) => {
        if (char === " "){
          return (
            <div key={i} className='space'></div>
          )
        }
        else if (char === "'" || char === "-"){
          return(
            <div key={i} className='punctuation'>{char}</div>
          )
        }
        return(
          <div key={i} className={`letter letter${i}`}>{guess[i] ? guess[i].toUpperCase() : ""}</div>
        )
      })}
    </div>
  )
}
