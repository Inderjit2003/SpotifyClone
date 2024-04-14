import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import audio from '../assets/audio/Raza.mp3'
import Style from '../CSS/Loginbottom.module.css'

export default function Bottom() {
  return (
    <AudioPlayer
    src={audio}
    // autoPlay
   //  loop
    muted
   //  volume={0.5}
   // showSkipControls
    className={`${Style.bottom}`} style={{background:'black'}} 
  />
  )
}