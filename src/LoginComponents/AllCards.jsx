import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AllCards = ({ items }) => {
    return (
        <Row xs={1} md={2} lg={3} xl={6} className="g-0 p-2">
            {items.map((value, index) => (
                <Col key={index}>
                    <Card className="mb-2 p-2">
                        <Card.Img variant="top" src={value.img} />
                        <Card.Body>
                            <Card.Text>
                                <h6>{value.name}</h6>
                                <p>{value.desc}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default AllCards