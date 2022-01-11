import React from 'react';
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Link} from "react-router-dom";
  
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

class Schedule extends React.Component {
  //http://ergast.com/api/f1/2012 -> link za gettanje schedulea.

  render() { 

    return (
      <div>
      <h1>Schedule</h1>
      <Link to="/betting" className="btn btn-primary">Sign up</Link>
    </div>
    );
  }
}
 
export default Schedule;