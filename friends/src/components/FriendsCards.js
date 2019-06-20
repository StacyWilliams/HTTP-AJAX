import React from 'react'
import '../App.css';
import axios from 'axios';




class FriendsCards extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        friends: props.friends,
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
  
    addFriend = (event) => {
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
        
    
  
    // deleteFriend = id => {
    //   axios
    //     .delete(`http://localhost:5000/friends/${id}`)
    //     .then(res => console.log(res))
    //     .catch(rej => console.log(rej));
    


  render() {
      console.log("state", this.state.friends)
  return (
    <div className = "box1">
      {this.state.friends.map((friend => 
      <div className = "friend">

          <h4>{friend.name}</h4>
          <p> Age: {friend.age}</p>
          <a href = "mailto:">{friend.email}</a>
      
       <div className="icons">
          <button  className=" fa fa-edit ">edit</button>
          <button className="fa fa-times-circle ">delete</button>
       </div>
    </div>
      ))}
    </div>
  )
}
}
export default FriendsCards