import React from 'react';
import { Link } from 'react-router';
import Profile from '../config/profile.json';

export default React.createClass({
  getJobDescription(prof) {
    let title = [];
    if (prof.company) {
      title.push(prof.company);
    }
    if (prof.startDate && prof.endDate) {
      let date = `${prof.startDate} - ${prof.endDate}`;

      if (prof.duration) {
        date += ` (${prof.duration})`;
      }
      title.push(date);
    }

    if (prof.location) {
      title.push(`${prof.location}`);
    }
    return title.join(' • ');
  },
  mergeInfo(resume) {
    return resume.skills.concat([
      {
        icon: 'fa-compass',
        title: 'Location',
        list: [`Nationality: ${resume.nationalities.join(', ')}`, `Location: ${resume.location}`]
      }
    ]);
  },
  render: function() {
    return (
      <div className="page-resume grid-container grid-parent">
        <div className="grid-100 grid-parent">
          <h1 className="title">{Profile.resume.title}</h1>
        </div>
        <div className="grid-65 exp grid-parent">
          <div className="grid-parent grid-container">
            {Profile.resume.professional.map((prof, key) => {
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
                        <h3>{prof.jobTitle}</h3>
                        <time>{this.getJobDescription(prof)}</time>
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
        <div className="details grid-35 grid-parent">
          {this.mergeInfo(Profile.resume).map((skill, key) => {
            return (
              <div key={key} className="detail">
                <div className="lollipop bg-cian">
                  <i className={'fa ' + skill.icon}></i>
                </div>
                <div className="skill">{skill.title}</div>
                <ul>
                  {skill.list.map((l, k) => {
                    return (
                      <li
                        key={k}
                        dangerouslySetInnerHTML={(function() {
                          return {
                            __html: l
                          };
                        })()}
                      />
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="clearfix"></div>
        <div className="grid-100 grid-parent">
          <div className="cta grid-container grid-parent">
            <div className="grid-70 grid-parent">
              <Link to={Profile.resume.callToActionLink}>{Profile.resume.callToAction}</Link>
            </div>
            <div className="grid-30 grid-parent">
              <Link className="lollipop bg-yellow" to={Profile.resume.callToActionLink}>
                {Profile.resume.callToActionLollipop}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
