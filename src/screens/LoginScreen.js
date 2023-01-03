import React from 'react'
import './LoginScreen.css'
const LoginScreen = () => {
  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="loginScreen__logo" />
        <button className='loginScreen__button'>Sign In</button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body"></div>
      </div>
    </div>
  )
}

export default LoginScreen
