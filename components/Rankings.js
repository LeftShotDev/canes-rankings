// import react library
import React, { Component } from 'react';
import players from '../data/players.js';
import Player from './Player';

// Creating my Ranking Component with static list of players.
export default class Rankings extends Component {
  render() {
    return (
      <div className="player-rankings">
        <h1>{this.props.header}</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>GP</th>
              <th>Years</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(players).map(key => (
              <Player key={`player-${key}`} details={players[key]} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
