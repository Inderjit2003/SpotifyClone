import React from 'react'
import LsNavbar from './LsNavbar'
import { Button, Card } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import Textinput from './Textinput'
import TextinputPass from './TextinputPass'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div><div className={`${Style.bgls}`}>
    <LsNavbar />
    {/* Login form */}
    <div className={`${Style.LoginDiv}`} >
    <Card className={``} style={{backgroundColor:'black',color:'white',width:'43rem',alignItems:'center',display:'flex',height:'34rem'}} >
       <Card.Body >
            <h2 className='fw-bold mt-1 mb-2 ' style={{textAlign:'center'}}> Signup for free to start listening </h2>
            <hr  className=' my-4' />
            <div className={`mt-2 ${Style.loginform}`}>
            <Textinput label="Email ID or username" placeholder="Email ID or username" />
            </div>
            <div className={`mt-2 ${Style.loginform}`}>
              <TextinputPass label="Password" placeholder="Password"  />
            </div>
            <div className={`mt-2 ${Style.loginform}`}>
              <TextinputPass label="Confirm Password" placeholder="Confirm Password"  />
            </div>
            <div >
                <Button className={`rounded-pill mx-5 my-4 fw-semibold ${Style.button}`} style={{backgroundColor:'#1ed760',borderColor:'#1ed760',width:'25rem',color:'black'}} >
                  Signup
                </Button>
                <br/>
               
                <div  style={{color:'rgb(104, 105, 104)',marginLeft:'135px'}}>
                 <span >Already have an account?</span>
                 </div>
                 <div style={{color:'white',marginLeft:'160px'}}>
                <Link to='/login' style={{color:'white'}}>Login for Spotify</Link>
                </div>
                <br />
              </div>
       </Card.Body>
    </Card>
    </div>
  </div></div>
  )
}