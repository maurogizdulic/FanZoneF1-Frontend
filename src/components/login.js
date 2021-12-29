//import React, { Component } from 'react';
import '../componentsLogIn/login.css';
import React, { useState } from 'react';
import LogInForm from '../componentsLogIn/loginForm';
import axios from 'axios';

function LogIn() {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        const token = Buffer.from(details.username + ':' + details.password, 'utf8').toString('base64');
        console.log(token);
        axios.post("http://localhost:8080/user/login", {}, { headers: { 'Authorization': "Basic " + token } })
            .then(res => {
                console.log(res);
                if (res.status != 200)
                    setUser({});
                else {
                    localStorage.setItem("username", details.username);
                    localStorage.setItem("password", details.password);
                }
            }
            )
    }


    const Logout = () => {
        setUser({ username: "", password: "" });
    }

    return (
        <div className='login'>
            {(user.email != "") ? (
                <form>
                    <div className='form-inner'>
                        <h2>Welcome, <span>{localStorage.getItem("username")}</span></h2>
                        <input type="button" value="Logout" onClick={Logout} />
                    </div>
                </form>
            ) : (<LogInForm Login={Login} error={error} />)}
        </div>
    )
}

export default LogIn;
