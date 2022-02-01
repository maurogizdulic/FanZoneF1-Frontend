import React, { useState } from 'react';


function LogInForm({ Login, error }) {

    const [details, setDetails] = useState({ username: "", password: "" });

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
                    <label htmlFor="username">Username:</label>
                    <input type="text" required name="username" id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" required name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" className='link' value="Log in" />
                <input type="button" className='link' value="Sign up" onClick={() => openSignUp("/signup")} />
            </div>
        </form>
    )
}

const openSignUp = (url) => {
    const newWindow = window.location.replace(url);
}

export default LogInForm;