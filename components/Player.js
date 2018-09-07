// import react library
import React, { Component } from "react";

export default class Player extends Component {
  render() {
    const {
      first,
      last,
      rank: { year2017 },
      gp,
      from,
      to
    } = this.props.details;
    return (
      <tr>
        <th>{rank.year2017}</th>
        <td>{`${first} ${last}`}</td>
        <td>{gp}</td>
        <td>{`${from} ${to}`}</td>
      </tr>
    );
  }
}
