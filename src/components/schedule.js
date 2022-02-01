import axios from 'axios';
import { React, useEffect, useState } from 'react';
import '../componentsSchedule/schedule.css';
import ScheduleCard from '../componentsSchedule/scheduleCard';

function Schedule(){
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

        console.log(namesArr);
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
    <div className="wrapper" onLoad={getSchedule()}>
    {circuits.keys.map((i) => <ScheduleCard key={circuits.keys[i]}
        cirName={circuits.circuitNames[i]}
        loc={circuits.localities[i]}
        cou={circuits.countries[i]}
        dat={circuits.dates[i]}
        time={circuits.times[i]}
         />
    )}
    </div>
  );
  
}
 
export default Schedule;