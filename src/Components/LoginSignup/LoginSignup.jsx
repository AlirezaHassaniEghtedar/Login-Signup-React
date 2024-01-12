import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  const[status , setStatus] = useState("Sign Up");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{status}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs-container">
        {status === "Login"? <div></div> : <div className="input">
          <i class="fa-solid fa-user"></i>
          <input type="text" placeholder='Username'/>
        </div>}
        <div className="input">
          <i class="fa-solid fa-envelope"></i>
          <input type="text" placeholder='Email'/>
        </div>
        <div className="input">
        <i class="fa-solid fa-lock"></i>
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {status === "Login" ? <div></div> : <div className="forgot-password"><p>Lost Password? &nbsp;<span>Click Here!</span></p></div>}
      <div className="submit-btns">
        <div className={status === "Sign Up"? "submit" : "submit gray"} onClick={() => setStatus("Sign Up")}>Sign Up</div>
        <div className={status === "Login"? "submit" : "submit gray"} onClick={() => setStatus("Login")}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup