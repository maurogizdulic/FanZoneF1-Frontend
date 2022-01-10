import React from 'react';
import { Redirect } from 'react-router-dom';
import BettingForm from '../componentsBetting/bettingForm';
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
      (getToken()) ? (<BettingForm/>) : (<Redirect to="/login"/>)
    )
  }
}
 
export default Betting;