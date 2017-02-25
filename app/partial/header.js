import React from 'react';
import Nav from 'partial/nav.js';
import Profile from '../config/profile.json';

export default React.createClass({

	getInitialState() {
		return {};
	},

	componentDidMount() {
	},
	render() {
		return (
      <header>
        <div className="intro">
          <h1>{Profile.name}</h1>
          <h2><strong>{Profile.role}</strong></h2>
  			</div>
        <Nav />
      </header>
		)
	}
});
