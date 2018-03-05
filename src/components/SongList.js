import React from 'react'

const SongList = props => {
  return (
    <li className={props.className} onClick={props.handleSongSelect}>{props.name} - {props.artist}</li>
  )
}
export default SongList
