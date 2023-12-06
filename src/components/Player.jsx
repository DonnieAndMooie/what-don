import React, { useEffect, useState } from 'react'
import Career from './Career'
import Unknown from "../images/unknown.jpeg"

export default function Player({playerData, gameWon, currentGuess}) {
  const chunk = (arr, n) => {
    const size = Math.ceil(arr.length / n);
    return Array.from({ length: n }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  }

  const clubChunks = chunk(playerData.clubs, 5)

  let currentChunk = []
  for (let i=0; i < playerData.clubs.length; i++){
    if (i < currentGuess){
      currentChunk = currentChunk.concat(clubChunks[i])
    }
    else{
      currentChunk.push("")
    }
  }

  if (!gameWon && currentGuess !== 6){
    return(
      <div className='player'>
      <div className="player-info">
        <h2>?????</h2>
        <img src={Unknown} alt={"Player"}/>
        <p>Age: {playerData.age}</p>
        <p>Position: {playerData.position}</p>
      </div>
      <Career playerClubs={currentChunk}/>
    </div>
    )
  }


  return (
    <div className='player'>
      <div className="player-info">
        <h2>{playerData ? playerData.name : ""}</h2>
        {playerData.picture ? <img src={playerData.picture} alt={playerData.name} /> : 
        <img src={Unknown} alt={playerData.name}/>}
        <p>Age: {playerData.age}</p>
        <p>Position: {playerData.position}</p>
      </div>
      <Career playerClubs={playerData.clubs}/>
    </div>
  )
}
