import React from 'react';
import Cards from '../componentsLatest/cards';
/*
const Latest = () => {
    return (
        <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
        <h1>Latest</h1>
    </div>
    )
}

export default Latest;*/
class Latest extends React.Component {
  render() { 
    return (
    <div>
      <Cards />
    </div>);
  }
}
 
export default Latest;