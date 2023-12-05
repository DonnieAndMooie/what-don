import React, { useEffect, useState } from 'react'
import Unknown from "../images/unknown.jpeg"

export default function Player({playerData}) {
    
  
  return (
    <div className='player'>
      <div className="player-info">
        <h2>{playerData ? playerData.name : ""}</h2>
        {playerData.picture ? <img src={playerData.picture} alt={playerData.name} /> : 
        <img src={Unknown} alt={playerData.name}/>}
        <p>Age: {playerData.age}</p>
        <p>Position: {playerData.position}</p>
      </div>
      <table className={playerData.clubs.length > 16 ? "clubs small": "clubs"}>
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
            let yearsElement
            if (club.from === club.to && club.loan){
              yearsElement = <td>➔{club.from} (loan)</td>
            }
            else if (club.from === club.to){
              yearsElement = <td>{club.from}</td>
            }
            else if (club.loan){
              yearsElement = <td>➔{club.from}-{club.to} (loan)</td>
            }
            else{
              yearsElement = <td>{club.from}-{club.to}</td>
            }
            return (
              <tr key={i} className={club.loan ? "loan": ""}>
                {yearsElement}
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
