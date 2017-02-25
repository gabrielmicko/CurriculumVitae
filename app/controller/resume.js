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
          <div className="page-resume grid-container grid-parent">
              <div className="grid-100 grid-parent">
                <h1 className="title">{Profile.resume.title}</h1>
              </div>
              <div className="grid-65 exp grid-parent">
                <div className="grid-parent grid-container">
                    {
                      Profile.resume.professional.map((prof, key) => {
                        return (
                          <div key={key}className="exp-holder grid-100 grid-parent">
                              <div className="grid-25 grid-parent">
                                  <div className="lollipop bg-red">{prof.title}</div>
                              </div>
                              <div className="grid-75">
                                <article>
                                  <h3>{prof.position}</h3>
                                  <time>{prof.date}</time>
                                  {
                                    prof.paragraphs.map((p, k) => {
                                      return (
                                        <p key={k}>{p}</p>
                                      );
                                    })
                                  }
                                </article>
                              </div>
                          </div>
                        )
                      })
                    }
                </div>
              </div>
              <div className="details grid-35 grid-parent">
                  {
                    Profile.resume.skills.map((skill, key) => {
                      return (
                      <div key={key} className="detail">
                          <div className="lollipop bg-cian">
                            <i className={'fa ' + skill.icon}></i>
                          </div>
                          <div className="skill">{skill.title}</div>
                          <ul>

                            {

                                skill.list.map((l, k) => {
                                  return (
                                    <li key={k} dangerouslySetInnerHTML={
                                      function() {
                                        return {
                                          '__html': l
                                        }
                                      }()
                                    }/>
                                  )
                                })
                            }
                          </ul>
                      </div>
                      )
                    })
                  }
              </div>
              <div className="clearfix"></div>
              <div className="grid-100 grid-parent">
              <div className="cta grid-container grid-parent">
                  <div className="grid-70 grid-parent">
                    <Link to={Profile.resume.callToActionLink}>{Profile.resume.callToAction}</Link>
                  </div>
                  <div className="grid-30 grid-parent">
                      <Link className="lollipop bg-yellow" to={Profile.resume.callToActionLink}>{Profile.resume.callToActionLollipop}</Link>
                  </div>
              </div>
              </div>
          </div>
        )
    }
});
