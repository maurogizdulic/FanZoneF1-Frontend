import { Component, useState } from "react";
import { useAlert } from 'react-alert';

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
        <div>
            <form onSubmit={updateHandler}>
                <div className='form-inner'>
                    <div className="form-group">
                        <h2>Update your account:</h2>
                    </div>
                    <div className="form-group">
                        <label>Insert your email:</label>
                        <input type="email" onChange={e => setDetails({...details, email: e.target.value})}/>
                        <label>Insert new password</label>
                        <input type="password"  value={details.password} onChange={e => setDetails({...details, password: e.target.value})} />
                        <label>Confirm new password</label>
                        <input type="password" value={details.confirmPassword} onChange={e => setDetails({...details, confirmPassword: e.target.value})}/>
                        <input type="submit"  value="Update account" className="btn" />
                    </div>
                </div>
            </form>
        </div> 
    );
}

export default UpdateForm;