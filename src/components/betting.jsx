import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../componentsBetting/betting.css';
import BettingForm from '../componentsBetting/bettingForm';
import { getToken } from '../util/common';

function Betting() {
  //const [lastRace, setRace] = useState({lastRace:"", lastSeason:""})
  const [voted, setVoted] = useState({ voted: false});
  const [error, setError] = useState({ error: "" });
  const [temp, setTemp] = useState({season: "errorState", race: "errorState"});
  
  useEffect(()=>{
    if(voted ===false && (sessionStorage.getItem("season") == temp.season && sessionStorage.getItem("race") == temp.race)){
      setVoted({voted:true});
    }
  })

  const sendData = season =>{
    setTemp({season: season.season, race: season.race})
  };

  const Bet = (winners, season) => {

    let url = 'http://localhost:8080/vote/' + season.season + '/' + season.race;
    let postData = {
      first: Number(winners.first),
      second: Number(winners.second),
      third: Number(winners.third)
    }
    setTemp({season: season.season, race: season.race});
    console.log(temp.season + " " + temp.race);
    let response = axios.post(url, postData, { headers: { 'Authorization': 'Basic ' + getToken() } })
      .then(res => {
        sessionStorage.setItem("season", season.season);
        sessionStorage.setItem("race", season.race);
        setVoted({ voted: true});
      }).catch(err => {
        if (err.response.status == 403) {
          window.location.replace("/logout");
          console.log(err.response.status);
        }
        if (err.response.status == 400) {
          setError({ error: err.response.data.message });
          console.log(err.response.status);
        }
      });
  }

  return (
    <div>
      {
        (getToken()) ?
          (voted.voted == true) ?
            (<div className='App'>
              <div className='welcome'>
              <h2>You have voted for race {temp.race} of season {temp.season}</h2>
              <Link to="/standings" className="link">{(console.log(sessionStorage.getItem("season") + "==" + temp.season))}Check standings</Link>
            </div></div>)
            :
            (<div className='betting'><BettingForm Bet={Bet} error={error.error} sendData={sendData}/>{(console.log(sessionStorage.getItem("season") + "==" + temp.season))}</div>)
          :
          (<Redirect to="/login" />)
      }
    </div>
  );

}

export default Betting;