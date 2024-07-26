import React, { useState } from "react";
import './Login.css'

const Transfer = ({ isLoggedIn, setDataTR, setIsTransfer, setTrFun, data }) => {

    const [ amount, setAmount ] = useState();
    // const [ from, setFrom ] = useState();
    const [ to, setTo ] = useState();
    
    const handleTransfer=async(to, amount)=>{
        await setIsTransfer(to, amount);
    }

    return (
      <div className="login-container">
        {!isLoggedIn&&<p>Please Login</p>}
        {isLoggedIn&&<div className="login-form">
          <h2 className="hdr" onClick={()=>{setTrFun(false); setDataTR("")}}>Transfer-form</h2>
          {/* <input type="text" value={from} placeholder="from-Username" onChange={(e)=>setFrom(e.target.value)} /> */}
          <input type="text" value={to} placeholder="to-Username" onChange={(e)=>setTo(e.target.value)}/>
          <input type="number" value={amount} placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} min={0}/>
          <button onClick={()=>handleTransfer(to, amount)}>Transfer</button>
          {data&&<p>{data}</p>}
        </div>}
      </div>
    );
  };
  
  export default Transfer;