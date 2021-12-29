import React, { useState } from 'react';
import SignUp from '../componentsSignUp/signup';
import SignUpForm from '../componentsSignUp/signupForm';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from "react-router-dom";


function LogInForm({ Login, error }) {

    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Log in</h2>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" required name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" required name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" required name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="Log in" />
                <input type="button" value="Sign up" onClick={() => openSignUp("./signup")} />
            </div>
        </form>
    )
}

const openSignUp = (url) => {
    const newWindow = window.open(url);
}

export default LogInForm;

/*
<Link to="/signup" className="btn btn-primary">Sign up</Link>
 <input type="text" className="username" id="username" placeholder='Username' required/>
                <input type="password" className='password' id='password' placeholder='Password' required/>
                <button onClick={() => {history.push('/profile')}}> Log in </button>
                <p>Don't have an account? Sign up</p>
*/