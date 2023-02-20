import React, { useState } from 'react';

const LogIn = (props) => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  // console.log(props)

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  
  const submitForm = (e) => {
    e.preventDefault(); 

    console.log(username)
    console.log(email)
  }

  return (
    <div>
      <h2>Log In</h2>

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

export default LogIn; 