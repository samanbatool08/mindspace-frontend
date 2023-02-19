import React, { useState } from 'react';

const Welcome = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div>
      <h1>Welcome User</h1>

      <form>
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