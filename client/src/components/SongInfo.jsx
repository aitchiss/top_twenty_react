import React from 'react'

const SongInfo = (props) => {
  // console.log(Object.keys(props.song))
  
  const imgLink = props.song["im:image"][0].label
  console.log(imgLink)
  return (
    <div className="song-info">
      <img src={imgLink} />
      <p>{props.position}. {props.song.title.label}</p>
    </div>
  )
}

export default SongInfo