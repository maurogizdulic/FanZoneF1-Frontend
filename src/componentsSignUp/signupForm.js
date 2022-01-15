import React, { useEffect, useState } from 'react';

function SignUpForm( {Signup, error}){
    const [details, setDetails] = useState({username: "", email: "", dateOfBirth:"", password: ""});

    useEffect(() => {
        if(details.dateOfBirth.length === 2 || details.dateOfBirth.length === 5 || details.dateOfBirth.length === 10){
            setDetails({...details, dateOfBirth: details.dateOfBirth + "."});
        }
    })

    const submitHandler = e => {
        e.preventDefault();
        Signup(details);
    }

        return (
            <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Sign up</h2>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" required name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" required name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>

                <div className="form-group">
                    <label htmlFor="dateOfBirth">Birth date(dd.mm.yyyy.):</label>
                    <input type="text" value={details.dateOfBirth} required name="dateOfBirth" id="dateOfBirth" onChange={e => setDetails({...details, dateOfBirth: e.target.value})} value={details.dateOfBirth}/>
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