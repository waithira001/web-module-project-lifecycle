import React from 'react';
import axios from 'axios';
import index from './index.css';

import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    currentUser: "waithira001",
    user: {},
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user) {
      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        });
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      currentUser: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      })
  }

  render() {
    return(<div>
      <h1>Github Info</h1>
      <form onSubmit={this.handleSubmit} >
        <input placeholder="Github Handle" onChange={this.handleChange} />
        <button>Search</button>
      </form>

      <User user={this.state.user} />
      <FollowerList followers={this.state.followers} />

    </div>);
  }
}

export default App;
