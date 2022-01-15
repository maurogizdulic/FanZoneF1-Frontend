import React, { useEffect, useState } from 'react';

function SignUpForm( {Signup, error}){
    const [details, setDetails] = useState({username: "", email: "", dateOfBirth:"", password: ""});

    useEffect(() => {
        validateDate();
    })



    const submitHandler = e => {
        e.preventDefault();
        Signup(details);
    }

    const validateDate = () => {
        if(details.dateOfBirth.length === 2 || details.dateOfBirth.length === 5 || details.dateOfBirth.length === 10){
            setDetails({...details, dateOfBirth: details.dateOfBirth + "."});
        }
        if (details.dateOfBirth) {
            for (var i = 0; i < details.dateOfBirth.length; i++) {
                if(isNaN(details.dateOfBirth[i])){
                    if(details.dateOfBirth[i] !== '.'){
                        setDetails({...details, dateOfBirth: ""});
                    }
                }
            }
            if(details.dateOfBirth.length >= 2){
                if(Number(details.dateOfBirth[0] + details.dateOfBirth[1]) > 31 || Number(details.dateOfBirth[3] + details.dateOfBirth[4]) < 0){
                    setDetails({...details, dateOfBirth: ""})
                }
            }
            if(details.dateOfBirth.length >= 5){
                if(Number(details.dateOfBirth[3] + details.dateOfBirth[4]) > 12 || Number(details.dateOfBirth[3] + details.dateOfBirth[4]) < 0){
                    setDetails({...details, dateOfBirth: ""})
                }
            }
        }

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