import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../css/card.css"
import "../../css/onsale.css"
import { Autoplay, Pagination, Navigation } from "swiper";
import { Button, Card } from "react-bootstrap";



export default function OnSale({ list }) {


    const renderListItem = (list = []) => {
        return list.map((item) => {
            let book_cover_photo = item.book_cover_photo ? item.book_cover_photo : "book1";
            return (
                <SwiperSlide>
                    <Card className="text-center" style={{ width: '18rem' }}>
                        <Card.Img className="card-img" variant="top" src={"/assets/bookcover/" + book_cover_photo + ".jpg"} />
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
                </SwiperSlide>
            )
        })
    }
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {renderListItem(list)}

            </Swiper>
        </>
    );
}