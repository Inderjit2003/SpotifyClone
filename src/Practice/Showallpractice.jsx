import React, { useState } from 'react';
import style from '../CSS/Home.module.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import HomeFooter from './HomeFooter';
import Swal from 'sweetalert2';
import AllCards from './AllCards';

export default function Showall({ artist , radio }) {
    const [showAllClicked, setShowAllClicked] = useState(false);
    const [artisthoveredIndex, setArtistHoveredIndex] = useState(null);
    const [radiohoveredIndex, radiosetHoveredIndex] = useState(null);


    const artisthandleMouseEnter = (index) => {
        setArtistHoveredIndex(index);
    };

    const artisthandleMouseLeave = () => {
        setArtistHoveredIndex(null);
    };


    const radiohandleMouseEnter = (index) => {
        radiosetHoveredIndex(index);
    };
    const radiohandleMouseLeave = () => {
        radiosetHoveredIndex(null);
    };

    

    const handleCardClick = (index) => {
        console.log('Clicked on card:', index);
        Swal.fire({
            background: '#121212',
            color: 'white',
            title: 'Playlist',
            html: 'Log in to play playlists.',
            timer: 1500,
            width: 600,
            padding: '3em',
            backdrop: `rgba(0,0,123,0.4)`,
            confirmButtonText: 'Login',
            cancelButtonColor: '#121212',
            showCancelButton: true,
            cancelButtonText: 'Not now',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/login';
            }
        });
    };

    const handleShowAllClick = (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        setShowAllClicked(prevState => !prevState); // Toggle the showAllClicked state
    };



    return (
        <Container fluid className={`mt-2 ${style.scrollStart}`}>
            <section className="forartist">
                {showAllClicked ? (
                    <AllCards
                        artist={artist}
                        handleCardClick={handleCardClick}
                        artisthoveredIndex={artisthoveredIndex}
                        artisthandleMouseEnter={artisthandleMouseEnter}
                        artisthandleMouseLeave={artisthandleMouseLeave}
                    />
                ) : (
                    <div>
                        <Row
                            className="justify-content-between align-items-center p-2"
                            style={{
                                backgroundImage: 'linear-gradient(to top , #121212 , rgba(37, 33, 33, 0.693)  )',
                            }}
                        >
                            <Col xs={12} sm={8}>
                                <a href="/" className="text-decoration-none text-white">
                                    <h5 style={{ fontWeight: '700', fontSize: '22px' }} className={style.Heading}>
                                        Popular artists
                                    </h5>
                                </a>
                            </Col>
                            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                                <a href="/" className="text-decoration-none text-white">
                                    <p className={`${style.Showall}`} onClick={handleShowAllClick}>
                                        Show all
                                    </p>
                                </a>
                            </Col>
                        </Row>

                        <Row xs={1} md={2} lg={3} xl={6} className="g-0">
                            {artist.slice(0, 6).map((value, index) => (
                                <Col key={index}>
                                    <Card
                                        onMouseEnter={() => artisthandleMouseEnter(index)}
                                        onMouseLeave={artisthandleMouseLeave}
                                        className={`mb-2 p-2 border-0`}
                                        onClick={() => handleCardClick(index)}
                                        style={{
                                            height: '14rem',
                                            backgroundColor: artisthoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212',
                                            cursor: 'pointer',
                                            display: 'block',
                                        }}
                                    >
                                        <Card.Img
                                            style={{ borderRadius: '50vh', height: '21vh', width: '21vh' }}
                                            variant="top"
                                            src={value.img}
                                        />
                                        <div className="mt-2" style={{ color: 'white', fontWeight: '500' }}>
                                            <h6 style={{ fontSize: '15px', fontWeight: '550' }} className={style.headingname}>
                                                {value.name}
                                            </h6>
                                            <p className={style.p}>{value.desc}</p>
                                        </div>

                                        {artisthoveredIndex === index && (
                                            <div className={style.play}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="black"
                                                    className="bi bi-play-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                                </svg>
                                            </div>
                                        )}
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}
            </section>


            <section className='forradio'>
            {showAllClicked ? (
                <AllCards radio={radio}
                        handleCardClick={handleCardClick}
                        artisthoveredIndex={artisthoveredIndex}
                        artisthandleMouseEnter={artisthandleMouseEnter}
                        artisthandleMouseLeave={artisthandleMouseLeave}
                    />
            ):(
                <div>

               
                 <Row className="justify-content-between align-items-center mt-4">
                     <Col xs={12} sm={8}>
                         <a href="/" className="text-decoration-none text-white">
                         {/* <h5 style={{fontWeight:'700', fontSize:'22px' }}className={style.Heading} onClick={() => radiosetShowAllCards(!radioshowAllCards)}>{radioshowAllCards ? 'Popular radio' : 'Popular radio'}</h5> */}
                         <h5 style={{ fontWeight: '700', fontSize: '22px' }} className={style.Heading}>
                                        Popular artists
                                    </h5>
                         </a>
                     </Col>
                     <Col xs={12} sm={4} className={`${style.list} text-end`}>
                         <a href="/" className="text-decoration-none text-white">
                             <p className={`${style.Showall}`} 
                             onClick={handleShowAllClick}>
                             Show all
                         </p>
                         </a>
                     </Col>
                 </Row>
      
              <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                  {radio.slice(0,6).map((value, index) => (
                      <Col key={index}>
            
                          <Card
                              onMouseEnter={() => radiohandleMouseEnter(index)}
                              onMouseLeave={radiohandleMouseLeave}
                              className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                              style={{height:'16rem', backgroundColor: radiohoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                          >
                              <Card.Img variant="top" src={value.img} />
                              <div className='mt-2' style={{  color: 'white' }}>
                              <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                      <p className={style.p}>{value.desc}</p>
                                      </div>
                              
                              
                                  {radiohoveredIndex === index && (
                                      <div className={style.play} >
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              fill="black"
                                              className="bi bi-play-fill"
                                              viewBox="0 0 16 16"
                                          >
                                              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                          </svg>
                                      </div>
                                  )}
                              
                          </Card>
                       
                      </Col>
                  ))}
              </Row>
              </div>
            )}
    </section> 
            <HomeFooter />
        </Container>
    );
}
