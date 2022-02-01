import React from 'react';
import '../componentsSchedule/scheduleCard.css';

class ScheduleCard extends React.Component {
    render() { 
        return (<div className="cardSchedule">
        <div className="card_body_sch">
            <div className='cirName_div'>
            <h2 className="card_cirName_sch">{this.props.cirName}</h2>
            </div>
            <div className="details">
            <h3>{this.props.loc}</h3>
            <h3>{this.props.cou}</h3>
            <h3>{this.props.dat}</h3>
            <h3>{this.props.time}</h3>
            </div>
        </div>
    </div>);
    }
}
 
export default ScheduleCard;