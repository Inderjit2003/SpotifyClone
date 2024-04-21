import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import Sidebar from './Sidebar';
import Plylist from './Plylist';
import { Container } from 'react-bootstrap';
import Style from '../CSS/Home.module.css';
import Bottom from './Bottom';
import BellIcon from './BellIcon';
import InstallApp from './InstallApp';
import LibComp from './LibComp';
import Profile from './Profile'

import a1 from '../assets/music/Bir Zindagi.mp3';
import a2 from '../assets/music/Apa Fer Milange.mp3';
import a3 from '../assets/music/Bhali Kare Kartar.mp3';
import a4 from '../assets/music/Chal Jindiye.mp3';
import a5 from '../assets/music/My Pride.mp3';

export default function Home() {
  const [install, setInstall] = useState('');
  
  const [playlist, setPlaylist] = useState(''); // State to manage playlist data

  const handleInstallClick = () => {
    setInstall('install');
  };

  const handleBellIconClick = () => {
    setInstall('bellIcon');
  };
  const handleprofileClick = () => {
    setInstall('profile');
  };
 
   // Function to handle playlist change
   const handlelibclick = (playlist) => {
    console.log(playlist)
    setPlaylist(playlist);

  };


  
// // Function to handle playlist click
// const handleLibClick = (playlistData) => {
//   setSelectedPlaylist(playlistData); // Update the state with the clicked playlist data
// };


const songs = [
  {
    img_src: 'https://i.scdn.co/image/ab67616d00001e02d6ae8f55846c610a0b112960',
    title: 'Zindagi',
    artist: 'Bir Singh',
    src: a1,
    color:' #1e3b60'
  },
  {
    img_src: 'https://i.scdn.co/image/ab67616d00001e0284a4d897fd4310573be70012',
    title: 'Apa fer milanga (Lofi version)',
    artist: 'Savi kahlon',
    src: a2,
    color:'#1e6051'
  },
  {
    img_src: 'https://i.scdn.co/image/ab67616d00001e023180f91f2221f258e5865b1e      ',
    title: 'Bhale Kare Kartar',
    artist: 'Bir Singh',
    src: a3,
    color:'#333073'
  },
  {
    img_src: 'https://i.scdn.co/image/ab67616d00001e021bbccdf9094270ef73e39b91      ',
    title: 'Chal jindiye',
    artist: 'Amrinder Gill',
    src: a4,
    color:'#73305b'
  },
  {
    img_src: 'https://i.scdn.co/image/ab67616d00001e020bf67e6f69d194a32295c686',
    title: 'My Pride',
    artist: 'Tarsem Jasar',
    src: a5,
    color:'#72100e'
  },
];
const artist=[
  {
    img:'https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca',
    name:'Pritam',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3',
  name:'Arijit Singh',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c',
  name:'A.R. Rahman',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab676161000051746220fc5e958ab498b96f5835',
  name:'Vishal Mishra',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174fc7c542c04b5f7dc8f1b1c16',
  name:'Anirudh Ravichander',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf',
  name:'Vishal-Shekhar',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c',
  name:'A.R. Rahman',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab676161000051746220fc5e958ab498b96f5835',
  name:'Vishal Mishra',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174fc7c542c04b5f7dc8f1b1c16',
  name:'Anirudh Ravichander',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf',
  name:'Vishal-Shekhar',
  desc:'Artist'
}
]
const album=[{
  img:'https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9',
  name:'ANIMAL',
  desc:'Manan Bhardwaj, Vishal Mishra, Jaani '
},
{
  img:'https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0',
  name:'Still Rollin',
  desc:'Shubh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae',
  name:'Moosetape',
  desc:'Sidhu Moose Wala'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02cb2f9520171129a3df7a241a',
  name:'Ghost',
  desc:'Diljit Dosanjh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36',
  name:'Making Memories',
  desc:'Karan Aujla,Ikky'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02ecdddbfde15bc99b5bedffd4',
  name:'Angrej',
  desc:'Amrinder Gill'
} ,
{
  img:'https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0',
  name:'Still Rollin',
  desc:'Shubh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae',
  name:'Moosetape',
  desc:'Sidhu Moose Wala'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02cb2f9520171129a3df7a241a',
  name:'Ghost',
  desc:'Diljit Dosanjh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36',
  name:'Making Memories',
  desc:'Karan Aujla,Ikky'
}   ]
const radio=[{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4YRxDV8wJFPHPTeXepOstw/en-GB',
  name:'Arijit Singh Radio',
  desc:'With Nwha Kakkar, Pritam, KK and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/2FKWNmZWDBZR4dE5KX4plR/en-GB',
  name:'Diljit dosanjh Radio',
  desc:'With Garry Sandhu, Ranjit Bawa, Amrinder Gill and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4K6blSRoklNdpw4mzLxwfn/en-GB',
  name:'Kumar Sanu Radio',
  desc:'With Udit Narayan, Alka Yagnik, Anuradha Paudwal and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4PULA4EFzYTrxYvOVlwpiQ/en-GB',
  name:'Sidhu Moose Wala Radio',
  desc:'With Ammy Virk, Amrit Maan, Karan Aujla and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4fEkbug6kZzzJ8eYX6Kbbp/en-GB',
  name:'KK Radio',
  desc:'With Mohit chauhan, Ankit Tiwari, Javed Ali and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5r3wPya2PpeTTsXsGhQU8O/en-GB',
  name:'Shubh Radio',
  desc:'With AP Dhillon, Gurinder Gill, Ikky and more'
} ,
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4K6blSRoklNdpw4mzLxwfn/en-GB',
  name:'Kumar Sanu Radio',
  desc:'With Udit Narayan, Alka Yagnik, Anuradha Paudwal and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4PULA4EFzYTrxYvOVlwpiQ/en-GB',
  name:'Sidhu Moose Wala Radio',
  desc:'With Ammy Virk, Amrit Maan, Karan Aujla and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4fEkbug6kZzzJ8eYX6Kbbp/en-GB',
  name:'KK Radio',
  desc:'With Mohit chauhan, Ankit Tiwari, Javed Ali and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5r3wPya2PpeTTsXsGhQU8O/en-GB',
  name:'Shubh Radio',
  desc:'With AP Dhillon, Gurinder Gill, Ikky and more'
}    ]

