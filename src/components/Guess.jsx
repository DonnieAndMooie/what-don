import React, { useEffect, useState } from 'react'

export default function Guess({playerName, index, disabled, submitted, setSubmitted, gameWon, setGameWon}) {
  const [guess, setGuess] = useState("")
  const characters = playerName.split("")

  function charCount(str, letter) 
    {
    let letterCount = 0;
    for (let position = 0; position < str.length; position++) 
    {
        if (str.toUpperCase().charAt(position) === letter.toUpperCase()) 
          {
          letterCount += 1;
          }
      }
      return letterCount;
    }

  useEffect(() => {

    function submitGuess(){
      console.log(playerName)
      console.log(guess)
      if(guess.length === playerName.length){
        setSubmitted(true)
      }
      if (guess.toUpperCase() === playerName.toUpperCase()){
        setGameWon(true)
        alert("YOU WIN!")
      }
      
    }

  function handleChange(e){ 
    if(gameWon){
      return
    }
    const index = guess.length
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
    if (e.keyCode === 13){
      submitGuess()
    }
  }

    if (!disabled){
      window.addEventListener("keyup", handleChange)
    }

    return () => window.removeEventListener("keyup", handleChange)
    
  }, [disabled, playerName, guess])

  


  if (!submitted){
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

  else{
    return(
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
          else if (guess[i].toUpperCase() === playerName[i].toUpperCase()){
            return(
              <div key={i} className={`letter green`}>{guess[i] ? guess[i].toUpperCase() : ""}</div>
            )
            
          }
          else if (playerName.toUpperCase().includes(guess[i].toUpperCase())){
            if(charCount(playerName, guess[i]) >= charCount(guess, guess[i])){
              return(
                <div key={i} className={`letter yellow`}>{guess[i] ? guess[i].toUpperCase() : ""}</div>
              )
            } 
            let count = 0
            for (let x=0; x < i; x++){
              if (guess[x] === guess[i]){
                count +=1
              }
            }
            console.log(count)
            if (count < charCount(playerName.toUpperCase(), guess[i].toUpperCase())){
              return(
                <div key={i} className={`letter yellow`}>{guess[i] ? guess[i].toUpperCase() : ""}</div>
              )
            }
          }
          return(
            <div key={i} className={`letter`}>{guess[i] ? guess[i].toUpperCase() : ""}</div>
          )
        })}
        
      </div>
    )
  }
  
  }

  