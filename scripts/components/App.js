import React from 'react';
import autobind from 'autobind-decorator';
import About from './About';

class App extends React.Component {

	render() {
		return (
			<div className="app">
				<div className="row center-xs">
					<div className="col-xs-12">
						<h1>JobApproach</h1>
					</div>
				</div>
				<div className="row">
				</div>
				<div className="row">
					<About />
				</div>
			</div>
		);
	}
};

export default App;