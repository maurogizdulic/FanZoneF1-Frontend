import axios from "axios";
import { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { getToken, removeUserSession } from "../util/common";
import DeleteForm from "./deleteForm";
import { useAlert } from 'react-alert';
import Logout from "../components/logout";

function Dashboard(){//Form
    const [status, setStatus]  = useState({status: ""});
    const alert = useAlert();

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
            { headers: { Authorization : `Basic ${token}` },   } )
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
            console.log(err.response);
            if(err.response.status == 400){
                console.log(err.response);
            }
        })
        console.log(email);
    };

    return ((getToken()) ?
    <div>
        <DeleteForm Delete={Delete}/>
    </div> 
    : 
    <Redirect to="/login"/>);
}

export default Dashboard;