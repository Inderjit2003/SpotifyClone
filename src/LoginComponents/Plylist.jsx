import React ,{useState} from 'react'
import { Card } from 'react-bootstrap'
import PlylistNavbar from './PlylistNavbar'
import MidPlylist from './MidPlylist';
import a1 from '../assets/audio/Aam Jahe.mp3'
import a2 from '../assets/audio/Aam Jahe.mp3'
import InstallApp from './InstallApp';


export default function Plylist({handleInstallClick , handleprofileClick, handleBellIconClick, playlistitems}) {
  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
      <PlylistNavbar handleInstallClick={handleInstallClick} handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} />
    
    <div>
      <MidPlylist items={playlistitems} />
    </div>
    </Card>
    </div>
  )
}