import React ,{useState} from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../assets/1.png';
import style from '../CSS/Homefooter.module.css'
import HomeFooter from './HomeFooter';
import libtable from '../CSS/LibTable.module.css'
import PlylistNavbar from './PlylistNavbar';
export default function LibComp({handleBellIconClick, handleprofileClick , cmp, handleInstallClick, playlistitems}) {


  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  
  const handleMenuItemClick = () => {
    setShowDropdown(false);
    // Handle menu item click actions here
  };

  
  // Define state to store original content
const [originalContent, setOriginalContent] = useState('');

// Event handler for mouse enter
const handleMouseEnter = (event) => {
  setOriginalContent(event.target.innerText); // Store original content
  event.target.innerText = ''; // Clear the content when hovered
};

// Event handler for mouse leave
const handleMouseLeave = (event) => {
  event.target.innerText = originalContent; // Restore the original content when not hovered
};



  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
    <PlylistNavbar handleInstallClick={handleInstallClick} handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} />
 


    <div className={` mt-3 ${Style.scrollInstallApp}`}
     style={{ }}>
        
           <Row 
           style={{backgroundImage:cmp.color,
                    height:'40vh'}} >
            <Col className='mx-5 my-3' xs={2}>
            <img src={cmp.imag} style={{height:'35vh', borderRadius:'4px'}}/>
            </Col>
            <Col style={{color:'white', marginLeft:'3vh'}}>
            <h6 style={{marginTop:'15vh'}}>{cmp.title}</h6>
            <h1 style={{fontSize:'12vh', fontWeight:'700'}}>{cmp.name}</h1>
            </Col>
           </Row>
          
          
           <div className={libtable.tableContainer}>
           {/* <Table style={{ backgroundImage: `linear-gradient(180deg, #282828, #121212) `}} hover variant='dark' className={` ${libtable.table}`}>
  <thead className="text-muted">
    <tr style={{ backgroundColor: 'red' }}>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Singer</th>
      <th scope="col">Album</th>
      <th scope="col">Date Added</th>
    </tr>
  </thead>
  <tbody>
    {playlistitems.map((value, index) => (
      <tr key={index}>
        <th scope="row" className={`${libtable.play}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{index + 1}</th>
        <td>
          <a href='/home' className={`${libtable.a}`}>{value.name}</a>
        </td>
        <td>
          <a href='/home' className={`${libtable.a}`}>{value.singer}</a>
        </td>
        <td>
          <a href='/home' className={`${libtable.a}`}>{value.desc}</a>
        </td>
        <td style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{value.date}</td>
      </tr>
    ))}
  </tbody>
</Table> */}
    </div>
           <HomeFooter />
           </div>
</Card>
</div>


  )
}
