import React, { useState } from 'react';
import axios from 'axios';

const Welcome = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    const userData = {
      username, 
      email
    }

  //   fetch('http://localhost:3000/signup', {
  //     // mode: 'no-cors',
  //     method: 'POST', 
  //     headers: { 'content-type': 'application/json', 
  //                 accepts: 'application/json' },
  //     body: JSON.stringify(userData)
  //   })
  //   .then(resp => resp.json())
  //   .then(newUser => console.log(newUser))

  axios.post('http://localhost:3000/signup', userData)
  .then(function (response) {
    console.log(response.data)
  })
  // TODO resetting form but look into refactor later
  setUsername("")
  setEmail("")
}


  return (
    <div>
      <h1>Welcome User</h1>

      <form onSubmit={submitForm}>
        <label>Username: </label>
        <input name="username" value={username} type="text" onChange={handleUsernameChange}></input>

        <label>Email: </label>
        <input name="email" value={email} type="text" onChange={handleEmailChange}></input>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default Welcome; 