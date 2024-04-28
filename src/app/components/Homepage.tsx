import React from 'react'
import "./homepage.css"

const Homepage = () => {
  return (
    <> 
    
<div className='main'>
<div className="blur-bg-overlay "></div>
<div className="form-popup">
    <span className="close-btn material-symbols-rounded">close</span>
    <div className="form-box login">
        <div className="form-details">
        </div>
        <div className="form-content">
            <h2>LOGIN</h2>
            <form action="login.html">
            <a href="#" target="_blank">Welcome to our website</a>
                <div className="input-field">
                    <input type="text" required/>
                    <label>Email</label>
                </div>
                <div className="input-field">
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <a href="#" className="forgot-pass-link">Forgot password?</a>
                <button type="submit">Log In</button>
            </form>
            <div className="bottom-link">
                Don't have an account?
                <a href="#" id="signup-link">Signup</a>
            </div>
        </div>
    </div>
    <div className="form-box signup">
        <div className="form-details">
            <h2>Create Account</h2>
            <p>To become a part of our community, please sign up using your personal information.</p>
        </div>
        <div className="form-content">
            <h2>SIGNUP</h2>
            <form action="login.html">
                <div className="input-field">
                    <input type="Name" required/>
                    <label>Enter your Name</label>
                </div>
                <div className="input-field">
                    <input type="Mobile no." required/>
                    <label>Enter your mobile number</label>
                </div>
                <div className="input-field">
                    <input type="text" required/>
                    <label>Enter your email</label>
                </div>
                <div className="input-field">
                    <input type="password" required/>
                    <label>Create password</label>
                </div>
                <div className="policy-text">
                    <input type="checkbox" id="policy"/>
                    <label >
                        I agree the
                        <a href="#" className="option">Terms & Conditions</a>
                    </label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <div className="bottom-link">
                Already have an account? 
                <a href="/login" id="login-link">Login</a>
            </div>
        </div>
    </div>
</div>
</div>
</>
  )
}

export default Homepage