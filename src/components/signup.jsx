import React, { useState } from 'react';
import './Login.css';
import { v4 as uuidv4 } from 'uuid';

const Signup = ({ signup }) => {
    const [username, setUsername] = useState();
    const [gmail, setGmail] = useState();
    const [tel, setPhn] = useState();
    const [password, setPassword] = useState();

    const newacc = async()=>{
        const userId = uuidv4()
        await signup(username, password, userId, tel, gmail);
    }
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 style={{cursor: "default"}}>Sign-up</h2>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        <input type='email' value={gmail} onChange={(e)=>setGmail(e.target.value)} placeholder='@gmail.com'/>
        <input type="tel" value={tel} onChange={(e)=>setPhn(e.target.value)} placeholder='phone-number'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <button onClick={newacc}>Sign-up</button>
      </div>
    </div>
  );
};

export default Signup;