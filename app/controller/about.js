import React from 'react';
import {
    Link
} from 'react-router';
import Slider from 'partial/image-slider';
import Profile from '../config/profile.json';

export default React.createClass({
    componentDidMount() {
    },
    render: function() {
    	return (
          <div className="page-projects grid-container grid-parent">
            <h1 className="title">{Profile.projects.title}</h1>
            {
              Profile.projects.projects.map((p, k) => {
                return (
                  <article key={k} className="grid-100 grid-parent">
                      <div className="grid-50 grid-parent">
                        <Slider images={p.images} isInfinite={true} delay={3000} visibleItems={1}/>
                      </div>
                      <div className="grid-50">
                          <div className="lollipop bg-cian">{p.title}</div>
                          <h2>{p.subtitle}</h2>
                          <p dangerouslySetInnerHTML={
                            function() {
                              return {
                                '__html': p.text
                              }
                            }()
                          } />
                      </div>
                  </article>
                )
              })
            }
            <div className="cta grid-container grid-parent">
                <div className="grid-70 grid-parent">
                  <Link to={Profile.projects.callToActionLink}>{Profile.projects.callToAction}</Link>
                </div>
                <div className="grid-30 grid-parent">
                    <Link className="lollipop bg-yellow" to={Profile.projects.callToActionLink}>{Profile.projects.callToActionLollipop}</Link>
                </div>
            </div>
          </div>
        )
    }
});
