import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Link} from "react-router-dom";
  
/*const Schedule = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Schedule</h1>
    </div>
  );
};
  
export default Schedule;*/

function Schedule(){
  //http://ergast.com/api/f1/2012 -> link za gettanje schedulea.
  const [season, setSeason] = useState({season: "", race:"", isUpdated: false});
  
  useEffect(() => {
    if(season.isUpdated == false){
        let response = axios.get('http://localhost:8080/vote/currentrace')
        .then(res => {
            setSeason({season: res.data.currentSeason, race: res.data.currentRace, isUpdated: true});
        })
    }
  });

   

  return (
    <div>
        <h1>Schedule</h1>
        <Link to="/betting" className="btn btn-primary">Sign up</Link>
    </div>
  );
  
}
 
export default Schedule;