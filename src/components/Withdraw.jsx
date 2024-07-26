import React from "react";
import { useState } from "react";

const Withdraw=({handleWdfun, setDataW, isLoggedIn, setWd, data})=>{
    const [amount, setAmount]= useState();

    return (
        <div className="login-container">
          {!isLoggedIn&&<p>Please Login</p>}
          {isLoggedIn&&<div className="login-form">
            <h2 className="hdr" onClick={()=>{setWd(false); setDataW("")}}>Withdraw-form</h2>
            <input type="number" value={amount} placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} min={0}/>
            <button onClick={()=>handleWdfun(amount)}>Withdraw</button>
            {data&&<p>{data}</p>}
          </div>}
        </div>
      );
}

export default Withdraw;