import React from "react";
import Col from "react-bootstrap/lib/Col";
import Panel from "react-bootstrap/lib/Panel";
import { Navigation } from "./Navigation";
import { Content, ABOUT } from "./Content";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			activePage: ABOUT
		};
	}

	render = () => (
		<Col md={10} mdOffset={1}>
			<Panel style={{ maxHeight: "90vh", overflowY: "scroll", verticalAlign: "middle" }}>
				<Col sm={3}>
					<Navigation
						onNavigate={newActivePage => {
							this.setState({ activePage: newActivePage });
						}}
						currentPage={this.state.activePage}
					/>
				</Col>
				<Col sm={9}>
					<Content activePage={this.state.activePage} />
				</Col>
			</Panel>
		</Col>
	);
}
