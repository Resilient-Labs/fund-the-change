import React, { useState } from 'react'
import "./Login.css"

const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prevState => {
      if (name === "email") {
        return {
          email: value,
          password: prevState.password
        }
      } else {
        return {
          email: prevState.email,
          password: value
        }
      }
    })
  }

  return (
    // react fragment: creates an empty element
    <div className="root">
    <div className="container2">
    <h1>Login</h1>
      <p className="lead">
        Log in with your  email address.
      </p>
      <form  className="formGroup form-container" action='/api/login' method="POST" >

        <input className="input" onChange={handleChange} value={form.email} placeholder="Email" name="email" />
        <input className="input" onChange={handleChange} value={form.password} placeholder="Password" name="password" />
        <button className="button" type="submit">Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login;
