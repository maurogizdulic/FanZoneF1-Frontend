import axios from 'axios';
import React, { useState } from 'react';
import '../componentsLogIn/login.css';
import LogInForm from '../componentsLogIn/loginForm';
import { removeUserSession, setUserSession } from '../util/common';

function LogIn() {
    const [error, setError] = useState("");
    const [status, setStatus] = useState({status: ""});

    const Login = details => {
        console.log(details);
        const token = Buffer.from(details.username + ':' + details.password, 'utf8').toString('base64');
        console.log(token);
        axios.post("http://localhost:8080/user/login", {}, { headers: { 'Authorization': "Basic " + token } })
            .then(res => {
                console.log(res);
                setStatus({status: res.status});
                if (res.status != 200){
                    setError(res.data.message);
                    Logout();
                }
                else {
                    setUserSession(token);
                    console.log(status);
                }
                console.log("local token: " + localStorage.getItem("token"));
            }
            ).catch( err =>{
                setStatus({status: err.response.status});
                setError({error : err.response.data.message});
            }
            )
    }


    const Logout = () => {
        removeUserSession();
        setStatus({status:""})
    }
    
    return (
        <div className='login'>
            {(status.status == 200) ? (
                window.location.replace("/latest")
            ) : (<LogInForm Login={Login} error={error.error} />)}
        </div>
    )
}

export default LogIn;
