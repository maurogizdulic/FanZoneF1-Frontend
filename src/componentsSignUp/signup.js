//import React, { Component } from 'react';
import '../componentsSignUp/signup.css';
import React, { useState } from 'react';
import SignUpForm from './signupForm';

function SignUp() {
    
      const [user, setUser] = useState({name: "", email: "", password: "", birth: ""});
    
      const Signup = details => {
        console.log(details);

        console.log("Signed up");
        setUser({
            name: details.name,
            email: details.email,
            password: details.password,
            birth: details.birth
        });
        
      }
    
      const Logout = () => {
        setUser({name:"", email:"", password:"", birth:""});
      }
    
    return(
    <div className='App'>
        {
        
        (user.email != "" && user.name != "") ? (
            <div className='welcome'>
                <h2>You're succesfully signed up, <span>{user.name}</span></h2>
                <button onClick={Logout}>Logout</button>
            </div>
        ) : (<SignUpForm Signup={Signup}/>)}
    </div>
    )
}

export default SignUp;
