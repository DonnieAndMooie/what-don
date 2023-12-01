import React, { useEffect } from 'react'

export default function Player() {

    useEffect(() => {
      async function fetchPlayer(){
        const response = await fetch("https://fine-red-lemur-tux.cyclic.app/fetch-player")
        const playerData = await response.json()
        console.log(playerData)
      }
      fetchPlayer()
    }, [])

  return (
    <div>Player</div>
  )
}
