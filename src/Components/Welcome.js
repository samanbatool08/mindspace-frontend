import React, { useState } from 'react';

const Welcome = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Welcome User</h1>

      <form>
        <label>Username: </label>
        <input name="username" value={username} type="text" 
      </form>
    </div>
  )
}

export default Welcome; 