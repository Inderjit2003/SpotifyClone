import React ,{useContext, useState} from 'react'
import { Card } from 'react-bootstrap'
import PlylistNavbar from './PlylistNavbar'
// import MidPlylist from './MidPlylist';
import style from '../CSS/Home.module.css';
import Style from '../CSS/LoginHome.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import HomeFooter from './HomeFooter';
import SongPlay from './SongPlay';
import songContext from '../contexts/songContext';
import AlbumPlay from './AlbumPlay';
import ArtistPlay from './ArtistPlay';
import RadioPlay from './RadioPlay';



export default function Plylist({handleInstallClick , handleprofileClick, handleBellIconClick,  playlistitems, radio , album , artist}) {


  const {currentSong,setCurrentSong }= useContext(songContext);
  console.log(currentSong)

      const [artistHoveredIndex, setArtistHoveredIndex] = useState(null);
      const [albumHoveredIndex, setAlbumHoveredIndex] = useState(null);
      const [radioHoveredIndex, setRadioHoveredIndex] = useState(null);
      const [playlistHoveredIndex, setPlaylistHoveredIndex] = useState(null);
   
    const handleMouseEnter = (index, type) => {
      if (type === 'artist') {
          setArtistHoveredIndex(index);
      } else if (type === 'album') {
          setAlbumHoveredIndex(index);
      } else if (type === 'radio') {
          setRadioHoveredIndex(index);
      } else if (type === 'playlist') {
          setPlaylistHoveredIndex(index);
      }
  };
  const handleMouseLeave = (type) => {
      if (type === 'artist') {
          setArtistHoveredIndex(null);
      } else if (type === 'album') {
          setAlbumHoveredIndex(null);
      } else if (type === 'radio') {
          setRadioHoveredIndex(null);
      } else if (type === 'playlist') {
          setPlaylistHoveredIndex(null);
      }
  };
    const handleShowAllClick = () => {
      setSelectedCardIndex(null); // Deselect the selected card
  };
  
  const [audioPath , setAudioPath] = useState();
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  
  const handleCardClick = (index) => {
        setCurrentSong(playlistitems[index]);
        setSelectedCardIndex(index);
      // if (selectedCardIndex === index) {
      //     // If the same card is clicked again, deselect it
      //     setSelectedCardIndex(null);
      // } else {
      //     setCurrentSong(playlistitems[index]);
      //     setSelectedCardIndex(index);
       
  
      // }
  };

  const [SelectedArtistIndex , setSelectedArtistIndex] = useState(null);
const handleArtistClick =(index) => {
    setCurrentSong(artist[index]);
    setSelectedArtistIndex(index);
};
const [SelectedAlbumIndex , setSelectedAlbumIndex] = useState(null);
const handleAlbumClick =(index) =>{
    setCurrentSong(album[index]);
    setSelectedAlbumIndex(index);
};
const [SelectedRadioIndex , setSelectedRadioIndex] = useState(null);
const handleRadioClick = (index) =>{
    setCurrentSong(radio[index]);
    setSelectedRadioIndex(index);
}



  
  
    const onPlayPause = (index) => {
      if (selectedCardIndex === index && isPlaying) {
          // audio.pause();
          setIsPlaying(false);
      } else {
          // const selectedItem = playlistitems[index];
          // setSelectedCardIndex(index);
          // if (audio) {
          //     audio.stop();
          // }
          // const newAudio = new Howl({
          //     src: [selectedItem.src],
          //     onend: () => {
          //         setIsPlaying(false);
          //         setSelectedCardIndex(null);
          //     },
          // });
          // setAudio(newAudio);
          // newAudio.play();
          setIsPlaying(true);
      }
  };
  

  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
      <PlylistNavbar handleInstallClick={handleInstallClick} handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} />
    
    


      <div className={`mt-2 ${Style.bg}`}>
        <div>
    <Container fluid className={` ${style.scrollStart}`}>
    <div>
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Artist */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                <section className="mt-2">      
                {!SelectedArtistIndex ? (
                <div>
                <Row
                    className="justify-content-between align-items-center p-2"
                    style={{
                        backgroundImage: 'linear-gradient(to top , #121212 , rgba(37, 33, 33, 0.693)  )',
                    }}
                >
                    <Col xs={12} sm={8}>
                        <a href="/" className="text-decoration-none text-white">
                            <h5 style={{ fontWeight: '700', fontSize: '22px' }} className={style.Heading} >
                            Popular artists                          
                            </h5>
                        </a>
                    </Col>
                    <Col xs={12} sm={4} className={`${style.list} text-end`}>
                        <a  className="text-decoration-none text-white">
                        <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'artist')}>
                                        Show all
                                    </p>
                        </a>
                    </Col>
                </Row>

                <Row xs={1} md={2} lg={3} xl={6} className="g-0">
                    {artist.slice(0,6).map((value, index) => (
                        <Col key={index}>
                                <Card
                                 onMouseEnter={() => handleMouseEnter(index, 'artist')}
                                 onMouseLeave={() => handleMouseLeave('artist')}
                                 className={`mb-2 p-2 border-0`}
                                 onClick={() => handleArtistClick(index)}
                                 style={{
                                     height: '14rem',
                                     backgroundColor: artistHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212',
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

                                    {artistHoveredIndex === index && (
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
                   ) : (
                    <ArtistPlay />
                )}
                    </section>
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Album */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}

     <section className='foralbum'>
     {!SelectedAlbumIndex ? (
        <div>
            <Row className="justify-content-between align-items-center mt-4">
            <Col xs={12} sm={8}>
                <a href="/" className="text-decoration-none text-white">
                <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading}>
                Popular album
                </h5>
                </a>
            </Col>
            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'album')}>
                                        Show all
                </p>
                </a>
            </Col>
        </Row>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                {album.slice(0,6).map((value, index) => (
                    <Col key={index}>       
                        <Card
                            onMouseEnter={() => handleMouseEnter(index, 'album')}
                            onMouseLeave={() => handleMouseLeave('album')}
                            className={`mb-2 p-2 border-0`}   onClick={() => handleAlbumClick(index)}
                            style={{height:'16rem', backgroundColor: albumHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={value.img} />
                            <div className='mt-2' style={{  color: 'white' }}>
                            <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                    <p className={style.p}>{value.desc}</p>
                                    </div>
                            
                            
                                {albumHoveredIndex === index && (
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
          ) : (
            <AlbumPlay />
        )} 
    </section> 
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Radio */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}
     <section className='forradio'>
     {!SelectedRadioIndex ? (
        <div>
            <Row className="justify-content-between align-items-center mt-4">
            <Col xs={12} sm={8}>
                <a href="/" className="text-decoration-none text-white">
                <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading}>
                Popular radio
                </h5>
                </a>
            </Col>
            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'radio')}>
                                        Show all
                </p>
                </a>
            </Col>
        </Row>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                {radio.slice(0,6).map((value, index) => (
                    <Col key={index}>       
                        <Card
                            onMouseEnter={() => handleMouseEnter(index, 'radio')}
                            onMouseLeave={() => handleMouseLeave('radio')}
                            className={`mb-2 p-2 border-0`}   onClick={() => handleRadioClick(index)}
                            style={{height:'16rem', backgroundColor: radioHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={value.img} />
                            <div className='mt-2' style={{  color: 'white' }}>
                            <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                    <p className={style.p}>{value.desc}</p>
                                    </div>
                            
                            
                                {radioHoveredIndex === index && (
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
         ) : (
            <RadioPlay />
         )}
    </section> 
      {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Playlist */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}

        <section className='forplaylist'>
        {!selectedCardIndex ? (
        <div>
            <Row className="justify-content-between align-items-center mt-4">
            <Col xs={12} sm={8}>
                <a href="/" className="text-decoration-none text-white">
                <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading}>
                Popular Playlist
                </h5>
                </a>
            </Col>
            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'playlist')}>
                                        Show all
                </p>
                </a>
            </Col>
        </Row>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                {playlistitems.slice(0,6).map((value, index) => (
                    <Col key={index} >       
                        <Card
                            onMouseEnter={() => handleMouseEnter(index, 'playlist')}
                            onMouseLeave={() => handleMouseLeave('playlist')}
                            className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                            style={{height:'16rem', backgroundColor: playlistHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={value.img_src} />
                            <div className='mt-2' style={{  color: 'white' }}>

                            <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.title}</h6>
                                    <p className={style.p}>{value.artist}</p>
                                    </div>
                            
                            
                                {/* {playlistHoveredIndex === index && (
                                    <div className={style.play}  onClick={() => {onPlayPause(index)}}>
                                    {
                                    // selectedCardIndex === index &&
                                     isPlaying ? (
       <FontAwesomeIcon icon={faPause} />
   ) : (
       <FontAwesomeIcon icon={faPlay} />
   )}
                                    </div>
                                )} */}
                            
                        </Card>
                    </Col>
                ))}
            </Row>
       
        </div> 
         ) : (
       <SongPlay items={playlistitems} index={selectedCardIndex} />
    
         )}
    </section> 
                </div>
                <HomeFooter />
            </Container>
        </div>
        </div>
    </Card>
    </div>
  )
}