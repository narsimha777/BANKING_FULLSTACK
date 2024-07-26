import { Canvas } from '@react-three/fiber';
import './App.css';
import { Suspense, useEffect, useState } from 'react';
import Model from './components/Bank_m';
import { OrbitControls, Text} from '@react-three/drei'; 
import Login from './components/login';
import Signup from './components/signup';
import Employee from './components/employee';
import Transfer from './components/Transfer';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import CheckBalance from './components/Check_Balance';
import MessageBot from './components/MessageBot';
import { checkBalancereq, depositreq, login, logout, msgBotreq, register, transferreq, withdrawReq } from './utils/requests';

function AtoP(angle){
  return (Math.PI/180)*angle;
}

function App() {
  const [istalk, setIsTalk] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTrFun, setTrFun ] = useState(false);
  const [isDpFun, setDpFun] = useState(false);
  const [isWdFun, setWd ] =useState(false);
  const [isCBFun, setCB ] = useState(false);
  const [istrans, setIsTrans] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [hoveredt, setHoveredt] = useState(false);
  const [hoveredc, setHoveredc] = useState(false);
  const [hoveredl, setHoveredl] = useState(false);
  const [hoveredtc, setHoveredtc] = useState(false);
  const [hoveredd, setHoveredd] = useState(false);
  const [hoveredw, setHoveredw] = useState(false);
  const [hoveredtr, setHoveredtr] = useState(false);
  const [hoveredcb, setHoveredcb] = useState(false);
  const [talk, setTalk] = useState(false);
  const [ balance, setBalance ] = useState();
  const [dataCB, setDataCB] = useState("");
  const [dataTR, setDataTR] = useState("");
  const [dataW, setDataW] = useState("");
  const [dataD, setDataD] = useState("");
  const [reply, setReply] = useState();
  
  const userId = localStorage.getItem('id')
  const token = localStorage.getItem('token')
  const name = localStorage.getItem('name');
  
  const handleLogin = async(username, password) => {
    await login(username, password, setIsLoggedIn);
  };
  
  const signup = async(username, password, userId, tel, gmail) => {
    await register(username, password, userId, tel, gmail, setIsLoggedIn, setIsSignup);
  }

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('logged');
    setIsLoggedIn(loggedInStatus === 'true');
  }, [handleLogin, signup]);

  return (
    <div className='bank'>
      <Canvas>
        <Suspense fallback={null}>
          <group >
            <Model logged={isLoggedIn} talk={istalk} trans={istrans} AtoP={AtoP} scale={[0.006, 0.006, 0.006]} position={[0, 0, 0]} rotation={[AtoP(20), AtoP(-90), 0]} />
            {(isLoggedIn && !isSignup && !istrans &&! istalk)&&<mesh>
              <Text color="#333" position={[0.8, 4.5, -4]} scale={[0.3, 0.3, 0.3]} rotation={[AtoP(30), AtoP(0), 0]} >🏦WELCOME {name.toLocaleUpperCase()}</Text>
              <Text onClick={()=>{setIsTrans(!istrans);}} color={hoveredt?"#cfd217":"black"} scale={hoveredt ? [0.3, 0.3, 0.3] : [0.2, 0.2, 0.2]}  position={[0, 1.8, -2.6]} onPointerOver={() => {setHoveredt(true)}} onPointerOut={()=>{setHoveredt(false);}}>TRANSACTIONS</Text>
              <Text onClick={()=>setIsTalk(!istalk)} color={hoveredc?"blue":"black"} scale={hoveredc ? [0.3, 0.3, 0.3] : [0.2, 0.2, 0.2]}  position={[0.9, 1.5, -3]} onPointerOver={() => {setHoveredc(true)}} onPointerOut={()=>{setHoveredc(false);}}>TALK TO BOT</Text>
              <Text onClick={()=>logout(setIsLoggedIn, setBalance, setReply)} color={hoveredl?"red":"black"} scale={hoveredl ? [0.3, 0.3, 0.3] : [0.2, 0.2, 0.2]}  position={[-0.8, 1.5, -3]} onPointerOver={() => {setHoveredl(true)}} onPointerOut={()=>{setHoveredl(false);}}>LOG OUT</Text>
            </mesh>}
            {(istrans&&!istalk)&&<mesh>
              <Text onClick={()=>{setIsTrans(!istrans);}} color={hoveredtc?"black":"white"} position={[-2,4,-3.5]} scale={hoveredtc?[0.35, 0.35, 0.35]:[0.3, 0.3, 0.3]} onPointerOver={() => {setHoveredtc(true);}} onPointerOut={()=>{setHoveredtc(false);}} >To-Counter</Text>
              <Text onClick={()=>setDpFun(!isDpFun)} position={[1.3,3.5,-3.5]} color={hoveredd?"green":"white"} scale={hoveredd?[0.35, 0.35, 0.35]:[0.3, 0.3, 0.3]} onPointerOver={()=>{setHoveredd(true);}} onPointerOut={()=>{setHoveredd(false);}}>Deposit</Text>
              <Text onClick={()=>setWd(!isWdFun)} position={[2.5,3,-3.5]} color={hoveredw?"red":"white"} scale={hoveredw?[0.35, 0.35, 0.35]:[0.3, 0.3, 0.3]} onPointerOver={()=>{setHoveredw(true);}} onPointerOut={()=>{setHoveredw(false);}} >Withdraw</Text>
              <Text onClick={()=>setTrFun(!isTrFun)} position={[0,3,-3.5]} color={hoveredtr?"orange":"white"} scale={hoveredtr?[0.35, 0.35, 0.35]:[0.3, 0.3, 0.3]} onPointerOver={()=>{setHoveredtr(true);}} onPointerOut={()=>{setHoveredtr(false);}} >Transfer</Text>
              <Text onClick={()=>setCB(!isCBFun)} position={[3.5,3.5,-3.5]} color={hoveredcb?"blue":"white"} scale={hoveredcb?[0.35, 0.35, 0.35]:[0.3, 0.3, 0.3]} onPointerOver={()=>{setHoveredcb(true);}} onPointerOut={()=>{setHoveredcb(false);}} >Check-Balance</Text>
              </mesh>}
            {istalk&&<mesh>
              <Text onClick={()=>setIsTalk(!istalk)} color={hoveredtc?"black":"white"} position={[-2,4,-3.5]} scale={hoveredtc?[0.35, 0.35, 0.35]:[0.3, 0.3, 0.3]} onPointerOver={() => {setHoveredtc(true);}} onPointerOut={()=>{setHoveredtc(false);}} >To-Counter</Text>
              <Employee rotation={[AtoP(30), AtoP(0), 0]} position={[0, 0.5, -0.5]} onClick={()=>{setReply(); setTalk(!talk);}}/>
              </mesh>}
          </group>
          <ambientLight />
        </Suspense>
        {/* <OrbitControls/> */}
        <OrbitControls enableZoom={false} maxPolarAngle={AtoP(90)} minPolarAngle={AtoP(90)} maxAzimuthAngle={AtoP(60)} minAzimuthAngle={AtoP(-60)} />
      </Canvas>
      {(!isLoggedIn && !isSignup) && <Login onLogin={handleLogin} signup={setIsSignup} />}
      {isSignup && <Signup signup={signup} />}
      {isTrFun && <Transfer isLoggedIn={isLoggedIn} setDataTR={setDataTR} data={dataTR} setTrFun={setTrFun} setIsTransfer={async(to, amount)=>{await transferreq(name, to, amount, setDataTR, token);}}/>}
      {isDpFun &&<Deposit isLoggedIn={isLoggedIn} setDataD={setDataD} data={dataD} setDpFun={setDpFun} handleDpFun={async(amount)=>{await depositreq(userId, amount, setDataD, token);}}/>}
      {isWdFun &&<Withdraw isLoggedIn={isLoggedIn} setDataW={setDataW} data={dataW} setWd={setWd} handleWdfun={async(amount)=>{await withdrawReq(userId, amount, setDataW, token);}}/>}
      {isCBFun &&<CheckBalance isLoggedIn={isLoggedIn} setDataCB={setDataCB} data={dataCB} setCB={setCB} balance={balance} getDetails={async()=>{await checkBalancereq(userId, setBalance, setDataCB, token);}}/>}
      {talk && <MessageBot isLoggedIn={isLoggedIn} withdraw={setWd} setReply={setReply} checkbalance={setCB} deposit={setDpFun} transfer={setTrFun} msgBlock={setTalk} tocounter={setIsTalk}  getReply={async(msg)=>{await msgBotreq(msg, setReply, token);}} setTalk={setTalk} reply={reply}/>}
    </div>
  );
}

export default App;


