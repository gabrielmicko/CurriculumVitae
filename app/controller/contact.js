import React from 'react';
import Profile from '../config/profile.json';
import { getSocialIcon, getLink } from '../partial/utils';

export default React.createClass({
  render: function() {
    return (
      <div className="page-contact grid-container grid-parent">
        <div className="grid-100 grid-parent">
          <h1>Contact me</h1>

          <p>
            <strong>Mobile </strong>
            <a href={'tel:' + Profile.contact.tel}>{Profile.contact.tel}</a>
          </p>
          <p>
            <strong>Email </strong>
            <a href={'mailto:' + Profile.contact.email}>{Profile.contact.email}</a>
          </p>
          <p>{Profile.contact.text}</p>
          <ul className="clearfix">
            {Profile.contact.socialLinks.map(({ url, title }, key) => {
              return (
                <li key={key} className="bg-red">
                  <a href={getLink(title, url)}>
                    <i className={`fa fa-${getSocialIcon(title)}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
});
