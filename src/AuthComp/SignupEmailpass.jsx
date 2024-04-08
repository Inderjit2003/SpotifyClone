import React , {useState} from 'react'
import { Col, Container, ProgressBar, Button, Row } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import LsNavbar from './LsNavbar'

export default function SignupEmailpass() {
  return (
    <>
    <div  style={{backgroundColor:'black',height:'100vh'}}>
       <LsNavbar />

    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <ProgressBar now={35} variant='success' width={25} style={{ width: '450px', height: '3px', background: '#606060',}} />
    </div>
    <Container style={{display:'flex',alignItems:'center',width:'450px',marginTop:'10px'}}>
      <Row>
        <Col xs={2}>
        <Button data-bs-theme="dark"  className={`bg-black mt-2 rounded-circle border-0 ${Style.icon}`} size='sm' href='/signup'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </Button>
        </Col>
        <Col  xs={10}>
            <div className='ms-3'>
            <span style={{ color: 'rgb(104, 105, 104)'}}>Step 1 of 3</span><br />
              <span className='text-white'>Create a password</span>
            </div>
        </Col>
      </Row>
      </Container>
    </div>
  </>

  )
}
