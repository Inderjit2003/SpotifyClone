import React from 'react'
import style from '../CSS/Home.module.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HomeFooter from './HomeFooter'
import { useState } from 'react'

export default function MidPlylist({items}) {

    const [hoveredIndex , setHoveredIndex] = useState(null);
    const handleMouseEnter = (index) => {
     setHoveredIndex(index);
    };
    const handleMouseLeave = () => {
     setHoveredIndex(null);
    };

  return (
    < div style={{width:'100%',minWidth:'95%'}} >
    <Container className={`mt-2 ${style.scroll}`}  >
    <div>
        <Row>
            <Col xs={11}>
            <a href="/" className='text-decoration-none text-white'><h4>Spotify Playlist</h4></a>
            </Col>
            <Col xs={1} className={`${style.list}`}>
             <a href="/" className='text-decoration-none text-white'> <p className={`${style.text}`}>Show all</p></a>
            </Col>
        </Row>
      </div>
    <section className='mt-3'>
    <Row>
        
            {items.map((value, index) => (
                <Col key={index} className='col-2'>
                <Card className={`mb-2 ${style.card}`} key={index} style={{borderColor: "#121212", cursor:'pointer',background:'#D7DBDD', ...(hoveredIndex === index && { borderRadius:'2%'}),
            }} 
             onMouseEnter={() => handleMouseEnter(index)}
             onMouseLeave={handleMouseLeave}
            >
                    <Card.Img variant="top" src={value.img} />
                    <Card.Body className={style.bg} style={{minHeight:'7rem',maxHeight:'20rem'}}>
                         <Card.Text style={{color:'white'}}>
                            <h6>{value.name}</h6>
                            <p className={style.p}>{value.desc}</p>
                        </Card.Text>
                        <Col>
                             {
                                hoveredIndex === index && ( <div className={style.play}>
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
                                    )
                             }
                        </Col>
                    </Card.Body>
                </Card>
                </Col>
            ))}
    </Row>
    </section>
    <HomeFooter />
</Container>

      </div>
  )
}
