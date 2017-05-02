import React from 'react'
import SongInfo from './SongInfo'

const TopTwentyList = (props) => {

  const songInfoBoxes = props.songs.map((song, index) => {
    return <SongInfo song={song} position={index + 1} key={index}/>
  })

  return(
    <div className="top-twenty-list">
      <h1>UK Top Twenty</h1>
      {songInfoBoxes}
    </div>
  )
}

export default TopTwentyList