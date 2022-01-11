import { Component } from "react";
import { Redirect } from "react-router-dom";
import { getToken } from "../util/common";

function Dashboard(){//Form

    const deleteHandler = () =>{

    };

    return ((getToken()) ? 
    <div>
        <form>
            <div className='form-inner'>
                <h2>Dashboard</h2>
                <div className="form-group">
                    <input type="button"  value="Delete account" className="btn" onClick={() => deleteHandler}/>
                </div>
            </div>
        </form>
    </div> 
    
    : 
    <Redirect to="/login"/>);
}

export default Dashboard;