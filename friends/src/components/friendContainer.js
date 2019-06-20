import React from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom';
import FriendsCards from './FriendsCards';
import FriendForm from './FriendForm';
import '../App.css';


class FriendContainer extends React.Component {
  constructor() {
    super();
    this.state= {
      friends: [],
      name: "",
      age: "",
      email: "",
      id: ""
      
    };
    
  }

  
  render() {
    console.log("friend container", this.state.friends)
  return (
    
    <div className='App'>
      <div >
      <FriendsCards friends={this.state.friends} />
      </div>
      <FriendForm friends={this.state.friends}/>      
    </div>
  );
}
};
export default FriendContainer;
