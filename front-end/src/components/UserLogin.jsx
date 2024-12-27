import React, { useState } from 'react'
import {FaReact} from 'react-icons/fa6'
import '../style.css'
import _ from 'lodash'
import chatpic from '../assets/chatpic.webp';

const UserLogin = ({setUser}) => {
    const [userName, setUserName] = useState()
    const handleUser = () => {
        if(!userName) return;
        localStorage.setItem('user', userName)
        setUser(userName)
        localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1,1000)}/200/300`)
    }
  return (
    <div className='login_container'>     
        <div className='login_title'>
            <FaReact className='login_icon'/>
            <h1 style={{textAlign:"center", fontFamily:"monospace", fontWeight:"bolder" ,fontSize:"3em", marginBottom:"15px"}}>Chat Express</h1>
        </div>
        <div className='user_login_page'>
        <div>
        <img src={chatpic} />
        </div>
        <div className='login_form'>
            <p style={{color:"#075e54", fontSize:"2em", padding:"0.5em ", fontFamily:"sans-serif", fontWeight:"bold"}}>Username</p>
            <input type="text" placeholder='Enter a Unique Name'
            onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={handleUser}>Login</button>
        </div>
        </div>
       
    </div>
  )
}

export default UserLogin