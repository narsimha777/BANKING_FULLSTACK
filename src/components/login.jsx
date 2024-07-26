import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, signup }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 style={{cursor: "default"}}>Login</h2>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <button onClick={()=>onLogin(username, password)}>Login</button>
        <p className="signuphdr" onClick={()=>signup(true)}>Create new account ?</p>
      </div>
    </div>
  );
};

export default Login;
