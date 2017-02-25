import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from 'layout/app';
import { IndexAction, ResumeAction, AboutAction, ContactAction, DownloadAction, NoMatch } from 'controller/controller'
import DocumentTitle from 'react-document-title';
import Profile from './config/profile.json';

ReactDOM.render((
    <DocumentTitle title={Profile.document_title}>
      <Router history={browserHistory}>
          <Route component={App}>
  		  		  <Route path="/" component={IndexAction} />
  		  		  <Route path="/resume" component={ResumeAction} />
  		  		  <Route path="/about" component={AboutAction} />
  		  		  <Route path="/contact" component={ContactAction} />
  		  		  <Route path="/download" component={DownloadAction} />
  				    <Route path="*" component={NoMatch}/>
          </Route>
      </Router>
    </DocumentTitle>
), document.getElementById('contain'));
