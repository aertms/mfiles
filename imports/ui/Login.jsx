import React, { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submit(event) {
    event.preventDefault();
    Meteor.loginWithPassword(username, password);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
