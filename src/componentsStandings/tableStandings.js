import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import SearchBar from "material-ui-search-bar";
import React, { useEffect, useState } from 'react';
import '../componentsStandings/tableStandings.css';


function TableStandings() {

    const [users, setUsers] = useState({ usersList: [], isLoaded: false, keysList: [], rowList: [], rowKeys: [] })
    const [searched, setSearched] = useState("");

    useEffect(() => {
        if (users.isLoaded == false) {
            console.log(axios.get('http://localhost:8080/user/standings'));
            let response = axios.get('http://localhost:8080/user/standings')
                .then(res => {
                    let usernameList = res.data.map((i) => i.username);
                    let pointsList = res.data.map((i) => i.points);
                    let positionList = [];

                    console.log("ALOOO  " + usernameList + " " + pointsList);

                    for (var i = 0; i < usernameList.length; i++) {
                        positionList[i] = i;
                    }

                    var listUsers = [];
                    for (var i = 0; i < usernameList.length; i++) {
                        const temp = {
                            user: usernameList[i],
                            points: pointsList[i],
                            position: positionList[i]
                        }
                        listUsers[i] = temp;
                    }
                    setUsers({ usersList: listUsers, isLoaded: true, keysList: positionList, rowList: listUsers, rowKeys: positionList });
                });
        }      
    });

    const requestSearch = (searchedVal) => {
        var filteredRows = [];
        var counter = 0;
        var counterList = [];
        for (var i = 0; i < users.usersList.length; i++) {
            if (users.usersList[i].user.toLowerCase().includes(searchedVal.toLowerCase())) {
                filteredRows.push(users.usersList[i]);
                counterList.push(counter);
                counter++;
            }
        }
        setUsers({...users, rowList: filteredRows, rowKeys: counterList});
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    return !users.isLoaded ?
        ( 
            <div id="tableStandings">
                <Paper>
                    <SearchBar />
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Position</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Points</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        )
        :
        (
            <div id="tableStandings">
                <Paper>
                    <SearchBar
                        value={searched}
                        onChange={(searchedVal) => requestSearch(searchedVal)}
                        onCancelSearch={() => cancelSearch()}
                    />
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Position</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Points</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.rowKeys.map((row) => (
                                    <TableRow key={users.rowKeys[row]}>
                                        <TableCell align="left">{users.rowList[row].position}</TableCell>
                                        <TableCell align="left">{users.rowList[row].user}</TableCell>
                                        <TableCell align="left">{users.rowList[row].points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        );
}

export default TableStandings;