import React from 'react';

const Members = (props) => {

    const memberStyle = {
        backgroundImage: `url(${props.item.imgUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '250px'
    }
    
    return(
        <div className='site-team-members__member'>
            <div className='site-team-members__member-image' style={memberStyle}></div>
            <div className='copy--center copy--black site-team-members__member-name'>
                {props.item.memberName}
            </div>
            <div className='copy--center copy--gray site-team-members__member-position'>
                {props.item.memberPosition}
            </div>
        </div>
    );
}

export default Members;