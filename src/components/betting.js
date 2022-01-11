import React, { Component, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import BettingForm from '../componentsBetting/bettingForm';
import { getToken } from '../util/common';
import '../componentsBetting/betting.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Logout from './logout';

function Betting(){
  //const [lastRace, setRace] = useState({lastRace:"", lastSeason:""})
  const [voted, setVoted] = useState({voted: false});
  const [error, setError] = useState({error: ""});
  
  const Bet = (winners, season) => {

    let url = 'http://localhost:8080/vote/' + season.season + '/' + season.race;
    let postData = { 
      first: Number(winners.first),
      second: Number(winners.second),
      third: Number(winners.third)
    }
    
    let response = axios.post(url, postData, {headers: {'Authorization' : 'Basic ' + getToken()}} )
    .then(res => {
      if(res.data.status == 200){
        setVoted({voted :  true });
      }
      }).catch( err =>{
        if(err.response.status == 403){
          window.location.replace("/logout");
        }
        if(err.response.status == 400){
          setError({error: err.response.data.message});
        }
    });
  }

  return (
    
    (getToken()) ?
      <div className='App'>{ 
        (voted.voted == true) ? 
          (<div className='welcome'>
                <h2>You have voted!</h2>
                <Link to="/standings" className="btn">Check standings</Link>
          </div>)
          :
          (<div className='betting'><BettingForm Bet={Bet} error={error.error}/></div>)
      }</div>
    : 
      (<Redirect to="/login"/>) 
    );
  
}
 
export default Betting;