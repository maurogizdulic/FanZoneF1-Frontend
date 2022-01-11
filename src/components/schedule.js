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
  const [circuitNameList, setCircuitNameList] = useState({circuitNameList: "", keys: [], isAssigned: false});
  const [countryList, setCountryList] = useState({countryList: "", keys: [], isAssigned: false});
  const [localityList, setLocalityList] = useState({localityList: "", keys: [], isAssigned: false});
  const [dateList, setDateList] = useState({dateList: "", keys: [], isAssigned: false});
  const [timeList, setTimeList] = useState({timeList: "", keys: [], isAssigned: false});
  const [raceNameList, setRaceNameList] = useState({raceNameList: "", keys: [], isAssigned: false});
  const [roundList, setRoundList] = useState({roundList: "", keys: [], isAssigned: false});

  
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

    if(season.isUpdated == true && circuitNameList.isAssigned == false)
    {
    let url = 'http://ergast.com/api/f1/' + season.season + '.json';
    let response = axios.get(url)
    .then(res => {

      let races = res.data.MRData.RaceTable.Races;
      let keyArr = [];

      for(let i = 0; i < races.length; i++)
      {
        // Zakomentirane dolje konzonle su put do svih parametara zato jer su u for petlji. Ovdje sam probao dohvatit ali mi vraća prazno tako da treba vidjet 
        // sve ove dolje navedene set-ove
        keyArr[i] = i;
        setCircuitNameList({circuitNameList: res.data.MRData.RaceTable.Races[i].Circuit.circuitName, keys: keyArr, isAssigned: true});
        setCountryList({countryList: res.data.MRData.RaceTable.Races[i].Circuit.Location.country, keys: keyArr, isAssigned: true});
        setLocalityList({localityList: res.data.MRData.RaceTable.Races[i].Circuit.Location.locality, keys: keyArr, isAssigned: true});
        setDateList({dateList: res.data.MRData.RaceTable.Races[i].date, keys: keyArr, isAssigned: true});
        setTimeList({timeList: res.data.MRData.RaceTable.Races[i].time, keys: keyArr, isAssigned: true});
        setRaceNameList({raceNameList: res.data.MRData.RaceTable.Races[i].raceName, keys: keyArr, isAssigned: true});
        setRoundList({roundList: res.data.MRData.RaceTable.Races[i].round, keys: keyArr, isAssigned: true});

        /*
        console.log(res.data.MRData.RaceTable.Races[i].Circuit.circuitName);
        console.log(res.data.MRData.RaceTable.Races[i].Circuit.Location.country);
        console.log(res.data.MRData.RaceTable.Races[i].Circuit.Location.locality);
        console.log(res.data.MRData.RaceTable.Races[i].date);
        console.log(res.data.MRData.RaceTable.Races[i].time);
        console.log( res.data.MRData.RaceTable.Races[i].raceName);
        console.log(res.data.MRData.RaceTable.Races[i].round);
        */
      }
      console.log(countryList);
    })
    }
  }

  return (
    <div >
        <h1>Schedule</h1>
        <Link to="/betting" className="btn btn-primary">Sign up</Link>
        {getSchedule()}
    </div>
  );
  
}
 
export default Schedule;