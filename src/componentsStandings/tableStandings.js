import axios from 'axios';
import React, { Component } from 'react';
import '../componentsStandings/tableStandings.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class TableStandings extends React.Component {

    state = {
        getUsername: [''],
        getPoints: [''],
        key: [''],
        isLoaded: false
    }

    componentWillMount() {
        console.log(axios.get('http://localhost:8080/user/standings'));
        let response = axios.get('http://localhost:8080/user/standings')
            .then(res => {
                this.state.getUsername = res.data.map((i) => i.username);
                this.state.getPoints = res.data.map((i) => i.points);

                console.log(this.state.getUsername);

                console.log(this.state.getPoints);

                for (var i = 0; i < this.state.getUsername.length; i++) {
                    this.state.key[i] = i;
                }

                if (this.state.getUsername.length > 0)
                    this.state.isLoaded = true;
                console.log("Uspjeh!!");
                this.forceUpdate();
            });

        console.log(this.state.key);
    }


    render() {
        return !this.state.isLoaded ?
            (
                <div id="tableStandings">
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
                </div>
            )
            :
            (
                <div id="tableStandings">
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
                                {this.state.key.map((row) => (
                                    <TableRow key={this.state.key[row]}>
                                        <TableCell align="left">{this.state.key[row] + 1}</TableCell>
                                        <TableCell align="left">{this.state.getUsername[row]}</TableCell>
                                        <TableCell align="left">{this.state.getPoints[row]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            );
    }
}

export default TableStandings;

/*
  <table>
                    <tr>
                        <th>Position</th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>

                </table>
*/