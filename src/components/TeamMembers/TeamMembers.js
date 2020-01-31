import React, { Component } from 'react';

import Members from './Members';
import teamMembersData from '../../datas/teamMembersData';

class TeamMembers extends Component {
    state = {
        teamMembersData: teamMembersData
    }

    render() {
        const membersComp = this.state.teamMembersData.map((item) => 
            <Members 
                key={item.id}
                item={item}
            />
        );

        return(
            <div className='site-team-members'>
                <div className='site-team-members__container container'>
                    <div className='site-team-members__contents'>
                        <h1 className='copy--center copy--black headline site-team-members__headline'>Lorem ipsum dolor amet coloring</h1>
                        <p className='copy--center copy--gray site-team-members__description'>Taiyaki cliche cray, salvia man bun semiotics mixtape bushwick actually thundercats austin letterpress.</p>
                        <div className='site-team-members__members'>
                            {membersComp}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamMembers;