import React from "react";
import { useState } from "react";

const Deposit=({handleDpFun, setDataD, isLoggedIn, setDpFun, data})=>{
    const [amount, setAmount]= useState();

    return (
        <div className="login-container">
          {!isLoggedIn&&<p>Please Login</p>}
          {isLoggedIn&&<div className="login-form">
            <h2 className="hdr" onClick={()=>{setDpFun(false); setDataD("")}}>Deposit-form</h2>
            <input type="number" value={amount} placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} min={0}/>
            <button onClick={()=>handleDpFun(amount)}>Deposit</button>
            {data &&<p>{data}</p>}
          </div>}
        </div>
      );
}

export default Deposit;