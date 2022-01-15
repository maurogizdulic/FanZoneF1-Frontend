import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Betting from '../components/betting';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

function BettingForm({ Bet, error, voted }) {

    // https://ergast.com/api/f1/2020/drivers.json

    const [driversList, setDrivers] = useState({ driversList: "", keys: [], isAssigned: false });
    const [season, setSeason] = useState({ season: "", race: "", isUpdated: false });
    const [winners, setWinners] = useState({ first: "", second: "", third: "" });

    useEffect(() => {
        if (season.isUpdated == false) {
            let response = axios.get('http://localhost:8080/vote/currentrace')
                .then(res => {
                    setSeason({ season: res.data.currentSeason, race: res.data.currentRace, isUpdated: true });
                })
        }

        if(winners.first !== "" && winners.second !== "" && winners.third !== "")
        {
            let element = (<input name="btnSubmit" type="submit" className='btn' value="Vote" />);
            ReactDOM.render(element, document.getElementById("submitDiv"));
        }
    });

    const getDrivers = () => {
        if (season.isUpdated == true && driversList.isAssigned == false) {
            let url = 'https://ergast.com/api/f1/' + season.season + '/drivers.json';
            console.log(url);
            let response = axios.get(url)
                .then(res => {
                    let drivers = res.data.MRData.DriverTable.Drivers;
                    let keyArr = [];
                    for (let i = 0; i < drivers.length; i++) {
                        keyArr[i] = i;
                    }
                    setDrivers({ driversList: drivers, keys: keyArr, isAssigned: true });
                    console.log(driversList);
                }).catch(err => {
                    console.log(err.response.data);
                    setDrivers({ driversList: "", isAssigned: false });
                })
        }
    };

    const submitHandler = event => {
        event.preventDefault();
        console.log(winners);
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
                        <select onChange={e => setWinners({ ...winners, first: e.target.value })}>
                            <option value="" disabled selected> {"Select Driver"} </option> {driversList.keys.map((i) => <option key={driversList.keys[i]} value={driversList.driversList[i].permanentNumber}>{driversList.driversList[i].permanentNumber} {driversList.driversList[i].familyName}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='second'>Second: </label>
                        <select onChange={e => setWinners({ ...winners, second: e.target.value })}>
                            <option value="" disabled selected> {"Select Driver"} </option> {driversList.keys.map((i) => <option key={driversList.keys[i]} value={driversList.driversList[i].permanentNumber}>{driversList.driversList[i].permanentNumber} {driversList.driversList[i].familyName}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor='third'>Third: </label>
                        <select onChange={e => setWinners({ ...winners, third: e.target.value })}>
                            <option value="" disabled selected> {"Select Driver"} </option> {driversList.keys.map((i) => <option key={driversList.keys[i]} value={driversList.driversList[i].permanentNumber}>{driversList.driversList[i].permanentNumber} {driversList.driversList[i].familyName}</option>)}
                        </select>
                    </div>
                    <div id="submitDiv">
                        <input name="btnSubmit" type="hidden" className='btn' value="Vote"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BettingForm;