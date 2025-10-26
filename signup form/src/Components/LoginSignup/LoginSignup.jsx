import React from 'react'
import './LoginSignup.css'
import {useState} from 'react'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

  const [action,setAction] = useState("SignUp");

  const handleAction = () => {
    if(action==='Login'){
      setAction('SignUp');
    }else{
      setAction('Login');
    }
  }


  return (
    <div className='container'>
    <div className='header'>
      <div className='text'> {action}</div>
      <div className='underline'></div>
    </div>
      <div className='inputs'>
        {action==='Login' ? null :<div className='input'>
          <img src={user_icon} alt=''></img>
          <input type='text' placeholder='Name'></input> 
        </div>}
        

        <div className='input'>
          <img src={email_icon} alt=''></img>
          <input type='email' placeholder='Email'></input> 
        </div>

        <div className='input'>
          <img src={password_icon} alt=''></img>
          <input type='password' placeholder='Password'></input> 
        </div>
      </div>
      {action==='SignUp'? null :<div className='forgot-password'>Forgot Password ? Click Here</div>}
      <div className='submit-container'>
        <div className={action==='Login' ? 'submit gray':'submit'} onClick={handleAction}>SignUp</div>
        <div className={action==='SignUp'? 'submit gray':'submit'} onClick={handleAction}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
