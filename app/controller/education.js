import React from 'react';
import { Link } from 'react-router';
import Profile from '../config/profile.json';

export default React.createClass({
  getEducationDescription(prof) {
    let title = [];
    if (prof.school) {
      title.push(prof.school);
    }
    if (prof.startDate && prof.endDate) {
      title.push(`${prof.startDate} - ${prof.endDate}`);
    }

    if (prof.location) {
      title.push(`${prof.location}`);
    }
    return title.join(', ');
  },
  render: function() {
    return (
      <div className="page-resume grid-container grid-parent">
        <div className="grid-100 grid-parent">
          <h1 className="title">{Profile.education.title}</h1>
        </div>
        <div className="grid-100 exp grid-parent">
          <div className="grid-parent grid-container">
            {Profile.education.list.map((prof, key) => {
              return (
                <div key={key} className="exp-holder grid-100 grid-parent">
                  <article>
                    <div className="job-description">
                      {prof.logo && (
                        <div>
                          <img className="company-logo" src={prof.logo} />
                        </div>
                      )}
                      <div>
                        <h3>
                          {prof.fieldOfStudy} - {prof.degree}
                        </h3>
                        <time>{this.getEducationDescription(prof)}</time>
                      </div>
                    </div>
                    {prof.paragraphs.map((p, k) => {
                      return (
                        <p
                          key={k}
                          dangerouslySetInnerHTML={(function() {
                            return {
                              __html: p
                            };
                          })()}
                        ></p>
                      );
                    })}
                  </article>
                </div>
              );
            })}
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="grid-100 grid-parent">
          <div className="cta grid-container grid-parent">
            <div className="grid-70 grid-parent">
              <Link to={Profile.education.callToActionLink}>{Profile.education.callToAction}</Link>
            </div>
            <div className="grid-30 grid-parent">
              <Link className="lollipop bg-yellow" to={Profile.education.callToActionLink}>
                {Profile.education.callToActionLollipop}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
