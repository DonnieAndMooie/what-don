import React from 'react'

export default function Career({playerClubs}) {
  return (
    <div className="table-div">
          <table className={playerClubs.length > 16 ? "clubs small": "clubs"}>
        <thead>
          <tr>
            <th>Years</th>
            <th>Club</th>
            <th>Appearances</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          {playerClubs.map((club, i) => {
            if (club === ""){
              return (
                <tr key={i} className='empty-row'></tr>
              )
            }
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
