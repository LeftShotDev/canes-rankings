// import react library
import React, { Component } from 'react';

// import react-dom since I'm using a script tag on the html file.
import ReactDOM from 'react-dom';

// Creating my Ranking Component with static list of players.
class Rankings extends Component {
  render() {
    return (
      <div>
        <h1>Canes All-Time Rankings</h1>
        <table>
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Games Played</th>
              <th scope="col">Active Years</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Rod Brind’Amour</td>
              <td>694</td>
              <td>2000 to 2010</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Ron Francis</td>
              <td>1186</td>
              <td>1982 to 2004</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Eric Staal</td>
              <td>909</td>
              <td>2004 to 2016</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Glen Wesley</td>
              <td>913</td>
              <td>1995 to 2008</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Jeff O’Neill</td>
              <td>673</td>
              <td>1996 to 2004</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Jeff Skinner</td>
              <td>497</td>
              <td>2011 to Present</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Ray Whitney</td>
              <td>372</td>
              <td>2006 to 2010</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Cam Ward</td>
              <td>625</td>
              <td>2006 to Present</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Erik Cole</td>
              <td>557</td>
              <td>2002 to 2011</td>
            </tr>
            <tr>
              <th>10</th>
              <td>Sami Kapanen</td>
              <td>520</td>
              <td>1996 to 2003</td>
            </tr>
            <tr>
              <th>11</th>
              <td>Arturs Irbe</td>
              <td>309</td>
              <td>1999 to 2004</td>
            </tr>
            <tr>
              <th>12</th>
              <td>Justin Williams</td>
              <td>265</td>
              <td>2004 to 2009</td>
            </tr>
            <tr>
              <th>13</th>
              <td>Tim Gleason</td>
              <td>546</td>
              <td>2007 to 2015</td>
            </tr>
            <tr>
              <th>14</th>
              <td>Cory Stillman</td>
              <td>191</td>
              <td>2006 to 2011</td>
            </tr>
            <tr>
              <th>15</th>
              <td>Tuomo Ruutu</td>
              <td>378</td>
              <td>2008 to 2014</td>
            </tr>
            <tr>
              <th>16</th>
              <td>Matt Cullen</td>
              <td>266</td>
              <td>2006 to 2010</td>
            </tr>
            <tr>
              <th>17</th>
              <td>Bret Hedican</td>
              <td>369</td>
              <td>2002 to 2008</td>
            </tr>
            <tr>
              <th>18</th>
              <td>Joni Pitkanen</td>
              <td>266</td>
              <td>2009 to 2013</td>
            </tr>
            <tr>
              <th>19</th>
              <td>Gary Roberts</td>
              <td>207</td>
              <td>1998 to 2000</td>
            </tr>
            <tr>
              <th>20</th>
              <td>Martin Gelinas</td>
              <td>348</td>
              <td>1998 to 2002</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<Rankings />, document.getElementById('app'));
