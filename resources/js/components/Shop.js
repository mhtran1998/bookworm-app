import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WidgetCategory from './WidgetCategory';
import WidgetAuthor from './WidgetAuthor';
import Book from './Book';
import '../../css/shop.css'
import { Row, Col } from 'react-bootstrap';
function Shop() {
    const [state, setState] = useState({
        listCategory: [],
        listAuthor: [],
        listBookByOnSale: []
    })
    useEffect(async () => {
        const getDataCategory = await axios.get('/api/widgetCategory');
        const getDataAuthor = await axios.get('/api/widgetAuthor');
        const getDataBookByOnSale = await axios.get('/api/sortByOnSale');
        setState({ ...state, listCategory: getDataCategory.data, listAuthor: getDataAuthor.data, listBookByOnSale: getDataBookByOnSale.data });
    })
    return (
        <div className='widget-area'>
            Books (Filtered by Category #1)
            <hr></hr>
            <Row>
                <Col md={2}>
                    <h4>Filter By</h4>
                    <div id='widgetAccordion'>
                        <div id='category' className='widget-head'>
                            <h5>Category</h5>
                            <ul>
                                <WidgetCategory list={state.listCategory} />
                            </ul>
                        </div>
                        <div id='author' className='widget-head'>
                            <h5>Author</h5>
                            <ul>
                                <WidgetAuthor list={state.listAuthor} />
                            </ul>
                        </div>
                        <div id='rating-review' className='widget-head'>
                            <h5>Rating Review</h5>
                            <ul>
                                <li className='style-list'>1 Star</li>
                                <li className='style-list'>2 Star</li>
                                <li className='style-list'>3 Star</li>
                                <li className='style-list'>4 Star</li>
                                <li className='style-list'>5 Star</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md={10}>
                    <div>
                        <span>Showing 1-12 of 126 books</span>
                        <select className='ordering'>
                            <option>Sort by on sale</option>
                            <option>Sort by on popularity</option>
                            <option>Sort by on price: low to high</option>
                            <option>Sort by on price: high to low</option>
                        </select>
                        <select className='number-of-item'>
                            <option>Show 5</option>
                            <option>Show 15</option>
                            <option selected="selected">Show 20</option>
                            <option>Show 25</option>
                        </select>
                    </div>
                        <Book list={state.listBookByOnSale} />
                </Col>
            </Row>
        </div>
    )
}

export default Shop