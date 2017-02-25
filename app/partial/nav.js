import React from 'react';
import {
    Link,
    browserHistory
} from 'react-router';
import Profile from '../config/profile.json';

export default React.createClass({

	getInitialState() {
		return {
      activePage: browserHistory.getCurrentLocation().pathname
    };
	},

	componentDidMount() {
    browserHistory.listen((ev) => {
			this.setState({
				activePage: ev.pathname
			})
		});
	},
	render() {
    var ap = this.state.activePage;
		return (
      <nav>
        <ul>
          {
    				Profile.nav.map(
    					function(value, key) {
    						return (
    							<li key={value.key} className={
    								function() {
    									if((ap.indexOf(value.key) !== -1 && value.key !== '/') || (ap == '/' && value.key == ap)) {
    										return (
    											'active'
    										)
    									}
    									return '';
    								}()
    							}><Link to={value.key}>{value.title}</Link></li>
    						);
    					}
    				)
    			}
        </ul>
      </nav>
		)
	}
});
