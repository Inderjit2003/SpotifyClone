// showall.jsx
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function ShowAll({ artist, handleCardClick, artisthoveredIndex, artisthandleMouseEnter, artisthandleMouseLeave }) {
    return (
        <div>
            <h3 style={{ fontWeight: '700', color: 'white' }} className='mt-5'> Popular artists </h3>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0">
                {artist.map((value, index) => (
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
                                <h6 style={{ fontSize: '15px', fontWeight: '550' }}>{value.name}</h6>
                                <p>{value.desc}</p>
                            </div>

                            {artisthoveredIndex === index && (
                                <div>
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
    );
}
