import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { removeUserSession } from '../util/common';

const Logout = () => {
    removeUserSession();
    console.log("REMOVED!!!");
    return(window.location.replace("/latest"));
}
export default Logout;