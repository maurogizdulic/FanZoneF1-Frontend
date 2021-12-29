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
        getUsername: [''][''],
        getPoints: [''][''],
        key: ['']
    }

    componentDidMount()
    {
        console.log(axios.get('http://localhost:8080/user/standings'));
        let response = axios.get('http://localhost:8080/user/standings')
        .then(res => {
            this.state.getUsername = res.data.map((i) => i.username);
            this.state.getPoints = res.data.map((i) => i.points);
        
            console.log(this.state.getUsername);

            this.state.getPoints[0] = 10; 
            this.state.getPoints[1] = 15; 
            this.state.getPoints[2] = 5; 
            this.state.getPoints[3] = 20; 

            console.log(this.state.getPoints);

            for(var i = 0; i < this.state.getUsername.length; i++)
            {
                this.state.key[i] = i;
            }

            
                this.state.getPoints.sort(function(a, b) {
                    return b - a;
                });

                console.log(this.state.getPoints);
        
        });

        console.log(this.state.key);

        
    }


    render() { 
        return (
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