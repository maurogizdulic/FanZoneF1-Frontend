import { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { getToken } from "../util/common";
import "../componentsDashboard/dashboard-style.css";

function DeleteForm({Delete, error}){//Form
    const [email, setEmail] = useState({email: ""});

    const deleteHandler = e => {
        e.preventDefault();
        Delete(email);
    }

    return (
    <div>
        <form onSubmit={deleteHandler}>
            <div className='form-inner'>
                <div className="form-group">
                    <h2>Delete your account:</h2>
                </div>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                <div className="form-group">
                    <label>Insert your email:</label>
                    <input type="email" onChange={e => setEmail({...email, email: e.target.value})}/>
                </div>
                <input type="submit"  value="Delete account" className="btnUpd" />
            </div>
        </form>
    </div> 
    
    );
}

export default DeleteForm;