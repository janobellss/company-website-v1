import React from 'react';

import TeamMembers from '../TeamMembers/TeamMembers';

const SiteContents = () => {
    return(
        <div className='site-contents'>
            <div className='site-course'>
                <div className='site-course__container container'>
                    <div className='site-course__image'></div>
                    <div className='site-course__contents'>
                        <h1 className='copy--center copy--black headline site-course__headline'>Brunch shabby chic occupy scenester</h1>
                        <p className='copy--center copy--gray site-course__description'>Raw denim 8-bit stumptown fam activated charcoal taiyaki vice tofu knausgaard bespoke freegan tattooed. Before they sold out readymade ennui microdosing, normcore synth banjo kogi food truck woke master cleanse snackwave.</p>
                        <a href='#' className='btn btn--small site-course__cta'>Browse Courses</a>
                    </div>
                </div>
            </div>

            <div className='site-team'>
                <div className='site-team__image'></div>
                <div className='site-team__container container'>
                    <div className='site-team__contents'>
                        <h1 className='copy--center copy--white headline site-team__headline'>Lorem ipsum dolor amet selvage</h1>
                        <p className='copy--center copy--gray site-team__description'>Gastropub narwhal raw denim, copper mug pok pok schlitz hell of knausgaard snackwave DIY. Pug adaptogen vinyl, letterpress echo park etsy kinfolk neutra cliche raclette mixtape lo-fi post-ironic. Hammock occupy cardigan neutra four dollar toast meh. Typewriter green juice godard, vexillologist franzen authentic prism hashtag offal small batch. Selfies hell of heirloom schlitz. Etsy franzen jean shorts humblebrag master cleanse man bun.</p>
                        <a href='#' className='btn btn--small site-team__cta'>Learn More</a>
                    </div>
                </div>
            </div>

            <TeamMembers />

            <div className='site-promo'>
                <div className='site-promo__container container'>
                    <div className='site-promo__contents'>
                        <h1 className='copy--center copy--white headline site-promo__headline'>Biodiesel mlkshk you probably haven't heard of them godard</h1>
                        <a href='#' className='btn btn--medium site-promo__cta'>Improve Thinking</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SiteContents;