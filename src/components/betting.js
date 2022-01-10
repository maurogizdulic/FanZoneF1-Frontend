import React, { Component, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import BettingForm from '../componentsBetting/bettingForm';
import { getToken } from '../util/common';
import axios from 'axios';

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


function Betting(){
  
  const Bet = (winners, season) => {
    console.log("AM HERE!");
    console.log(winners.first);
  }
  return (

    (getToken()) ? (<BettingForm Bet={Bet}/> ) : (<Redirect to="/login"/>)
  )
  
}
 
export default Betting;