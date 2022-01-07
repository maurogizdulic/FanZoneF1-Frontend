//import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../componentsSignUp/signup.css';
import React, { useState } from 'react';
import SignUpForm from './signupForm';
import axios from 'axios';

function SignUp() {
  const [error, setError] = useState({error: ""});
  const [status, setStatus] = useState({status: ""});

  const Signup = details => {
    console.log(details)
    const postData = {
      username: details.username,
      email: details.email,
      password: details.password,
      dateOfBirth: details.dateOfBirth
    }
    axios.post("http://localhost:8080/user/create", 
      postData,
      {headers: {'Content-Type' : 'application/json'}}
    )
    .then(res => {
            setStatus({status: res.status})
            console.log(res.status)
          })
    .catch( err => {
              setError({error: err.response.data.message});
            }
          )

  }

  return (
    <div className='App'>
      {
        (status.status == 201) ? (
          <div className='welcome'>
            <h2>You're succesfully signed up!</h2>
            <Link to="/login" className="btn">Login</Link>
          </div>
        ) : (<SignUpForm Signup={Signup} error={error.error}/>)}
    </div>
  )
}

export default SignUp;
