import React from 'react'
import LsNavbar from './LsNavbar'
import { Button, Card } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import Textinput from './Textinput'
import TextinputPass from './TextinputPass'


export default function Login() {
  return (
    <div className={`${Style.bgls}`}>
      <LsNavbar />
      {/* Login form */}
      <div className={`${Style.LoginDiv}`} >
        
      <Card className={``} style={{backgroundColor:'#121212',color:'white',width:'43rem',alignItems:'center',height:'37rem'}} >
         <Card.Body >
              <h1 className='fw-bold mt-4 mb-2 ' style={{textAlign:'center'}}> Login to Spotify</h1>
              <hr  className=' my-4' />
              <div className={`mt-2 ${Style.loginform}`}>
              <Textinput label="Email ID or username" placeholder="Email ID or username" />
              </div>
              <div className={`mt-2 ${Style.loginform}`}>
                <TextinputPass label="Password" placeholder="Password"  />
              </div>
              <div>
                <div class="custom-control my-2 custom-checkbox">
                     <input type="checkbox" class="custom-control-input" id="customCheck1" />
                      <label class="custom-control-label mx-2" for="customCheck1">Remeber me</label>
                  </div>
                  <Button className={`rounded-pill my-4 fw-semibold ${Style.button}`} style={{backgroundColor:'#1ed760',borderColor:'#1ed760',width:'25rem',color:'black'}} >
                    Login In
                  </Button>
                  <br/>
                  <div className='mb-3' style={{color:'white',marginLeft:'115px'}}>
                  <a href="/"  style={{color:'white'}}>Forgot your Password?</a></div>
                  <hr />
                  <div  style={{color:'rgb(104, 105, 104)',marginLeft:'115px'}}>
                   <span >Don't have an account?</span>
                   </div>
                   <div style={{color:'white',marginLeft:'125px'}}>
                  <a href="/signup" style={{color:'white'}}>Sign up for Spotify</a>
                  </div>
                  <br />
                </div>
         </Card.Body>
      </Card>
      </div>
    </div>
  )
}
