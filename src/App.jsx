import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import LHome from './LoginComponents/LHome'
import Login from './AuthComp/Login'
import Signup from './AuthComp/Signup'
import Home from './Component/Home'
// import Home from './Practice/Home'


import Showall from './Practice/Showall'
import AllCards from './Practice/AllCards'



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



    
    </Routes>
     </div>
    </BrowserRouter>
    </div>
    </>
  )
}
