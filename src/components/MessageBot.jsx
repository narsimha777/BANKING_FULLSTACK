import React, { useEffect } from "react";
import { useState } from "react";
import './Login.css';

const MessageBot=({ isLoggedIn, getReply, reply, tocounter, setReply, transfer, withdraw, deposit, checkbalance, msgBlock })=>{

    const [message, setMessage] = useState("");

    useEffect(()=>{
      if(reply==='tocounter'){
        tocounter(false);
        msgBlock(false);
      }else if(reply==='transfer'){
        transfer(true);
        msgBlock(false)
      }else if(reply==='withdraw'){
        withdraw(true);
        msgBlock(false);
      }else if(reply==='deposit'){
        deposit(true);
        msgBlock(false);
      }else if(reply==='checkbalance'){
        checkbalance(true);
        msgBlock(false);
      }else if(reply==='irrevelant'){
        setReply('I could only assist u with something related to banking!!')
      }
    }, [getReply])

    return (
        <div className="login-container">
          {!isLoggedIn&&<p>Please Login</p>}
          {isLoggedIn&&<div className="login-form">
            <h3 className="hdr" onClick={()=>msgBlock(false)}>Message 💬</h3>
            <h5 className="hr" onClick={()=>alert('If something irrevelant happend please try another way this might be due to lack of data')}>Note: </h5>
            <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={()=>{getReply(message);}}>Send</button>
            {reply && <p>{reply}</p>}
          </div>}
        </div>
      );
}

export default MessageBot
