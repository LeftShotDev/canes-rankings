// import react library
import React from 'react';

class Player extends React.Component {
  render() {
    const {
 first, last, rank, gp, from, to 
} = this.props.details;
    return (
      <tr>
        <th> {rank}</th>
        <td>
          {' '}
          {first} {last}
        </td>{' '}
        <td> {gp}</td>
        <td>
          {' '}
          {from} - {to}
        </td>
      </tr>
    );
  }
}

export default Player;
