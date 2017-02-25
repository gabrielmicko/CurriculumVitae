import React from 'react';
import {
    Link
} from 'react-router';
import Profile from '../config/profile.json';


export default React.createClass({
    componentDidMount() {
    },
    render: function() {
        return (
          <div className="page-contact grid-container grid-parent">
            <div className="grid-100 grid-parent">
              <h1>Contact me</h1>

              <p><strong>Mobile </strong><a href={'tel:' + Profile.contact.tel}>{Profile.contact.tel}</a></p>
              <p><strong>Email </strong><a href={'mailto:' + Profile.contact.email}>{Profile.contact.email}</a></p>
              <p>{Profile.contact.text}</p>
              <ul className="clearfix">
                  <li className="bg-red"><a href={Profile.contact.linkfb}><i className="fa fa-facebook"></i></a></li>
                  <li className="bg-red"><a href={Profile.contact.linktwitter}><i className="fa fa-twitter"></i></a></li>
                  <li className="bg-red"><a href={Profile.contact.linkin}><i className="fa fa-linkedin"></i></a></li>
                  <li className="bg-red"><a href={'skype:' + Profile.contact.linkskype}><i className="fa fa-skype"></i></a></li>
              </ul>
              </div>
          </div>
        )
    }
});
