import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        const { followers } = this.props;
        
        return(
            <div id="followers">
                {followers.map(follower => {
                    return(<Follower follower={follower} />)
                })}
            </div>
        );
    }
}

export default FollowerList;