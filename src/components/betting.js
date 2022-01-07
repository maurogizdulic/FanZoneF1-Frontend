import React from 'react';
import { Redirect } from 'react-router-dom';
import { getToken } from '../util/common';

/*const Betting = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Betting</h1>
    </div>
  );
};*/

class Betting extends React.Component {
  render() { 
    return (
      (getToken()) ? (<div><h2>Logiran si!</h2></div>) : (<Redirect to="/login"/>)
    )
  }
}
 
export default Betting;