import React from "react";
// import { useState } from "react";
import './Login.css';

const CheckBalance=({balance, getDetails, setDataCB, isLoggedIn, setCB, data})=>{

    const name = localStorage.getItem('name');
    const userId = localStorage.getItem('id');

    return (
        <div className="login-container">
          {!isLoggedIn&&<p>Please Login</p>}
          {isLoggedIn&&<div className="login-form">
            <h2 className="hdr" onClick={()=>{setCB(false); setDataCB("")}}>Balance</h2>
            <p>Name: {name}</p>
            <p>UserID: {userId}</p>
            {balance&&<p>Balance: {balance}</p>}
            <button onClick={getDetails}>get_Details</button>
            {data&&<p>{data}</p>}
          </div>}
        </div>
      );
}

export default CheckBalance