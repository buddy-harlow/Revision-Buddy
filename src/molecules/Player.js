import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'

const Player = ({ selectedSong }) => {

  
  if(!selectedSong){
    return(
      <><AudioPlayer customVolumeControls={[]} /></>
    )
  } else {
  return(
  <>
    <AudioPlayer src={selectedSong.fileUrl} customAdditionalControls={[<div>{selectedSong.title}</div>]} customVolumeControls={[]} />
  </>
  )
}
}

export default Player
