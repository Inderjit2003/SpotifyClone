import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import LHome from './LoginComponents/LHome'
import Login from './AuthComp/Login'
import Signup from './AuthComp/Signup'
import Home from './Component/Home'
// import Home from './Practice/Home'

import Search from './LoginComponents/Search'


import Showall from './Practice/Showall'
import AllCards from './Practice/AllCards'
import SearchHome from './Component/SearchHome'
import InstallApp from './LoginComponents/InstallApp'



export default function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <div className='w-screen h-screen'>
   
     <Routes>

        {/* <Route path='/' element = {<Home />} /> */}
        <Route path='/' element = {<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Home' element = {<LHome />} />
        {/* <Route path='/' element = {<Home />} /> */}
        <Route path='/cards' elements={<AllCards />} />

        <Route path='/search' element={<Search />} />
        {/* <Route path='/serachhome' element={<SearchHome />}/> */}

        <Route path='/searchhome' element={<Home />}  />
        {/* <Route path='/InstallApp' element={<InstallApp />} /> */}



    
    </Routes>
     </div>
    </BrowserRouter>
    </div>
    </>
  )
}
