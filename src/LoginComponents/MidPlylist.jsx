import React, { useState } from 'react';
import style from '../CSS/Home.module.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import HomeFooter from './HomeFooter';
import Plc from '../SharedComponents/Plc';

export default function MidPlylist({ items  }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleCardClick = (index) => {
        console.log('Clicked on card:', index);
        if (index !== null) {
            setSelectedCardIndex(index);
        }
    };

    const handleShowAllClick = () => {
        setSelectedCardIndex(null); // Deselect the selected card
    };

    return (
        <Container fluid className={`mt-2 ${style.scroll}`}>
        {!selectedCardIndex ? (
            <section className="mt-3">
                <Row className="justify-content-between align-items-center">
                    <Col xs={12} sm={8}>
                        <a href="/" className="text-decoration-none text-white">
                            <h4>Spotify Playlist</h4>
                        </a>
                    </Col>
                    <Col xs={12} sm={4} className={`${style.list} text-end`}>
                        <a href="/" className="text-decoration-none text-white">
                            <p className={`${style.text}`} onClick={handleShowAllClick}>show all</p>
                        </a>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={3} xl={6} className="g-0 p-2">
                    {items.map((value, index) => (
                        <Col key={index}>
                            <Card
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className={`mb-2 p-2 ${style.cardbody}`}
                                onClick={() => handleCardClick(index)}
                                style={{ backgroundColor: hoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                            >
                                <Card.Img variant="top" src={value.img} />
                                <Card.Body style={{ color: 'white', height: '7rem' }}>
                                    <Card.Text>
                                        <h6>{value.name}</h6>
                                        <p className={style.p}>{value.desc}</p>
                                    </Card.Text>
                                    {hoveredIndex === index && (
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
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        ) : (
            <Plc items={items} index={selectedCardIndex} />
        )}
        <HomeFooter />
    </Container>
    
    );
}