import React from 'react';
import Profile from '../config/profile.json';

export default React.createClass({

	getInitialState() {
		return {};
	},

	componentDidMount() {
	},
	render() {
		return (
      <footer>
          <div className="grid-container grid-parent">
              <div className="grid-25 call-me clearfix">
                  <div className="lollipop">
										<i className="fa fa-mobile"></i>
									</div>
                  <div className="text">
                    <strong>Call</strong>
                    <p>{Profile.contact.tel}</p>
                  </div>
              </div>
              <div className="grid-25 contact clearfix">
                  <div className="lollipop">
										<i className="fa fa-envelope-o"></i>
									</div>
                  <div className="text">
                    <strong>Contact</strong>
                    <p><a href={'mailto:' + Profile.contact.email}>{Profile.contact.email}</a></p>
                  </div>
              </div>
              <div className="grid-25 follow-me clearfix">
                  <div className="lollipop">
										<i className="fa fa-user-plus"></i>
									</div>
                  <div className="text">
                    <strong>Follow me</strong>
                    <ul className="clearfix">
                        <li><a href={Profile.contact.linktwitter}><i className="fa fa-twitter"></i></a></li>
                        <li><a href={Profile.contact.linkin}><i className="fa fa-linkedin"></i></a></li>
                        <li><a href={'skype:' + Profile.contact.linkskype}><i className="fa fa-skype"></i></a></li>
                    </ul>
                  </div>
              </div>
              <div className="grid-25 copyright clearfix">
                  <div className="lollipop copyright">
										<i className="fa fa-plus"></i>
									</div>
                  <div className="text">
                    <strong>{Profile.contact.c}</strong>
                    <p><a href={Profile.contact.link}>{Profile.contact.website}</a></p>
                  </div>
              </div>
          </div>
      </footer>
		)
	}
});
