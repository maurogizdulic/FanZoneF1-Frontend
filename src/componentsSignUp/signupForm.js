import React, { useState } from 'react';

function SignUpForm( {Signup, error}){

    const [details, setDetails] = useState({name: "", email: "", birth:"", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Signup(details);
    }

        return (
            <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Sign up</h2>
                <div className="form-group">
                    <label htmlFor="name">Username:</label>
                    <input type="text" required name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" required name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Birth date:</label>
                    <input type="password" required name="birth" id="birth" onChange={e => setDetails({...details, birth: e.target.value})} value={details.birth}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" required name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>

                <input type="submit" value="Sign up"/>
            </div>
        </form>
        );
}

export default SignUpForm;