import React from 'react'
import './Signup.css'

const Signup = () => {


  return (
    <div className="root">
    <div className="container2">
    <h1>Sign Up</h1>
      <p className="lead">
        Sign Up with your email address.
      </p>
      <form className="formGroup" method="POST" action='/api/signup'>
        {/* in order for react to read my inputs they must be in self closing tags */}
        <input className="input"  name="email" placeholder="Email" />
        <input className="input"  name="password" placeholder="Password" />
        <button className="button">Sign me up</button>
      </form>
      </div>
    </div>
  )
}

export default Signup;
