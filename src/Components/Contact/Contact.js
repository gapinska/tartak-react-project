import './Contact.scss'
import React from 'react'

const Contact = () => {
	return (
		<div className="contact-main-container">
			<div className="content-data">
				<h1 className="header">TARTAK LORKI</h1>
				<p className="data">Lorki 36, 13-324 Grodziczno</p>
				<p className="data">
					<span>tel. </span>519-591-509
				</p>
				<p className="data">
					<span>e-mail: </span>biurotartaklorki@gmail.com
				</p>
			</div>
			<div className="map-container">
				<iframe
					title="Tartak Lorki"
					width="720"
					height="400"
					frameBorder="0"
					scrolling="no"
					marginHeight="0"
					marginWidth="0"
					src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=Tartak%20Lorki+(Tartak%20Lorki)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				/>
			</div>
		</div>
	)
}

export default Contact
