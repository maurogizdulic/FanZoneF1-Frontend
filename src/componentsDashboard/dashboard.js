import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { useAlert } from 'react-alert';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import { Redirect } from "react-router-dom";
import Logout from "../components/logout";
import "../componentsDashboard/dashboard-style.css";
import { getToken, removeUserSession } from "../util/common";
import DeleteForm from "./deleteForm";
import UpdateForm from "./updateForm";

function Dashboard(){
    const alert = useAlert();
    const [error, setError] = useState({error: ""});
    const [key, setKey] = useState('update')

    const Delete = (email) =>{
        let postData = {
            email: email.email
        }
        console.log(postData);
        let token = getToken();
        axios.defaults.headers.common['Authorization'] = token;
        axios.post(
            "http://localhost:8080/user/delete",
            postData,
            { 
                headers: { Authorization : `Basic ${token}` },
            }
        )
        .then( res => {
            console.log(res);
            if(res.status == 200){
                alert.show("You have succesfully deleted your account", 
                    {
                        type: 'success',
                        onClose: () => {
                            Logout();
                        }
                    }
                );
                removeUserSession();
            }
        }).catch(err => {
            
            if(err.response.status == 403){
                Logout();
            }
            console.log(err.response);
            if(err.response.status == 400){
                console.log(err.response);
                setError({error: "Wrong email."});
            }
        })
        console.log(email);
    };

    const Update = details =>{
        let postData = {
            email: details.email,
            newPassword: details.password,
            confirmNewPassword: details.confirmPassword
        }
        console.log(postData)
        let token = getToken();
        axios.defaults.headers.common['Authorization'] = token;
        axios.put(
            "http://localhost:8080/user/update",
            postData,
            { headers: { Authorization : `Basic ${token}` },}
        )
        .then(res =>{
            if(res.status==200){
                alert.show("You have sucessfully updated your account!",
                {
                    onClose: () =>{
                        removeUserSession();
                        window.location.replace("/login");
                    }
                });
            }
        }).catch(err=>{
            if(err.response.status==403){
                Logout();
            }
            console.log(err.response);
        })
    }

    return ((getToken()) ?
    <div className="betting">
        <Tabs
            activeKey={key} 
            onSelect={k => setKey(k)}
            id="controlled-tab"
            className="mb-3 myClass"
        > 
            <Tab eventKey='update' label="Update account"><UpdateForm Update={Update}/></Tab>
            <Tab eventKey='delete' label="Delete account"><DeleteForm Delete={Delete} error={error.error}/></Tab>    
        </Tabs>
    </div>
    : 
    <Redirect to="/login"/>);
}

export default Dashboard;