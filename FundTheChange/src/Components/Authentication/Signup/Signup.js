import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {

  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  })
  // handleContactChange is responsible for accessing the value that the user types into the inputs
  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactInfo(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })

  }

  // const handleSubmit = (e) => {
  //   console.log(contactInfo)
  //   e.preventDefault()
  //   fetch('/Signup', {
  //     method: "Post",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(contactInfo)
  //   })

  // }
  return (
    <>
      <form method="POST" action='/signup'>
        {/* in order for react to read my inputs they must be in self closing tags */}
        <input onChange={handleContactChange} name="firstName" placeholder="First Name" />
        <input onChange={handleContactChange} name="lastName" placeholder="Last Name" />
        <input onChange={handleContactChange} name="email" placeholder="Email" />
        <input onChange={handleContactChange} name="password" placeholder="Password" />
        <input onChange={handleContactChange} name="phone" placeholder="Phone Number" />
        <button>Sign me up</button>
      </form>
    </>
  )
}

export default Signup;