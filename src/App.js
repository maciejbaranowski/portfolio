import React from "react";
import Col from "react-bootstrap/lib/Col";
import Panel from "react-bootstrap/lib/Panel";

export default class App extends React.Component {
	render = () => (
		<Col md={6} mdOffset={3}>
			<Panel>
				<h2>BergSoft Maciej Baranowski</h2>
				<span>
					Strona w budowie / Site under construction:
					<hr />
					<span>
						🌐 <a href="http://www.maciej-baranowski.pl">www.maciej-baranowski.pl</a>
					</span>
					<br />
					<span>
						📧 <a href="mailto:bergsoft@maciej-baranowski.pl">bergsoft@maciej-baranowski.pl</a>
					</span>
				</span>
			</Panel>
		</Col>
	);
}
