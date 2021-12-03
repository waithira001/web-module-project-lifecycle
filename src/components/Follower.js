import React from 'react';

class Follower extends React.Component {
    render() {
        const { follower } = this.props;
        
        return(
            <div>
                <div className="follower">
                    <img src={follower.avatar_url} />
                    <a target="_blank" href={follower.html_url}><p>{follower.login}</p></a>
                </div>
            </div>
        )
    }
}

export default Follower;