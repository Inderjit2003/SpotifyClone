import React, {useState} from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import LHome from './LoginComponents/LHome'
import Login from './AuthComp/Login'
import Signup from './AuthComp/Signup'
import Home from './Component/Home'
// import Home from './Practice/Home'

import Search from './LoginComponents/Search'
import songContext from './contexts/songContext'

import { Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom
import Showall from './Practice/Showall'
import AllCards  from './Component/AllCards'
import SearchHome from './Component/SearchHome'
import InstallApp from './LoginComponents/InstallApp'
import MidPlylist from './LoginComponents/MidPlylist'
import Plylist from './Component/Plylist'
import PlylistNavbar from './Component/PlylistNavbar'
import UpSidebar from './Component/UpSidebar'
import BellIcon from './LoginComponents/BellIcon'
import LibComp from './LoginComponents/LibComp'
import Profile from './LoginComponents/Profile'
import AlbumPlay from './LoginComponents/AlbumPlay'
// import MidPlylist from './Component/MidPlylist'



export default function App() {
  const [currentSong , setCurrentSong ] =useState(null);
  const [soundPlayed,setSoundPlayed] = useState(null);
  const [isPaused , setIsPaused] = useState(true);
  return (
    <>
    <div>
    <BrowserRouter>
    <div className='w-screen h-screen'>
      <songContext.Provider value={{currentSong , setCurrentSong , soundPlayed ,setSoundPlayed , isPaused , setIsPaused}}>
     <Routes>

        <Route path='/' element = {<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/search-home' element={<Home><SearchHome /></Home>} />



        <Route path='/Home' element = {<LHome />} />
        <Route path='/search' element={<Search />} />
        <Route path="/showcards" element={<Home> <AllCards /> </Home> } />
        
         <Route path='/InstallApp' element={<InstallApp />}/>
         <Route path='/bellicon' element={<BellIcon />}/>
         <Route path='/profile' element={<Profile />}/>
         <Route path='/libcomp' element={<LibComp />}/>


        
         <Route path='/Album' element ={<AlbumPlay />} />







    
    </Routes>
    </songContext.Provider>
     
     </div>
    </BrowserRouter>
    </div>
    </>
  )
}
