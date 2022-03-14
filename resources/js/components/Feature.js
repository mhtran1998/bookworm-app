import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

export default function Feature({list}) {
    const renderListItem = (list = []) => {
        return list.map((item) => {
            let book_cover_photo = item.book_cover_photo ? item.book_cover_photo : "book1";
            return(
                <Col>
                <Card className="text-center" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"/assets/bookcover/" + book_cover_photo + ".jpg"} />
                    <Card.Body>
                        <Card.Title>{item.book_title}</Card.Title>
                        <Card.Text>
                            {item.author_name}
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">{item.book_price}</Button>
                    </Card.Body>
                </Card>
                </Col>
            )
        })
    }
  return (
    <>
        <Container>
            <Row xs='4'>
                {renderListItem(list)}
            </Row>
        </Container>
    </>
  )
}
