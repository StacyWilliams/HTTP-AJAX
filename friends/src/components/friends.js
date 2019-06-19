import React from 'react'
import '../App.css';



const Friends = (props) => {
    console.log(props)
  return (
    <div className = "box1">
      {props.friends.map((friend => 
      <div className = "friend">

          <h4>{friend.name}</h4>
          <p> Age: {friend.age}</p>
          <p>{friend.email}</p>

      </div>
      ))}
    </div>
  )
}
export default Friends