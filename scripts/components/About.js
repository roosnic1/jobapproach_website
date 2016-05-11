import React from 'react';
import autobind from 'autobind-decorator';

class About extends React.Component {

	render() {
		return (
			<div className="about">
				<img className="about__image" src="css/images/profile.png" />
				<div className="about__description">
					<p>Patricia Bouchard</p>
					<p>Lic.phil.I, dipl. Ausbilderin FA</p>
				</div>
				<div className="about__text">
					<p>Seit 2002 arbeite ich mit Stellensuchenden zusammen und nehme die sich immer schneller verändernden Bedingungen auf dem Arbeitsmarkt aufmerksam wahr.</p>
					<p> Aktuell führe ich auf Mandatsbasis Kurse für Kaderleute und Spezialisten  im Rahmen der arbeitsmarktlichen Massnahmen des Kantons Schwyz durch.</p>
				</div>
			</div>
		);
	}
};

export default About;