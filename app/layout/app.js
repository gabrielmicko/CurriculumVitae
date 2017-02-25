import React from 'react';
import { Router } from 'react-router';
import Header from 'partial/header';
import Footer from 'partial/footer';


export default React.createClass({
	render: function() {
		return(
			<div className="site">
				<div className="grid-container container">
						<Header/>
						{ this.props.children }
				</div>
				<Footer/>
			</div>
		);
	}
});
