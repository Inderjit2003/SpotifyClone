import React ,{useState} from 'react'
import { Card } from 'react-bootstrap'
import PlylistNavbar from './PlylistNavbar'
import MidPlylist from './MidPlylist';
import a1 from '../assets/audio/Aam Jahe.mp3'
import a2 from '../assets/audio/Aam Jahe.mp3'
import InstallApp from './InstallApp';


const playlistitems = [
  {
    img: 'https://i.scdn.co/image/ab67616d00001e02249e235cc514c7071e4bd049',
    name: 'Aam jahe munde',
    desc: 'PARDHANE',
    audio: a1,
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e022494fb8ce966d471e74c81da',
    name: 'Apa fer milanga (Lofi version)',
    desc: 'Savi kahlon',
    audio: a2,
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e02249e235cc514c7071e4bd049',
    name: 'Aam jahe munde',
    desc: 'PARDHANE',
    audio: a1,
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e022494fb8ce966d471e74c81da',
    name: 'Apa fer milanga (Lofi version)',
    desc: 'Savi kahlon',
    audio: a2,
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e02249e235cc514c7071e4bd049',
    name: 'Aam jahe munde',
    desc: 'PARDHANE',
    audio: a1,
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e022494fb8ce966d471e74c81da',
    name: 'Apa fer milanga (Lofi version)',
    desc: 'Savi kahlon',
    audio: a2,
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e02249e235cc514c7071e4bd049',
    name: 'Aam jahe munde',
    desc: 'PARDHANE',
    audio: a1,
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e022494fb8ce966d471e74c81da',
    name: 'Apa fer milanga (Lofi version)',
    desc: 'Savi kahlon',
    audio: a2,
  },
];

export default function Plylist({handleInstallClick , handleBellIconClick}) {
  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
      <PlylistNavbar handleInstallClick={handleInstallClick} handleBellIconClick={handleBellIconClick} />
    
    <div>
      <MidPlylist items={playlistitems} />
    </div>
    </Card>
    </div>
  )
}