import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './AuthComp/Login'
import Signup from './AuthComp/Signup'
import Signupphone from './AuthComp/Signupphone'
import SignupEmailpass from './AuthComp/SignupEmailpass'

export default function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <div className='w-screen h-screen'>
   
     <Routes>

        <Route path='/' element = {<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/phone' element={<Signupphone />} />     {/* signup using phone number */}
        <Route path='/email' element={<SignupEmailpass />} />
    </Routes>
     </div>
    </BrowserRouter>
    </div>
    </>
  )
}
