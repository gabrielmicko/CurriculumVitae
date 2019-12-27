import React from 'react';
import { Link } from 'react-router';
import Profile from '../config/profile.json';

export default React.createClass({
  getBackgroundImage() {
    return {
      backgroundImage: 'url(' + Profile.profile_picture + ')'
    };
  },
  render: function() {
    return (
      <div className="page-index grid-container grid-parent">
        <div className="grid-45">
          <div className="myimage" style={this.getBackgroundImage()}></div>
        </div>
        <div className="grid-55 text">
          <h1>{Profile.welcome_first}</h1>
          <h2>{Profile.welcome_second}</h2>
          <ul className="lollipop clearfix">
            {Profile.index.lollipops.map((lop, index) => {
              return (
                <li key={index}>
                  <Link className={lop.class} to={lop.url}>
                    {lop.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p
            dangerouslySetInnerHTML={(function() {
              return {
                __html: Profile.index.short_bio
              };
            })()}
          />
          <div className="important">
            <h3>Most important things about me:</h3>
            <ul>
              {Profile.index.mostImportantThings.map((t, key) => {
                return <li key={key}>{t}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
