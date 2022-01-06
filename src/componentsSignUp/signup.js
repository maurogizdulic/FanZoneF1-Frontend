//import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../componentsSignUp/signup.css';
import React, { useState } from 'react';
import SignUpForm from './signupForm';
import axios from 'axios';

function SignUp() {

  const [user, setUser] = useState({ username: "", email: "", password: "", dateOfBirth: "" });
  const [status, setStatus] = useState({status: ""})

  const Signup = details => {
    console.log(details);

    //console.log("Signed up");
    /*setUser({
      username: details.username,
      email: details.email,
      password: details.password,
      dateOfBirth: details.dateOfBirth
    });*/
    console.log(details)
    const postData = {
      username: details.username,
      email: details.email,
      password: details.password,
      dateOfBirth: details.dateOfBirth
    }
    axios.post("http://localhost:8080/user/create", 
      postData,
      {headers: {'Content-Type' : 'application/json'}})
            .then(res => {
                console.log(res.data.message);
                if (res.status != 201)
                    setUser({});
                else {
                    localStorage.setItem("username", details.username);
                    localStorage.setItem("password", details.password);
                    alert("Signed up sucessfully!");
                    /*setUser({
                      username: details.username,
                      email: details.email,
                      password: details.password,
                      dateOfBirth: details.dateOfBirth
                    });*/
                }
                setStatus({status: res.status})
                //console.log(user);
                console.log(res.status)

            }
            )

  }

  const Logout = () => {
    setUser({ username: "", email: "", password: "", dateOfBirth: "" });
  }

  return (
    <div className='App'>
      {
        (status.status == 201) ? (
          <div className='welcome'>
            <h2>You're succesfully signed up! <span>{user.username}</span></h2>
            <Link to="/login" className="btn">Login</Link>
          </div>
        ) : (<SignUpForm Signup={Signup} />)}
    </div>
  )
}

export default SignUp;
