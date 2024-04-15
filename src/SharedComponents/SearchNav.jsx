import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
// import { BiSearch } from 'react-icons/bi'; // Import the search icon from react-icons library

import Style from '../CSS/LoginHome.module.css'


export default function SearchNav({val , se}) {
  return (
    <div>
         <div className='mx-1 '>    
    <Navbar  sticky='top' expand="lg" >
<Container className='mt-2'>
 <Button variant='dark' className='me-2 rounded-circle border-0' size='sm' disabled > 
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
     </svg>
 </Button>
 <Button variant='dark' className='me-2 rounded-circle border-0' size='sm' disabled> 
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
               </svg>
 </Button>
 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 <Navbar.Collapse id="responsive-navbar-nav">
 <Nav className="me-auto">
 <div className={`ms-4 rounded-pill `} >
                 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
             <input type="text" value={val} onChange={se} className='m-2 p-2' style={{backgroundColor:'#121212',borderColor:'#121212',color:'white',width:'25rem'}} />
              </div>
</Nav>
 </Navbar.Collapse>
</Container>
</Navbar>
</div>
    </div>
  )
}
