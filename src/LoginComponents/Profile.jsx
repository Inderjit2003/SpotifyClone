import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Modal } from 'react-bootstrap';
import Style from '../CSS/Home.module.css';
import style from '../CSS/Homefooter.module.css';
import HomeFooter from './HomeFooter';
import PlylistNavbar from './PlylistNavbar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const ProfilePage = () => {
  const defaultProfileImage = 'https://www.citypng.com/public/uploads/preview/spotify-white-logo-symbol-icon-hd-png-11661570403q5drcznuwu.png';

  const [newProfileImage, setNewProfileImage] = useState(defaultProfileImage);
  const [originalProfileImage, setOriginalProfileImage] = useState(defaultProfileImage);
  const [profileName, setProfileName] = useState('Simranjeet');
  const [showEditModal, setShowEditModal] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');

  const handleProfileNameChange = () => {
    setProfileName(newProfileName);
    setShowEditModal(false);
  };

  const handleSaveChanges = () => {
    setOriginalProfileImage(newProfileImage); // Update the original profile image
    setShowEditModal(false);
  };

  const handleModalClose = () => {
    setNewProfileImage(originalProfileImage); // Reset profile image to the original one
    setShowEditModal(false);
  };


  return (
    <div>
      <Row
        style={{
          backgroundImage: 'linear-gradient(135deg , #121212 0%, rgb(69, 67, 67) )',
          height: '40vh',
        }}
      >
<Col className='mx-5 my-3' xs={3}>
  <div 
    className={style.profileimage}
    onClick={() => document.getElementById('fileInput').click()}
  >
    <img 
      src={newProfileImage} 
      alt="Profile" 
      style={{ borderRadius: '30vh', height: '35vh' }} 
    />
    <div className={style.changeprofile}>
    <svg
     style={{marginLeft:'5vh'}}
    width="50" height="50" fill="currentColor"
    viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m497.9 142.1-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zm-213.7-42.3-262.6 262.6-21.2 121.5c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zm-160.1 240.1c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zm-36.1 84.1h48v36.3l-64.5 11.3-31.1-31.1 11.3-64.5h36.3z"/></svg>
      <h5 >Choose photo</h5>
    </div>
  </div>
  <input
    id="fileInput"
    type="file"
    accept="image/*"
    style={{ display: 'none' }}
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewProfileImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }}
  />
</Col>




        <Col style={{ color: 'white', marginLeft: '-6vh' }}>
          <h6 style={{ marginTop: '15vh' }}>Profile</h6>
          <h1 onClick={() => setShowEditModal(true)} style={{ fontSize: '12vh', fontWeight: '700' }}>{profileName}</h1>
         
        </Col>
      </Row>
      <Modal style={{ marginTop: '20vh', marginLeft: '10vh' }} show={showEditModal} onHide={handleModalClose}>
        <div style={{ backgroundColor: 'rgb(44, 42, 42)', borderRadius: '1vh', width: '75vh' }}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: 'white', fontWeight:'700' }}>Profile details</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: 'white', height: '37vh' }}>
            <Row>
              <Col xs={6}>
              <div 
                  className={style.profileimg}
                >
                    <img
                  src={newProfileImage}
                  alt="Profile Image"
                  style={{ borderRadius: '30vh', width: '25vh', height: '25vh', marginLeft: '1rem', cursor: 'pointer' }}
                  onClick={() => document.getElementById('fileInput').click()}
                />
        
                  <div className={style.changeimg}>
                  <svg
                   style={{marginLeft:'5vh'}}
                  width="30" height="30" fill="currentColor"
                  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m497.9 142.1-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zm-213.7-42.3-262.6 262.6-21.2 121.5c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zm-160.1 240.1c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zm-36.1 84.1h48v36.3l-64.5 11.3-31.1-31.1 11.3-64.5h36.3z"/></svg>
                    <h6 >Choose photo</h6>
                  </div>
                </div>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setNewProfileImage(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </Col>


              <Col xs={6} style={{ marginLeft: '-6vh', marginTop: '8vh', cursor:'pointer' }}>
                <Row>
                  <input
                    style={{
                      cursor:'pointer' ,
                      borderRadius:'1vh',
                      backgroundColor: 'rgb(76, 75, 75)',
                      color: 'white',
                      border: 'none',
                      borderBottom: '1px solid rgb(76, 75, 75)',
                      outline: 'none',
                      fontSize: '16px',
                      padding: '8px 0',
                      width: '100%',
                      margin: '10px 0',
                    }}
                    type="text"
                    placeholder="Enter new profile name"
                    value={newProfileName}
                    onChange={(e) => setNewProfileName(e.target.value)}
                  />
                </Row>
                <Row>
                  <Button
                    style={{
                      marginLeft: '22vh',
                      marginTop: '2vh',
                      height: '6vh',
                      borderRadius: '5vh',
                      width: '14vh',
                    }}
                    variant="light"
                    onClick={handleProfileNameChange}
                    className={style.save}
                  >
                    Save
                  </Button>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ fontSize: '11px', fontWeight: '700', marginTop: '-8vh' }}>
                  By proceeding, you agree to give Spotify access to the image you choose to upload. Please make sure you have the right to upload the image.
                </p>
              </Col>
            </Row>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default function LibComp({ handleBellIconClick, handleInstallClick ,newProfileImage, handleprofileClick }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuItemClick = () => {
    setShowDropdown(false);
    // Handle menu item click actions here
  };

  return (
    <div className={`mx-1 py-2`} >
      <Card style={{ backgroundColor: '#121212', border: 'none' }}>
      <PlylistNavbar handleInstallClick={handleInstallClick} handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} />


        <div className={`mt-3 ${Style.scrollInstallApp}`}>
        <ProfilePage newProfileImage={newProfileImage} />
        {/* Your HomeFooter component */}
        <HomeFooter />
        </div>
      </Card>
    </div>
  );
}
