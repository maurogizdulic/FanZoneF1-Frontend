import React from 'react';
import TableStandings from '../componentsStandings/tableStandings';
 /* 
const Standings = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Standings</h1>
    </div>
  );
};
  
export default Standings;*/

class Standings extends React.Component {
  render() { 
    return (
      <div>
          <TableStandings />
    </div>
    );
  }
}
 
export default Standings;