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
              <h1>Downloads</h1>
              {
                Profile.download.downloads.map((prof, key) => {
                  return (
                    <p key={key}><strong>{prof.title} </strong> <a target="_blank" href={prof.link}><i className="fa fa-download"></i> Download</a></p>
                  );
                })
              }
              </div>
          </div>
        )
    }
});
