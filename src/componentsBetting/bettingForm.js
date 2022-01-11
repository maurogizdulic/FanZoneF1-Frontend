import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Betting from '../components/betting';
import {Link} from 'react-router-dom';

function BettingForm({Bet, error}) {

    // https://ergast.com/api/f1/2020/drivers.json

    const [driversList, setDrivers] = useState({driversList: "", keys: [], isAssigned: false});
    const [season, setSeason] = useState({season: "", race:"", isUpdated: false});
    const [winners, setWinners] = useState({first: "", second: "", third: "" });
    
    useEffect(() => {
        if(season.isUpdated == false){
            let response = axios.get('http://localhost:8080/vote/currentrace')
            .then(res => {
                setSeason({season: res.data.currentSeason, race: res.data.currentRace, isUpdated: true});
            })
        }
    });


    const getDrivers = () => {
        console.log(season.season);
        if(season.isUpdated == true && driversList.isAssigned == false){
            let url = 'https://ergast.com/api/f1/' + season.season +'/drivers.json';
            console.log(url);
            let response = axios.get(url)
            .then(res => {
                let drivers = res.data.MRData.DriverTable.Drivers;
                let keyArr = [];
                for(let i=0; i<drivers.length; i++){
                    keyArr[i] = i;
                }
                setDrivers({driversList : drivers, keys: keyArr,isAssigned: true});
                console.log(driversList);
            }).catch(err =>{
                console.log(err.response.data);
                setDrivers({driversList:"", isAssigned:false});
            })
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        Bet(winners, season);
    }

    return (
        <div id="bettingForm" onLoad={getDrivers()}>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Pick your winners!</h2>
                    {(error != "") ? (<div className='error'>{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor='first'>First: </label>
                        <select onChange={e => setWinners({...winners, first: e.target.value})}>
                        {driversList.keys.map((i) => <option key={driversList.keys[i]} value={driversList.driversList[i].permanentNumber}>{driversList.driversList[i].permanentNumber} {driversList.driversList[i].familyName}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='second'>Second: </label>
                        <select onChange={e => setWinners({...winners, second: e.target.value})}>
                        {driversList.keys.map((i) => <option key={driversList.keys[i]} value={driversList.driversList[i].permanentNumber}>{driversList.driversList[i].permanentNumber} {driversList.driversList[i].familyName}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor='third'>Third: </label>
                        <select onChange={e => setWinners({...winners, third: e.target.value})}>
                        {driversList.keys.map((i) => <option key={driversList.keys[i]} value={driversList.driversList[i].permanentNumber}>{driversList.driversList[i].permanentNumber} {driversList.driversList[i].familyName}</option>)}
                        </select>
                    </div>
                    <input type="submit" className='btn' value="Vote"/>
                </div>
            </form>
        </div>
     );
}

export default BettingForm;