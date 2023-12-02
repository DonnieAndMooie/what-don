import React, { useEffect, useState } from 'react'
import Unknown from "../images/unknown.jpeg"

export default function Player() {
    const [playerData, setPlayerData] = useState(null)
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
      <h3>Loading...</h3>
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
      <table className="clubs">
        <thead>
          <tr>
            <th>Years</th>
            <th>Club</th>
            <th>Appearances</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          {playerData.clubs.map((club, i) => {
            return (
              <tr key={i} className={club.loan ? "loan": ""}>
                {club.loan ? <td>➔{club.from}-{club.to} (loan)</td> : <td>{club.from}-{club.to}</td>}
                
                <td>{club.team}</td>
                <td>{club.appearances}</td>
                <td>{club.goals}</td>
              </tr>
            )
            
          })}
        </tbody>
        
      </table>
    </div>
  )
}
