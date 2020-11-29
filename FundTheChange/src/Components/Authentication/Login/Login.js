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

  const handleSubmit = (e) => {
    console.log(form)
    e.preventDefault()
    fetch('/login', {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then(res => window.location.href = '/moodJournal')
  }
  return (
    // react fragment: creates an empty element 
    <>
      <form action='/login' method="POST" className="form-container">
        <input className="" onChange={handleChange} value={form.email} placeholder="Email" name="email" />
        <input className="" onChange={handleChange} value={form.password} placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login; 