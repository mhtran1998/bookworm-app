import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OnSale from '../js/components/OnSale'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Fragment } from 'react'
import '../css/home.css'
import Feature from '../js/components/Feature'
import { Link } from 'react-router-dom'
function Home() {
    const [state, setState] = useState({
        listBookOnSale: [],
        listBookFeature: [],
        curFeature: 'recommended'
    })

    useEffect(async () => {
        const getDataOnSale = await axios.get('/api/onSale');
        const getDataRecommended = await axios.get('api/recommended');
        setState({ ...state, listBookFeature: getDataRecommended.data, curFeature: 'recommended', listBookOnSale: getDataOnSale.data });
    }, [])
    const changeFeature = async (type) => {
        if (type === 'recommended') {
            const getDataChange = await axios.get('/api/recommended');
            setState({ ...state, listBookFeature: getDataChange.data, curFeature: 'recommended' });
            return;
        }
        if (type === 'popular') {
            const getDataChange = await axios.get('/api/popular');
            setState({ ...state, listBookFeature: getDataChange.data, curFeature: ' popular' });
            return;
        }
    }

    return (

        <Fragment>
            <div className='on-sale'>
                <h4>On Sale
                   <Link to="/shop">
                   <Button variant="outline-primary" className='btnViewAll'>View All</Button>
                   </Link>
                </h4>
                <OnSale list={state.listBookOnSale} />
            </div>
            <div className='text-center'>
                <h1>
                    Feature Book
                </h1>
                <ButtonGroup>
                    <Button variant="primary" onClick={() => changeFeature('recommended')}>Recommended</Button>
                    <Button variant="primary" onClick={() => changeFeature('popular')}>Popular</Button>
                </ButtonGroup>
            </div>
            <Feature list={state.listBookFeature} />
        </Fragment>

    )
}

export default Home