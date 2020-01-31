import React from 'react';

const HeroBanner = () => {
    return(
        <div className='site-hero'>
            <div className='site-hero__container container'>
                <div className='site-hero__contents'>
                    <h1 className='copy--center copy--white site-hero__headline'>We Improve Thinking.</h1>
                    <p className='copy--center copy--white site-hero__subheadline'>
                        Pabst four loko farm-to-table pork belly squid pitchfork vape, tacos church-key fixie mustache pour-over YOLO selvage waistcoat.
                    </p>
                    <a href='#' className='btn btn--large site-hero__cta'>Get Started Now</a>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;