import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function Mainpage() {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img height="500" variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Mainpage