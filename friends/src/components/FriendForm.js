import React from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state= {
        friends: [],
        name: "",
        age: "",
        email: "",
        id: ""
        
      };
    }

   handleChanges = event => {
        this.setState ({
          [event.target.name]: event.target.value
        })
      }
    
      addFriend = (event) =>{
        event.preventDefault();
        const newFriend = {
           name: this.state.name,
           age: this.state.age,
           email: this.state.email
        };
        axios
       .post('http://localhost:5000/friends', newFriend)
       .then(response => {
          console.log(response);
           this.setState({
            friends: response.data,
            name: "",
            age: "",
            email: ""
                });
  
    })
    .catch(err => console.log(err));
    }
    
render(){
    return (
        <div>
       <form onSubmit={this.addFriend} className="friend-form">
        <input 
        className="friend-form-name"
        type="text"
        placeholder="name"
        value={this.state.name}
        name="name"
        onChange={this.handleChanges}
        />

        <input 
        className="friend-form-age"
        type="number"
        placeholder="age"
        value={this.state.age}
        name="age"
        onChange={this.handleChanges}
        />
        
        <input 
        className="friend-form-email"
        type="text"
        placeholder="email"
        value={this.state.email}
        name="email"
        onChange={this.handleChanges}
        />
        <input type="submit" value="Add Friend" />
      </form>
      </div> 
    )
}
  }

export default FriendForm