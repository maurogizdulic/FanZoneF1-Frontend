import React, { Component, useState } from 'react';
import axios from 'axios';

function BettingForm() {

    // https://ergast.com/api/f1/2020/driverStandings.json

    const [season, setSeason] = useState({season: ""});

    const [race, setRace] = useState({race: ""});

    const [driversLists, setDrivers] = useState({driversLists: ""});

    const getCurrentRaceAndSeason = () => {
        let response = axios.get('http://localhost:8080/vote/currentrace')
        .then(res => {
            setRace({race: res.data.currentRace});
            setSeason({season: res.data.currentSeason});
        })
    }

    const getDrivers = () => {
        getCurrentRaceAndSeason();

        if(!season){

        }
        else{
            let url = 'https://ergast.com/api/f1/' + season +'/driverStandings.json'
            let response = axios.get(url)
            .then(res => {

                console.log(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName);
            })

        }
    };


    return ( 
        <div id="bettingForm" onLoad={getDrivers()}>
            
            <form>
                <h2>Pick your winners!</h2>
                <label>First: </label>
                <select>
                    <option></option>
                </select>

                <label>Second: </label>
                <select>
                    <option></option>
                </select>

                <label>Third: </label>
                <select>
                    <option></option>
                </select>
            </form>
        </div>
     );
}

export default BettingForm;