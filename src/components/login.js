//import React, { Component } from 'react';
import '../componentsLogIn/login.css';
import React, { useState } from 'react';
import LogInForm from '../componentsLogIn/loginForm';

function LogIn() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
      }
    
      const [user, setUser] = useState({name: "", email: ""});
      const [error, setError] = useState("");
    
      const Login = details => {
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password)
        {
            console.log("Loged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }
        else
        {
            setError("Details do not match!");
            console.log("Details do not match!");
        }
      }
    
      const Logout = () => {
        setUser({name:"", email:""});
      }
    
    return(
    <div className='login'>
        {(user.email != "") ? (
            <div className='welcome'>
                <h2>Welcome, <span>{user.name}</span></h2>
                <button onClick={Logout}>Logout</button>
            </div>
        ) : (<LogInForm Login={Login} error={error} />)}
    </div>
    )
}

export default LogIn;
