import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
     result = await result.json()
      if(result.name)
      {
      
      }

      else
      {
        alert("user not found")
      }
    console.log("result of api",result);
  };

  return (
    <div className="login">
      <h1> This ih the Login page</h1>
      <input
        type="email"
        className="inputBox"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="inputBox"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" className="signupbtn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
