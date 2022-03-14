import React from 'react'
import { Card, Button } from 'react-bootstrap'
export default function Recommended({ list }) {
    const renderListItem = (list = []) => {
        return list.map((item) => {
            return (
                <div className="tab-pane fade show active"
                id="recommended"
                role="tabpanel"
                aria-labelledby="recommended-tab">
                    <ul>
                        
                    </ul>
                    <Card className="text-center" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"/assets/bookcover/" + item.book_cover_photo + ".jpg"} />
                    <Card.Body>
                        <Card.Title>{item.book_title}</Card.Title>
                        <Card.Text>
                            {item.author_name}
                        </Card.Text>
                        <Card.Text>
                            {item.book_price}
                        </Card.Text>
                        <Button variant="primary">{item.book_price}</Button>
                    </Card.Body>
                </Card>
                </div>
                
            )
        })
    }
    return (
        <>
            {renderListItem(list)}
        </>
    )
}