const [isPlaying, setIsPlaying] = useState(false);
const [audioPath, setAudioPath] = useState(null);

const handlePlayPause = (path) => {
  setIsPlaying(!isPlaying);
  setAudioPath(path);
};
 

  

  return (
    <>
      <div className='container'>
        <Container className={`${Style.container}`}>
          <SplitPane
            split='vertical'
            minSize={280}
            maxSize={-1100}
            defaultSize={340}
            style={{ backgroundColor: 'black' }}
          >
            <div className={`me-1 ${Style.pane}`}>
              {/* {install === 'library' && <Sidebar handleLibClick={handleLibClick}/> } */}
              <Sidebar handlelibclick={handlelibclick} />
            </div>
            <div className={`me-1 ${Style.pane}`}>
              {install === 'install' && 
              <InstallApp
               handleInstallClick={handleInstallClick} 
               handleprofileClick={handleprofileClick} 
               handleBellIconClick={handleBellIconClick} />}
              
              
              {install === 'bellIcon' && 
              <BellIcon
              handleBellIconClick={handleBellIconClick}
              handleprofileClick={handleprofileClick} 
              handleInstallClick={handleInstallClick} />}


              {install === 'profile' && 
              <Profile 
              handleInstallClick={handleInstallClick} 
              handleprofileClick={handleprofileClick} 
              handleBellIconClick={handleBellIconClick} />}
              
              {install === '' &&
               (playlist  ? 
              <LibComp cmp={playlist}
               playlistitems={songs}
              handleInstallClick={handleInstallClick} 
              handleprofileClick={handleprofileClick} 
               handleBellIconClick={handleBellIconClick} /> 
               :
                <Plylist playlistitems={songs}
                radio={radio} album={album} artist={artist}
                 onPlayPause={handlePlayPause}
                handleprofileClick={handleprofileClick} 
                handleInstallClick={handleInstallClick}
                handleBellIconClick={handleBellIconClick} />)}
             </div>
          </SplitPane>
        </Container>
      </div>
      <Bottom audioPath={audioPath}  isPlaying ={isPlaying}  onPlayPause={handlePlayPause} playlistitems={songs}  />
    </>
  );
}
