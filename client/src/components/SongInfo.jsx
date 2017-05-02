import React from 'react'

const SongInfo = (props) => {
  
  return (
    <div className="song-info">
      <p>{props.position}. {props.song.title.label}</p>
    </div>
  )
}

export default SongInfo