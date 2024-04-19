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

import a1 from '../assets/audio/Aam Jahe.mp3'
import a2 from '../assets/audio/Aam Jahe.mp3'

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


 

  const playlistitems = [
    {
      img: 'https://i.scdn.co/image/ab67616d00001e02249e235cc514c7071e4bd049',
      name: 'Aam jahe munde',
      desc: 'PARDHANE',
      audio: a1,
      singer:'ranjit',
      date:'1 day ago'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e022494fb8ce966d471e74c81da',
      name: 'Apa fer milanga (Lofi version)',
      desc: 'Savi kahlon',
      audio: a2,
      singer:'kahlon',
      date:'5 days ago'
    },
    
  ];
  

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
              {install === 'install' && <InstallApp handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} />}
              {install === 'bellIcon' && <BellIcon handleprofileClick={handleprofileClick} handleInstallClick={handleInstallClick} />}
              {install === 'profile' && <Profile handleInstallClick={handleInstallClick} handleBellIconClick={handleBellIconClick} />}
              
              {install === '' && (playlist  ? <LibComp cmp={playlist} playlistitems={playlistitems} handleBellIconClick={handleBellIconClick} /> : <Plylist playlistitems={playlistitems} handleprofileClick={handleprofileClick} handleInstallClick={handleInstallClick} handleBellIconClick={handleBellIconClick} />)}
             </div>
          </SplitPane>
        </Container>
      </div>

      <Bottom />
    </>
  );
}
