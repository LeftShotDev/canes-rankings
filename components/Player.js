// import react library
import React from 'react';

export default class Player extends React.Component {
  render() {
    const {
      first, last, rank, gp, from, to,
    } = this.props.details;
    const name = `${first} ${last}`;
    const timeSpan = `${from} ${to}`;
    return (
      <tr>
        <th>{rank}</th>
        <td>{name}</td>
        <td>{gp}</td>
        <td>{timeSpan}</td>
      </tr>
    );
  }
}
