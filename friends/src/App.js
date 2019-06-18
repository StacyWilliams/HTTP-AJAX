import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    console.log("inside CDM");
    // fetch('http://localhost:5000/friends')
    //   .then(res => res.json())
    //   .then(friends => console.log("fetch completed");)
    //   .catch(err => console.log(err));
    // console.log("below fetch");
  }

  render () {
  return (
    <div>
      <form className="friend-form">
        <input 
        className="friend-form-name"
        placeholder="name"
        value={this.state.name}
        name="age"
        />

        <input 
        className="friend-form-age"
        placeholder="age"
        value={this.state.age}
        name="age"
        />
        
        <input 
        className="friend-form-email"
        placeholder="email"
        value={this.state.email}
        name="age"
        />
        <button className="btn">Add Friend</button>
      </form>       
    </div>
  );
}
}
export default App;
