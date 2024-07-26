const BASE_URL = "https://bankserver-proj.onrender.com";

const login = async(username, password, setLogged)=>{
    try{
        const result = await fetch(`https://bankserver-proj.onrender.com/login`,
        {method:"POST", 
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({username: username, password: password}),
            credentials:"include"
        });
        if(result.ok){
            const responseData = await result.json();
            // sessionStorage.setItem("sessionId", responseData.sessionId)
            console.log(responseData);
            if(responseData.user.user_name){
                // setName(responseData.user.user_name);
                // setid(responseData.user.user_id);
                localStorage.setItem('token', responseData.token);
                localStorage.setItem('id', responseData.user.user_id);
                localStorage.setItem('name', responseData.user.user_name);
                localStorage.setItem('logged', true);
            }
            setLogged(true)
        }else{
            console.log("Wrong password!");
        }
    }catch(e){
        console.log(e);
    }
};

const signup = async (username, password, user_id, phone_number, gmail, setLogged, setSignup) => {
    // try {
        const result = await fetch(`https://bankserver-proj.onrender.com/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Specify JSON content type
            },
            credentials:"include",
            body: JSON.stringify({ // Convert object to JSON string
                user_name: username,
                password: password,
                user_id: user_id,
                phone_number: phone_number,
                gmail: gmail
            })
        });
        if(result.ok){
            const responseData = await result.json();
            // setName(responseData.user.user_name);
            console.log(responseData);
            localStorage.setItem('token', responseData.token);
            localStorage.setItem('name', responseData.user.user_name);
            localStorage.setItem('id', responseData.user.user_id);
            setSignup(false)
            setLogged(true)
            localStorage.setItem('logged', true);
        }
    // } catch (e) {
    //     console.log(e);
    // }
};

const logout = async(setLogged, setBalance, setReply)=>{
    try{
        const result = fetch('https://bankserver-proj.onrender.com/logout', {
            method: "POST",
            credentials:"include"
        });
        if(result){
            setLogged(false);
            setBalance();
            setReply();
            localStorage.removeItem('token');
            localStorage.setItem('logged', false);
            console.log("logged out");
        }
    }catch(e){
        console.log(e);
    }
}

const depositreq = async(user_id, amount, setData, token)=>{
    try{
        const result = await fetch('https://bankserver-proj.onrender.com/deposit', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({
                type: "d",
                user_id: user_id,
                amount: amount
            }),
        });
        const d = await result.json(); 
        setData(d.message);
        return;
    }catch(e){
        console.log(e);
    }
}

const checkBalancereq = async(user_id, setBalance, setData, token)=>{
    try{
        const result = await fetch(`https://bankserver-proj.onrender.com/checkbalance/${user_id}`, {
            method: "GET",
            headers:{Authorization:token},
            credentials: "include"
        });
        if(!result.ok){
            const d = await result.json();
            setData(d.message);
            return;
        }
        const bal = await result.json();
        // console.log(bal);
        setBalance(bal.amount_avail);
    }catch(e){
        console.log(e);
    }
}

const transferreq = async(from, to, amount, setData, token)=>{
    try{
        const result = await fetch('https://bankserver-proj.onrender.com/transfer', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({
                type: 't',
                f: from,
                t: to,
                amount: amount
            }),
        });
        const d = await result.json();
        setData(d.message);
    }catch(e){
        console.log(e);
    }
}

const withdrawReq = async(user_id, amount, setData, token)=>{
    try{
        const result = await fetch('https://bankserver-proj.onrender.com/withdraw', {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                Authorization: token
            },
            body: JSON.stringify({
                type: "w",
                user_id: user_id,
                amount: amount
            }),
            credentials: "include"
        });
        const d = await result.json();
        setData(d.message);
    }catch(e){
        console.log(e);
    }
}

const msgBotreq = async(msg, setReply, token)=>{
    try{
        const result = await fetch(`https://bankserver-proj.onrender.com/bot/${msg}`, {
            method: "GET",
            headers:{Authorization:token},
            credentials: "include"
        });
        const d = await result.json();
        setReply(d.message);
    }catch(e){
        console.log(e);
    }
}

const register = async(username, password, user_id, phone_number, gmail, setLogged, setSignup)=>{
    await signup(username, password, String(user_id), phone_number, gmail, setLogged, setSignup);
    console.log("register called")
}

module.exports = {
    login: login,
    register: register,
    logout: logout,
    depositreq: depositreq,
    checkBalancereq: checkBalancereq,
    transferreq: transferreq,
    withdrawReq: withdrawReq,
    msgBotreq: msgBotreq
}
