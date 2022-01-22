import { Component, useState } from "react";
import { useAlert } from 'react-alert';
import "../componentsDashboard/dashboard-style.css";

function UpdateForm({Update}){
    const [details, setDetails] = useState({email:"", password:"", confirmPassword:""});
    const alert = useAlert();

    const updateHandler = e =>{
        e.preventDefault();
        if(details.confirmPassword != details.password || details.password===""){
            alert.show("Passwords don't match", 
            {
                onClose: () =>{
                    setDetails({...details, password:"", confirmPassword:""});
                }
            });
        }else{
            Update(details);
        }
    };

    return ( 
        <div className="mb-3">
            <form onSubmit={updateHandler}>
                <div className='form-inner'>
                    <div className="form-group">
                        <h2>Update your account:</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Insert your email:</label>
                        <input id="email" type="email" onChange={e => setDetails({...details, email: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Insert new password</label>
                        <input id="password" type="password"  value={details.password} onChange={e => setDetails({...details, password: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cnfrmpw">Confirm new password</label>
                        <input id="cnfrmpw" type="password" value={details.confirmPassword} onChange={e => setDetails({...details, confirmPassword: e.target.value})}/>
                    </div>
                        <input type="submit"  value="Update account" className="btnUpd" />
                </div>
            </form>
        </div> 
    );
}

export default UpdateForm;