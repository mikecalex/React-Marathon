import React from 'react'
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    let playlists = this.props.playlists.map(list => {
      let className;
      if (list.id === this.props.selectedPlaylistId) {
        className = "selected"
      }

      return(
        <Playlist
          key={list.id}
          id={list.id}
          name={list.name}
          songs={list.songs}
          className={className}
        />
      )
    })
    return(
      <ul>{playlists}</ul>
    )
  }
}

export default PlaylistCollection
