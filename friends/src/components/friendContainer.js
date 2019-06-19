import React from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom';
import Friends from './friends'
import '../App.css';

class FriendContainer extends React.Component {
  constructor() {
    super();
    this.state= {
      friends: [],
      name: "",
      age: "",
      email: "",
      formInput: ""
    };
    
  }

  componentDidMount() {
    console.log("inside CDM");
      axios
      .get('http://localhost:5000/friends')
      .then(response => {
         this.setState(() => ({
           friends: response.data
 }));
     console.log("response.data friendsform", response.data)
 })
     .catch(err => console.log(err));
      console.log("below the fetch");
  }

  handleChanges = event => {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  addFriend = (event) => {
    event.preventDefault();
    const newFriend = {
       name: this.state.name,
       age: this.state.age,
       email: this.state.email
    };
    this.setState({
      friends: [...this.state.friends, newFriend]
    })
    
    axios
     .post('http://localhost:5000/friends', newFriend)
     .then(response => {
        console.log(response);
         this.setState({
          addFriend: response.data.newFriend,
    });
  })
  .catch(err => console.log(err));
  }
      

  submitItem = e => {
    this.setState({ formInput: "" });
      this.props.addFriend(e, this.state.formInput);
  }
  render() {
  return (
    
    <div className='App'>
      <div >
      <Friends friends={this.state.friends} />
      </div>
      <form onSubmit={this.addFriend} className="friend-form">
        <input 
        className="friend-form-name"
        type="text"
        placeholder="name"
        value={this.state.name}
        name="formInput"
        onChange={this.handleChanges}
        />

        <input 
        className="friend-form-age"
        type="number"
        placeholder="age"
        value={this.state.age}
        name="formInput"
        onChange={this.handleChanges}
        />
        
        <input 
        className="friend-form-email"
        type="text"
        placeholder="email"
        value={this.state.email}
        name="formInput"
        onChange={this.handleChanges}
        />
        <input type="submit" value="Add Friend" />
      </form>       
    </div>
  );
}
};
export default FriendContainer;
