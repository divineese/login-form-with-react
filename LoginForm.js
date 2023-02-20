import React, { useState } from "react";
import "./LoginForm.css"



const LoginForm = () => {

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(()=> showPopup("hide"), 3000)
  }
  
    return (
          <div className="cover">
    <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xW3e9tPJ6ozOGLOi3oALFX7FnQdfubTUrA&usqp=CAU" />
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            
            <div className="login-btn" onClick={popup}>login</div>

            <div className={popupStyle}>
              <h3>welcom back</h3>
              <p>student or lecture?</p>
              <input type="text" placeholder="student or lecture" />
              <div className="login-btn" onClick={popup}>login</div>
            </div>

          

          </div>

    )
}
export default LoginForm