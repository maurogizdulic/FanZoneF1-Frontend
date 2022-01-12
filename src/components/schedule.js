import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Link} from "react-router-dom";
import { KeyboardArrowDown } from '@material-ui/icons';
  
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
  const [circuits, setCircuits] = useState({circuitNames: [], localities: [], countries: [], dates: [] , times: [], keys: [], isAssigned: false})

  
  useEffect(() => {
    if(season.isUpdated == false){
        let response = axios.get('http://localhost:8080/vote/currentrace')
        .then(res => {
            setSeason({season: res.data.currentSeason, race: res.data.currentRace, isUpdated: true});
            console.log(res.data.currentSeason);
        })
    }
  });

  const getSchedule = () => {

    if(season.isUpdated == true && circuits.isAssigned == false)
    {
    let url = 'http://ergast.com/api/f1/' + season.season + '.json';
    let response = axios.get(url)
    .then(res => {
      if(res.status == 200){
        let namesArr = res.data.MRData.RaceTable.Races.map((i) => i.Circuit.circuitName);
        let localitiesArr = res.data.MRData.RaceTable.Races.map((i) => i.Circuit.Location.locality);
        let countriesArr = res.data.MRData.RaceTable.Races.map((i) => i.Circuit.Location.country);
        let datesArr = res.data.MRData.RaceTable.Races.map((i) => i.date);
        let timesArr = res.data.MRData.RaceTable.Races.map((i) => i.time);
        let keyArr = [];
        for(let i = 0; i < namesArr.length; i++){
          keyArr[i] = i;
        }
        setCircuits({
          circuitNames: namesArr,
          localities: localitiesArr,
          countries: countriesArr,
          dates: datesArr,
          times: timesArr,
          keys: keyArr,
          isAssigned: true
        });
      }
    })
    }
  }

  return (
    <div onLoad={getSchedule()}>
        <h1>Schedule</h1>
        {console.log(circuits.circuitNames)}
        <Link to="/betting" className="btn btn-primary">Sign up</Link>
    </div>
  );
  
}
 
export default Schedule;