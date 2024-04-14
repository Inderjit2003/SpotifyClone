import React from 'react'
import style from '../CSS/Home.module.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HomeFooter from './HomeFooter'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import Style from '../CSS/Homefooter.module.css'

export default function MidPlylist({ artist , album , radio , playlist}) {
    //---------------------------------------------------------------------------------------------------
                           //play hover effect on aritst
    //---------------------------------------------------------------------------------------------------
    const [artisthoveredIndex, artistsetHoveredIndex] = useState(null);
    const artisthandleMouseEnter = (index) => {
        artistsetHoveredIndex(index);
    };
    const artisthandleMouseLeave = () => {
        artistsetHoveredIndex(null);
    };

     //---------------------------------------------------------------------------------------------------
                           //play hover effect on album
    //---------------------------------------------------------------------------------------------------
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    //---------------------------------------------------------------------------------------------------
                           //play hover effect on radio
    //---------------------------------------------------------------------------------------------------
    const [radiohoveredIndex, radiosetHoveredIndex] = useState(null);
    const radiohandleMouseEnter = (index) => {
        radiosetHoveredIndex(index);
    };
    const radiohandleMouseLeave = () => {
        radiosetHoveredIndex(null);
    };

     //---------------------------------------------------------------------------------------------------
                           //play hover effect on playlist
    //---------------------------------------------------------------------------------------------------
    const [playlisthoveredIndex, playlistsetHoveredIndex] = useState(null);
    const playlisthandleMouseEnter = (index) => {
        playlistsetHoveredIndex(index);
    };
    const playlisthandleMouseLeave = () => {
        playlistsetHoveredIndex(null);
    };




    //---------------------------------------------------------------------------------------------------
                                     //use state for show all cards for artist
     //---------------------------------------------------------------------------------------------------
    const [artistshowAllCards, artistsetShowAllCards] = useState(() => {
        // Retrieve the showAllCards state from sessionStorage
        const artiststoredShowAllCards = sessionStorage.getItem('artistshowAllCards');
        // If storedShowAllCards exists in sessionStorage, parse it to boolean, else default to false
        return artiststoredShowAllCards ? JSON.parse(artiststoredShowAllCards) : false;
    });

    useEffect(() => {
        // Save the showAllCards state to sessionStorage whenever it changes
        sessionStorage.setItem('artistshowAllCards', JSON.stringify(artistshowAllCards));
    }, [artistshowAllCards]);
    

     //---------------------------------------------------------------------------------------------------
                                 //use state for show all cards for album 
    //----------------------------------------------------------------------------------------------------

       
    const [albumshowAllCards, albumsetShowAllCards] = useState(() => {
        const albumstoredShowAllCards = sessionStorage.getItem('albumshowAllCards');
        return albumstoredShowAllCards ? JSON.parse(albumstoredShowAllCards) : false;
    });

    useEffect(() => {
        sessionStorage.setItem('albumshowAllCards', JSON.stringify(albumshowAllCards));
    }, [albumshowAllCards]);

    //---------------------------------------------------------------------------------------------------
                                     //use state for show all cards for radio
     //---------------------------------------------------------------------------------------------------
       
    const [radioshowAllCards, radiosetShowAllCards] = useState(() => {
        const radiostoredShowAllCards = sessionStorage.getItem('radioshowAllCards');
        return radiostoredShowAllCards ? JSON.parse(radiostoredShowAllCards) : false;
    });

    useEffect(() => {
        sessionStorage.setItem('radioshowAllCards', JSON.stringify(radioshowAllCards));
    }, [radioshowAllCards]);


     //---------------------------------------------------------------------------------------------------
                                     //use state for show all cards for playlist
     //---------------------------------------------------------------------------------------------------
      
    const [playlistshowAllCards, playlistsetShowAllCards] = useState(() => {
        const playliststoredShowAllCards = sessionStorage.getItem('playlistshowAllCards');
        return playliststoredShowAllCards ? JSON.parse(playliststoredShowAllCards) : false;
    });

    useEffect(() => {
        sessionStorage.setItem('playlistshowAllCards', JSON.stringify(playlistshowAllCards));
    }, [playlistshowAllCards]);
    //-----------------------------------------------------------------------------------------------------
                                              //alert on click any card
    //-----------------------------------------------------------------------------------------------------
    
    const handleCardClick = (index) => {
        console.log('Clicked on card:', index);
        Swal.fire({
            background:'#121212',
            color:'white',
            title:'Playlist',
            html:'Log in to play playlists.',
            timer:1500,
            width: 600,
            padding: "3em",
            backdrop: `
            rgba(0,0,123,0.4)`,
            // url("https://www.bing.com/images/search?view=detailV2&ccid=hn0n4KUL&id=77A01EB72807AC58DDD8EF45D402499701D350E6&thid=OIP.hn0n4KULVRro0fSsx5Q_RgHaDg&mediaurl=https%3a%2f%2fclassroomclipart.com%2fimages%2fgallery%2fAnimations%2fMusic%2fmusical-notes-animation.gif&exph=261&expw=550&q=Music+Notes+Animation&simid=608029239386076945&FORM=IRPRST&ck=F675F2E4BE8BEEBDB6278A0755E5F876&selectedIndex=1&itb=0&ajaxhist=0&ajaxserp=0")
            // left top
            // no-repeat`,   
            confirmButtonText:'Login',
            cancelButtonColor:'#121212',
            showCancelButton:true,
            cancelButtonText:'Not now',
          
        }).then((result) =>{
            if(result.isConfirmed){
                window.location.href = '/login'
            }
        })
        // Add your logic here to handle the click event
    };
   
    return (
        
    <Container fluid className={`mt-2 ${style.scrollStart}`}>
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Artist */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}
      <section className="forartist">
                <Row
                    className="justify-content-between align-items-center p-2"
                    style={{
                        backgroundImage: 'linear-gradient(to top , #121212 , rgba(37, 33, 33, 0.693)  )',
                    }}
                >
                    <Col xs={12} sm={8}>
                        <a href="/" className="text-decoration-none text-white">
                            <h5 style={{ fontWeight: '700', fontSize: '22px' }} className={style.Heading} onClick={() => artistsetShowAllCards(!artistshowAllCards)}>
                                {artistshowAllCards ? ' Popular artists' : ' Popular artists'}
                                
                            </h5>
                        </a>
                    </Col>
                    <Col xs={12} sm={4} className={`${style.list} text-end`}>
                        <a href="/" className="text-decoration-none text-white">
                            <p className={`${style.Showall}`} onClick={() => artistsetShowAllCards(!artistshowAllCards)}>
                                {artistshowAllCards ? 'Show less' : 'Show all'}
                            </p>
                        </a>
                    </Col>
                </Row>

                <Row xs={1} md={2} lg={3} xl={6} className="g-0">
                    {artist.map((value, index) => (
                        <Col key={index}>
                            {(artistshowAllCards || index < 6) && (
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
                            )}
                        </Col>
                    ))}
                </Row>
            </section>
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Album */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}

    <section className='foralbum'>
    <Row className="justify-content-between align-items-center mt-4">
        <Col xs={12} sm={8}>
            <a href="/" className="text-decoration-none text-white">
            <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading} onClick={() => albumsetShowAllCards(!albumshowAllCards)}>{albumshowAllCards ? 'Popular albums' : 'Popular albums'}</h5>
            </a>
        </Col>
        <Col xs={12} sm={4} className={`${style.list} text-end`}>
            <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={() => albumsetShowAllCards(!albumshowAllCards)}>{albumshowAllCards ? 'Show less' : 'Show all'}</p>
            </a>
        </Col>
    </Row>
        <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
            {album.map((value, index) => (
                <Col key={index}>
                     {(albumshowAllCards || index < 6) && (

                    <Card
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                        style={{height:'16rem', backgroundColor: hoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                    >
                        <Card.Img variant="top" src={value.img} />
                        <div className='mt-2' style={{  color: 'white' }}>
                        <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                <p className={style.p}>{value.desc}</p>
                                </div>
                        
                        
                            {hoveredIndex === index && (
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
                     )}
                </Col>
            ))}
        </Row>
    </section> 

     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Radio */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}
    <section className='forradio'>
    <Row className="justify-content-between align-items-center mt-4">
        <Col xs={12} sm={8}>
            <a href="/" className="text-decoration-none text-white">
            <h5 style={{fontWeight:'700', fontSize:'22px' }}className={style.Heading} onClick={() => radiosetShowAllCards(!radioshowAllCards)}>{radioshowAllCards ? 'Popular radio' : 'Popular radio'}</h5>
            </a>
        </Col>
        <Col xs={12} sm={4} className={`${style.list} text-end`}>
            <a href="/" className="text-decoration-none text-white">
                <p className={`${style.Showall}`} onClick={() => radiosetShowAllCards(!radioshowAllCards)}>{radioshowAllCards ? 'Show less' : 'Show all'}</p>
            </a>
        </Col>
    </Row>

        <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
            {radio.map((value, index) => (
                <Col key={index}>
                     {(radioshowAllCards || index < 6) && (
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
                    )}
                </Col>
            ))}
        </Row>
    </section> 

      {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Playlist */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}

    <section className='forplaylist'>
    <Row className="justify-content-between align-items-center mt-4">
        <Col xs={12} sm={8}>
            <a href="/" className="text-decoration-none text-white">
            <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading} onClick={() => playlistsetShowAllCards(!playlistshowAllCards)}>{playlistshowAllCards ? 'Spotify Playlist' : 'Spotify Playlist'}</h5>
            </a>
        </Col>
        <Col xs={12} sm={4} className={`${style.list} text-end`}>
            <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={() => playlistsetShowAllCards(!playlistshowAllCards)}>{playlistshowAllCards ? 'Show less' : 'Show all'}</p>
            </a>
        </Col>
    </Row>
        <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
            {playlist.map((value, index) => (
                <Col key={index}>
                     {(playlistshowAllCards || index < 6) && (
                    <Card
                        onMouseEnter={() => playlisthandleMouseEnter(index)}
                        onMouseLeave={playlisthandleMouseLeave}
                        className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                        style={{height:'16rem', backgroundColor: playlisthoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                    >
                        <Card.Img variant="top" src={value.img} />
                        <div className='mt-2' style={{  color: 'white' }}>
                        <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                <p className={style.p}>{value.desc}</p>
                                </div>
                        
                        
                            {playlisthoveredIndex === index && (
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
                    )}
                </Col>
            ))}
        </Row>
    </section> 

    <HomeFooter />
</Container>
);
}
