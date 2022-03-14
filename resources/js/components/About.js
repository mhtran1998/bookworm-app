import React from 'react'
import '../../css/about.css'
function About() {
    return (
        <div>
            <h3>About Us</h3>
            <hr></hr>
            <div className='content'>
                <h2 className='text-center welcome'>Welcome to Bookworm</h2>
                <p className='font-size-1'>"Bookworm is an independent New York bookstore and language school with locations in Manhattan and Brooklyn. We specialize in travel books and language classes."</p>
                <div className="row">
                    <div className="col-md-6">
                        <h6 className='font-size-3'>Our Story</h6>
                        <p className='font-size-1'>The name Bookworm was taken from the original name for New York International Airport, which was rename JFK in December 1963.</p>
                        <p className='font-size-1'>Our Manhattan store has just moved to the West Village. Our new location is 170 7th Avenue South, at the corner of Perry Street.</p>
                        <p className='font-size-1'>From March 2008 through May 2016, the store was located in the Flatiron District.</p>
                    </div>
                    <div className="col-md-6">
                        <h6 className='font-size-3'>Our Vision</h6>
                        <p className='font-size-1'>One of the last travel bookstore in the country, our Manhattan store carries a range of guidebooks (all 10% off) to suit the needs and tasted of every traveler and budget.</p>
                        <p className='font-size-1'>We believe that a novel or travelogue can be just as valuable a key to a place as any guidebook, and our well-read, well-traveled staff is happy to make reading recommendations for any traveler, book lover, or gift giver.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About