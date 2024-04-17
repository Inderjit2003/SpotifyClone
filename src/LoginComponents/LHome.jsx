import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import Sidebar from './Sidebar';
import Plylist from './Plylist';
import { Container } from 'react-bootstrap';
import Style from '../CSS/Home.module.css';
import Bottom from './Bottom';
import BellIcon from './BellIcon';
import InstallApp from './InstallApp';

export default function Home() {
  const [install, setInstall] = useState('');

  const handleInstallClick = () => {
    setInstall('install');
  };

  const handleBellIconClick = () => {
    setInstall('bellIcon');
  };

  return (
    <>
      <div className='container'>
        <Container className={`${Style.container}`}>
          <SplitPane
            split='vertical'
            minSize={280}
            maxSize={-1100}
            defaultSize={372}
            style={{ backgroundColor: 'black' }}
          >
            <div className={`me-1 ${Style.pane}`}>
              <Sidebar />
            </div>
            <div className={`me-1 ${Style.pane}`}>
              {install === 'install' && <InstallApp handleBellIconClick={handleBellIconClick} />}
              {install === 'bellIcon' && <BellIcon handleInstallClick={handleInstallClick} />}
              {install === '' && <Plylist handleInstallClick={handleInstallClick} handleBellIconClick={handleBellIconClick} />}
            </div>
          </SplitPane>
        </Container>
      </div>

      <Bottom />
    </>
  );
}
