import React from 'react'
import SongList from './SongList'

class SongCollection extends React.Component {
  constructor(props){
    super(props);

    this.state={

    }
  }

  render(){
    let songs = this.props.song.map(song => {
      let className;
      if (song.id === this.props.selectedSongId) {
        className = "selected"
      }

    let handleSongSelect = () => this.props.handleSongSelect(song.id)

      return(
        <SongList
          key={song.id}
          id={song.id}
          name={song.name}
          artist={song.artist}
          album={song.album}
          className={className}
          handleSongSelect={handleSongSelect}
        />
      )
    })
    return(
      <ul>{songs}</ul>
    )
  }
}
export default SongCollection
